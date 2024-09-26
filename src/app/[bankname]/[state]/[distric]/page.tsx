
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
    }
}


export const metadata: Metadata = {
    title: `Find {bankname} Bank IFSC/NEFT/RTGS/IMPS Codes in {distric} {state}`,
    description: `List of codes for {bankname} Bank branches across cities of {distric} district. Use the codes to transfer funds via NEFT, RTGS or IMPS between {bankname} accounts located within {distric} for hassle-free banking.`,
};





// function formatBankName(name: string): string {
//     return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
// }

export default function BankPage({ params }: PageProps) {
    const { bankname, state, distric } = params
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
                    <CityTable bankName={bankname} stateName={state} districtName={distric} />
                </div>
                <div className="basis-1/5">
                    <BranchTable />
                </div>
            </div>
            {bankname} {state}
            <div className="my-5">
                <h1 className="text-3xl font-bold mb-4">Find IFSC Code for {bankname} Bank {distric}  {state}  </h1>
                <p className="mb-4">{bankname} Branches with IFSC Codes are Available in Most of {distric} Cities </p>
                <p className="mb-4">(Show all States name where Bank Branch Available)</p>

                <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">How to Find {distric} {bankname} Bank NEFT, RTGS and IMPS Codes?</h2>
                <p className="mb-4">The table provided contains the list of IFSC/NEFT/RTGS/IMPS codes for all {bankname} Bank branches located in the city of {distric}, {state}. These codes can be used for seamless electronic fund transfers through net banking. In today's fast-paced world, quick and convenient banking solutions are the need of the hour to save considerable time. To carry out transactions through NEFT, RTGS or IMPS, one requires the account details of the sender and beneficiary along with the IFSC code. While NEFT transfers are processed in batches, RTGS transactions are settled instantly on an individual basis. IMPS offers an additional 24x7 mobile banking platform to transfer funds instantly. These online fund transfer systems offer a paperless and faster way to carry out various financial transactions like utility bill payments, insurance premium payments, loan EMIs, online shopping and more at one's convenience from anywhere.</p>

                <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">{bankname} IFSC Codes in {distric}</h2>
                <p className="mb-4">{bankname} IFSC codes assigned to branches located in {distric}, {state} play a vital role in facilitating seamless fund transfers via various online banking systems. These 11-digit codes help uniquely identify each participating {bankname} Bank branch in {distric} to correctly route transactions conducted through RTGS, NEFT or IMPS. Hence, every {bankname} Bank branch office in {distric} that supports Internet banking services has been allocated a distinct IFSC code. This listing of Industrial Credit And Investment Corporation of India IFSC codes for {distric} has been provided by the Reserve Bank of India. It is important to note that not every branch of a bank may necessarily offer an online funds transfer facility, as RBI approval is required to provide such banking services, and only branches granted such approval will have an active IFSC code, even if they are part of the bank network.</p>

                <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">How to Find {bankname} Bank IFSC Codes in {distric}?</h2>
                <p className="mb-4">For the convenience of users, the table provides the comprehensive list of {bankname} IFSC codes mapped to individual branches located across various cities within {distric}, along with their full addresses and contact details. This allows customers to easily identify the specific destination branch required for fund transfers. One can efficiently navigate through the list by either opting for their city of choice from the drop-down menu above the table or by clicking on the city name link shown in the table to the right. Having all Industrial Credit And Investment Corporation of India IFSC codes for branches in {distric} compiled centrally empowers users to conveniently access the correct codes right here for carrying out seamless online money transfers via RTGS, NEFT or IMPS from any {bankname} Bank location within this city.</p>

                <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">Search {bankname} IFSC Codes in {distric}</h2>
                <p className="mb-4">This comprehensive database allows users to effortlessly search through or browse the extensive listing of all {bankname} Bank IFSC codes assigned to branches located across different cities within the {distric} district of {state} state. Users have the flexibility to either enter a keyword in the search box at the top to instantly locate the relevant branch details or use the pagination controls at the bottom of the table to sequentially navigate through the entire data set in a structured manner. This dual approach enables locating {bankname} Bank IFSC codes within the {distric} district in a simple and user-friendly manner.</p>
            </div>
        </div>
    )
}

