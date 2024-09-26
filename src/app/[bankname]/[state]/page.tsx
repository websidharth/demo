
import { Metadata } from "next"
import BanlTable from '@/components/filters/bankTable'
import StateTable from '@/components/filters/stateTable'
import DistrictTable from '@/components/filters/districtTable'
import CityTable from '@/components/filters/cityTable'
import BranchTable from '@/components/filters/branchTable'

interface PageProps {
    params: {
        bankname?: string
        state?: string
    }
}



export const metadata: Metadata = {
    title: `Find IFSC Codes for {bankname} Bank in {state}`,
    description: `List of IFSC codes for all branches of {bankname} Bank located in different districts of {state}. Use NEFT, RTGS or IMPS online banking to transfer funds between {bankname} accounts with the correct IFSC code in {state}.`,
};




// function formatBankName(name: string): string {
//     return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
// }

export default function BankPage({ params }: PageProps) {
    const { bankname, state } = params
    //const formattedBankName = formatBankName(bankname)


    return (
        <div className="container mx-auto px-4">
            <div className="flex gap-4">
                <div className="basis-1/5">
                    <BanlTable bankName={bankname} />
                </div>
                <div className="basis-1/5">
                    <small>State Page :{state}</small>
                    <StateTable bankName={bankname} stateName={state} />
                </div>
                <div className="basis-1/5">
                    <DistrictTable bankName={bankname} stateName={state} />
                </div>
                <div className="basis-1/5">
                    <CityTable />
                </div>
                <div className="basis-1/5">
                    <BranchTable />
                </div>
            </div>
            {bankname} {state}
            <div className="my-5">
                <h1 className="text-3xl font-bold mb-4">Find IFSC Code for {bankname} Bank {state}  </h1>
                <p className="mb-4">{bankname} Branches with IFSC Codes are Available in Most of {state} Districts</p>
                <p className="mb-4">(Show all States name where Bank Branch Available)</p>

                <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">How to Find {state} {bankname} Bank NEFT, RTGS and IMPS Codes?</h2>
                <p className="mb-4">The table provided contains the list of IFSC/NEFT/RTGS/IMPS codes for all {bankname} Bank branches located in the state of {state}. Since the IFSC code is the same as the codes used for NEFT, RTGS and IMPS fund transfer systems, users can conveniently locate the correct code of the destination branch before carrying out net banking transactions. A major advantage of using electronic fund transfer systems is that the process is completely paperless, eliminating the need for physical cheques or demand drafts. This saves significant time, effort and energy for both the sender as well as receiver of funds. Interstate transfers that previously required cheques to be cleared can now be done instantly through NEFT, RTGS or IMPS, providing a more convenient and faster method of money transfer. Having all the {state} {bankname} Bank codes available in one place facilitates swift and seamless e-payments.</p>

                <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">{bankname} IFSC Codes in {state}</h2>
                <p className="mb-4">The IFSC codes of {bankname} Bank branches located in {state} can be used for carrying out seamless fund transfers through popular online systems like NEFT, RTGS and IMPS. With {bankname} Bank having established a wide network across the state, it is not always convenient to physically visit branches for routine banking needs. Therefore, the IFSC code plays a vital role in enabling customers to leverage Internet banking facilities for their day-to-day financial transactions from anywhere, thus catering to the demands of fast-paced modern lifestyles. IFSC codes are essential for uniquely identifying each participating bank branch to correctly route online transactions. Hence, every {bankname} Bank branch in {state} that supports net banking is allocated a distinct IFSC code by the Reserve Bank of India. However, it is important to note that only {bankname} branches approved by RBI for providing electronic funds transfer services will have a valid IFSC, while others may not support or display their codes despite having them allocated.</p>

                <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">How to find the IFSC Code for {bankname} Bank {state}?</h2>
                <p className="mb-4">{bankname} IFSC code list for branches located across various districts in the state of {state} is provided in the table for easy reference. Along with the 11-digit codes, addresses and contact details of individual {bankname} Bank branches are also displayed to help users accurately identify the destination branch for fund transfers. The list can be navigated efficiently by either selecting the relevant district from the drop-down menu above the table or by clicking on the district name link in the table shown on the right side. This allows users to narrow down their search location and spot the correct IFSC code with ease. Having a centralized repository of all Industrial Credit And Investment Corporation of India branch codes in {state} empowers customers to access the required IFSC codes conveniently through a single platform for carrying out seamless online money transfers.</p>

                <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">Search {bankname} IFSC Codes in {state}</h2>
                <p className="mb-4">This comprehensive information allows users to effortlessly search through the extensive listing of all {bankname} Bank IFSC codes assigned to branches located across different districts within the state of {state}. The website owners recognize that maintaining an accurate repository of IFSC codes is crucial for facilitating seamless electronic fund transfers. Therefore, they regularly monitor the Reserve Bank of India's website for any new or revised IFSC codes allocated to {bankname} Bank branches in {state}. Whenever the central bank publishes an updated list, prompt efforts are made to synchronize the same on this platform, ensuring users always have access to the most current {bankname} IFSC codes for branches in the state. This real-time updating of Industrial Credit And Investment Corporation of India IFSC codes helps provide a reliable online resource to facilitate error-free net banking transactions for individuals and businesses alike.</p>
            </div>
        </div>
    )
}

