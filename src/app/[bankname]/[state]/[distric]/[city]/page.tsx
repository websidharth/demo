

import { Metadata } from "next"
import BanlTable from '@/components/filters/bankTable'
import StateTable from '@/components/filters/stateTable'
import DistrictTable from '@/components/filters/districtTable'
import CityTable from '@/components/filters/cityTable'
import BranchTable from '@/components/filters/branchTable'

interface PageProps {
    params: {
        bankname: string
        state: string
        distric: string
        city: string
    }
}

export const metadata: Metadata = {
    title: `Find IFSC/NEFT/RTGS/IMPS Codes for {bankname} Bank in {city}`,
    description: `List of banking codes for branches of {bankname} Bank located in {city}. Use the codes to transfer funds via NEFT, RTGS or IMPS between {bankname} accounts in {city} for easy online banking.`,
};



export default function BankPage({ params }: PageProps) {
    const { bankname, state, distric, city } = params
    //const formattedBankName = formatBankName(bankname)


    return (
        <div className="container mx-auto px-4">
            <div className="flex gap-4">
                <div className="basis-1/5">
                    <BanlTable bankName={bankname} />
                </div>
                <div className="basis-1/5">
                    <StateTable bankName={bankname} stateName={state} />
                </div>
                <div className="basis-1/5">
                    <DistrictTable bankName={bankname} stateName={state} districtName={distric} />
                </div>
                <div className="basis-1/5">
                    <small>City Page :{bankname},{state} {distric}</small>
                    <CityTable bankName={bankname} stateName={state} districtName={distric} cityName={city} />
                </div>

            </div>

            <div className="my-5">
                <div className=" ">
                    <BranchTable bankName={bankname} stateName={state} districtName={distric} cityName={city} />
                </div>
                <h1 className="text-3xl font-bold mb-4">Find IFSC Code for {bankname} Bank {city}</h1>
                <p className="mb-4">A Total Branches of {bankname} are Available With Ifsc Code</p>
                <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">What are {distric} {bankname} Bank NEFT, RTGS and IMPS Codes?</h2>
                <p className="mb-4">NEFT, RTGS and IMPS codes for {bankname} Bank which are the same as IFSC codes are given in the table. These NEFT, RTGS and IMPS codes are used in net banking and for carrying out these transactions we need account details like account number, holder's name as per bank records, type of account and IFSC code. Money can be transferred using any of the three techniques i.e. NEFT, RTGS and IMPS and these Industrial Credit And Investment Corporation of India IFSC codes for digha branches can be used for various online bill payments, insurance premium payments, Electronic clearing Systems, train, bus and plane ticket bookings, online shopping, etc.</p>

                <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">{bankname} IFSC Code in {city}</h2>
                <p className="mb-4">{bankname} IFSC code in {city} is an 11-digit code used in online fund transfers. All the banks have a number of branches spread across the country and it is not always feasible to wait for {bankname} Bank physical cheques to travel across the country to transfer funds, hence Internet banking provides a solution to this. To carry out online transactions using RTGS, IMPS or NEFT, each bank branch needs to be identified individually and IFSC codes for {bankname} in {bankname} Bank are used for the same purpose and hence are unique. NOTE that not all branches support electronic fund transfer, only those approved by RBI can provide such a facility and the Industrial Credit And Investment Corporation of India IFSC code list for {city} is provided by RBI to identify the branches that support online transactions.</p>

                <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">How to Find {city} {bankname} Bank IFSC Codes?</h2>
                <p className="mb-4">{bankname} {city} IFSC codes are given in the table alongside details including address and contact numbers for each branch which will help to verify the IFSC code with respective banks before the actual transaction. One can further search by branch name specified in the table to find IFSC codes for all {bankname} Bank {city} branches. These IFSC codes and branch details provided in the table are important as they allow users to identify the exact branch for fund transfer transactions using NEFT, RTGS, and IMPS through Internet banking by matching the IFSC code and cross-verifying the branch address and contact details.</p>

                <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">Search {bankname} IFSC Codes in {distric}</h2>
                <p className="mb-4">The IFSC codes for branches of various banks located in {city}, {distric} district of {state} state are provided to enable users to search or browse through the codes easily. One can either use the dedicated search box to look up a specific IFSC code by inputting the branch name or code or browse through the entire table of codes using the pagination controls given at the bottom. This allows users to conveniently search for the required IFSC code of any bank branch located in {city}, {distric}, {state} whether it is {bankname} or any other bank. Having the IFSC codes of all {city} branches in a single table facilitates fund transfer in digital mode through RTGS, NEFT or IMPS.</p>
            </div>
        </div>
    )
}



