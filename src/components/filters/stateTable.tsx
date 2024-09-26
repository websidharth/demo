"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ComboboxDemo } from './combobox';

interface BankProps {
    bankName?: string;
    stateName?: string;
    // Optional prop for the selected bank name
}

const StateTable = ({ bankName, stateName }: BankProps) => {
    const router = useRouter();
    const [data, setData] = useState<{ label: string; value: string }[]>([]);
    const [value, setValue] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://findbankifsc.com/apiReact/getState.php?bank=${bankName}`);
                if (!response.ok) throw new Error("Failed to fetch data");

                const jsonData = await response.json();
                const transformedData = jsonData.data.map((item: any) => ({
                    label: item,
                    value: item.replace(/\s+/g, '-'),
                }));
                setData(transformedData);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, [bankName]);

    //console.log("state", data)

    const handleSelect = (selectedValue: string) => {
        setValue(selectedValue);

        router.push(`/${bankName}/${selectedValue}`); // Navigate to the new route
    };

    return (
        <>
            <div className=" ">

                <ComboboxDemo
                    data={data}
                    placeholder="Select Bank*"
                    searchPlaceholder="Enter Bank Name"
                    value={stateName ? stateName : value}
                    onSelect={handleSelect}
                />




            </div>
        </>
    );
};

export default StateTable;
