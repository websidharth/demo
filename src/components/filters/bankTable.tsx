"use client";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { ComboboxDemo } from './combobox';

interface BankProps {
    bankName?: string; // Optional prop for the selected bank name
}
const BanlTable = ({ bankName }: BankProps) => {
    const router = useRouter();
    const [data, setData] = useState<{ label: string; value: string }[]>([]);
    const [value, setValue] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://findbankifsc.com/apiReact/bankDetails.php");
                if (!response.ok) throw new Error("Failed to fetch data");

                const jsonData = await response.json();
                const transformedData = jsonData.data.map((item: any) => ({
                    label: item.DISPLAY_NAME,
                    value: item.TABLE_NAME,
                }));


                setData(transformedData);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, []);

    //console.log("data", data)

    const handleSelect = (selectedValue: string) => {
        setValue(selectedValue);
        router.push(`/${selectedValue}`);
    };



    return (
        <>
            <div className="">
                <ComboboxDemo
                    data={data}
                    placeholder="Select Bank*"
                    searchPlaceholder="Enter Bank Name"
                    value={bankName ? bankName : value}
                    onSelect={handleSelect}
                />

            </div>
        </>
    );
};

export default BanlTable;




