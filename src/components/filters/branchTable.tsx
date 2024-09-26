"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface BankProps {
    bankName?: string;
    stateName?: string;
    districtName?: string;
    cityName?: string;
}

export interface BranchDataDto {
    status: number;
    data: branchData[];
}

export interface branchData {
    BANK: string;
    IFSC: string;
    BRANCH: string;
    ADDRESS: string;
    DISTRICT: string;
    CITY: string;
    STATE: string;
    'STD CODE': string;
    PHONE: string;
}

const BranchTable = ({ bankName, stateName, districtName, cityName }: BankProps) => {
    const [data, setData] = useState<branchData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!bankName || !stateName || !districtName || !cityName) {
                return; // Ensure all fields are provided
            }

            setLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `https://findbankifsc.com/apiReact/finalApi.php?bank=${bankName}&state=${stateName}&district=${districtName}&branch=${cityName}`
                );
                if (!response.ok) throw new Error("Failed to fetch data");

                const result: BranchDataDto = await response.json();
                setData(result.data);
            } catch (error) {
                console.error("Failed to fetch data:", error);
                setError("Failed to load branch data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [bankName, stateName, districtName, cityName]);

    return (
        <>
            <div className="container mx-auto">
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {!loading && !error && data.length > 0 ? (
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">Bank</th>
                                <th className="border border-gray-300 px-4 py-2">Branch</th>
                                <th className="border border-gray-300 px-4 py-2">IFSC</th>
                                <th className="border border-gray-300 px-4 py-2">Address</th>
                                <th className="border border-gray-300 px-4 py-2">District</th>
                                <th className="border border-gray-300 px-4 py-2">City</th>
                                <th className="border border-gray-300 px-4 py-2">State</th>
                                <th className="border border-gray-300 px-4 py-2">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((branch, index) => (
                                <tr key={index} className="text-center">
                                    <td className="border border-gray-300 px-4 py-2">{branch.BANK}</td>
                                    <td className="border border-gray-300 px-4 py-2">{branch.BRANCH}</td>
                                    <td className="border border-gray-300 px-4 py-2">{branch.IFSC}</td>
                                    <td className="border border-gray-300 px-4 py-2">{branch.ADDRESS}</td>
                                    <td className="border border-gray-300 px-4 py-2">{branch.DISTRICT}</td>
                                    <td className="border border-gray-300 px-4 py-2">{branch.CITY}</td>
                                    <td className="border border-gray-300 px-4 py-2">{branch.STATE}</td>
                                    <td className="border border-gray-300 px-4 py-2">{branch.PHONE}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    !loading && <p>No data found for the selected filters.</p>
                )}
            </div>
        </>
    );
};

export default BranchTable;
