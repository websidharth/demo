


"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ComboboxDemo } from './combobox';

interface BankProps {
    bankName?: string;
    stateName?: string;
    districtName?: string
    // Optional prop for the selected bank name
}

const DistrictTable = ({ bankName, stateName, districtName }: BankProps) => {
    const router = useRouter();
    const [data, setData] = useState<{ label: string; value: string }[]>([]);
    const [value, setValue] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://findbankifsc.com/apiReact/getDistrict.php?bank=${bankName}&state=${stateName}`);
                if (!response.ok) throw new Error("Failed to fetch data");

                const jsonData = await response.json();
                const transformedData = jsonData.data.map((item: any) => ({
                    label: item.DISTRICT,
                    value: item.DISTRICT.replace(/\s+/g, '-'),
                }));
                setData(transformedData);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, [bankName, stateName]);

    //console.log("distric", data)

    const handleSelect = (selectedValue: string) => {
        setValue(selectedValue);

        router.push(`/${bankName}/${stateName}/${selectedValue}`); // Navigate to the new route
    };

    return (
        <>
            <div className=" ">

                <ComboboxDemo
                    data={data}
                    placeholder="Select Bank*"
                    searchPlaceholder="Enter Bank Name"
                    value={districtName ? districtName : value}
                    onSelect={handleSelect}
                />




            </div>
        </>
    );
};

export default DistrictTable;

