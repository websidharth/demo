


"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ComboboxDemo } from './combobox';

interface BankProps {
    bankName?: string;
    stateName?: string;
    districtName?: string
    cityName?: string
    // Optional prop for the selected bank name
}

const DistrictTable = ({ bankName, stateName, districtName, cityName }: BankProps) => {
    const router = useRouter();
    const [data, setData] = useState<{ label: string; value: string }[]>([]);
    const [value, setValue] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch(`https://findbankifsc.com/apiReact/finalApi.php?bank=${bankName}&state=${stateName}&district=${districtName}`);
                if (!response.ok) throw new Error("Failed to fetch data");

                const jsonData = await response.json();
                const transformedData = jsonData.data.map((item: any) => ({
                    label: item.BRANCH,
                    value: item.BRANCH.replace(/\s+/g, '-'),
                }));
                setData(transformedData);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, [bankName, stateName, districtName]);

    //console.log("City", data)

    const handleSelect = (selectedValue: string) => {
        setValue(selectedValue);

        router.push(`/${bankName}/${stateName}/${districtName}/${selectedValue}`); // Navigate to the new route
    };

    return (
        <>
            <div className=" ">

                {cityName ? <>
                    <ComboboxDemo
                        data={data}
                        placeholder="Select District*"
                        searchPlaceholder="Enter District Name"
                        value={cityName}
                        onSelect={handleSelect}
                    />
                </> : <>
                    <ComboboxDemo
                        data={data}
                        placeholder="Select District*"
                        searchPlaceholder="Enter District Name"
                        value={value}
                        onSelect={handleSelect}
                    />
                </>}


            </div>
        </>
    );
};

export default DistrictTable;

