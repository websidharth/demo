
import { Metadata } from "next"
import BanlTable from '@/components/filters/bankTable'
import StateTable from '@/components/filters/stateTable'
import DistrictTable from '@/components/filters/districtTable'
import CityTable from '@/components/filters/cityTable'
import BranchTable from '@/components/filters/branchTable'


interface PageProps { params: { bankname: string } }


// export async function generateStaticParams() {
//     const response = await fetch('https://findbankifsc.com/apiReact/bankDetails.php');
//     const posts = await response.json();

//     // Extract TABLE_NAME values as bank names
//     const bankNames = posts.data.map((item: any) => item.TABLE_NAME);

//     // Return the params object for each bankname
//     return bankNames.map((bankname: any) => ({
//         bankname,
//     }));
// }





export async function generateStaticParams() {
    const bankNames = ['BANK_AXIS', 'BOB_BANK', 'BANK_INDIA', 'BANK_MAHARASTRA', 'BANK_CANARA', 'BANK_CENTRAL', 'BANK_CITI', 'BANK_HDFC', 'BANK_ICICI', 'BANK_IDBI', 'BANK_SBI', 'BANK_HSBC'
    ];

    return bankNames.map(bankname => ({
        bankname,
    }));
}




function formatBankName(name: string): string {
    return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export const metadata: Metadata = {
    title: `  Find Bank IFSC Codes Details in Seconds`,
    description: `Use our bank IFSC code finder to search for   branch IFSC numbers online. Simply enter the bank name and branch to look for IFSC codes and get bank details.`,
};


export default function BankPage({ params }: PageProps) {



    const { bankname } = params
    const formattedBankName = formatBankName(bankname)


    return (
        <div className="container mx-auto px-4">

            <div className="flex gap-4">
                <div className="basis-1/5">
                    <BanlTable bankName={bankname} />
                </div>
                <div className="basis-1/5">
                    <StateTable bankName={bankname} />
                </div>
                <div className="basis-1/5">
                    <DistrictTable />
                </div>
                <div className="basis-1/5">
                    <CityTable />
                </div>
                <div className="basis-1/5">
                    <BranchTable />
                </div>
            </div>





            <div className="my-5">
                <h1 className="text-3xl font-bold mb-4">Find IFSC Code for {formattedBankName} Bank</h1>
                <p className="mb-4">{formattedBankName} Branches with IFSC codes are Available in Most Indian States</p>
                <p className="mb-4">(Show all States name where Bank Branch Available)</p>

                <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">How to use NEFT, RTGS and IMPS for fund transfer for {formattedBankName}?</h2>
                <p className="mb-4">For carrying out online fund transfers between bank accounts, apart from knowing the Indian Financial System Code (IFSC) of the {formattedBankName} bank which is provided on this website, individuals need to ensure they have accurate details of the recipient's bank account number, name of the account holder as registered with the bank, and account type, which is usually savings or current. With this IFSC code list for various banks provided by the Industrial Credit and Investment Corporation of India, account holders can easily find the correct IFSC code of the beneficiary bank branch to initiate online money transfers. Once armed with complete beneficiary account details along with the IFSC code, individuals can use internet or mobile banking to conveniently transfer funds online for a variety of transactions such as paying insurance premiums, utility bills, booking tickets, making donations, online shopping and more.</p>

                <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">IFSC Code for {formattedBankName}</h2>
                <p className="mb-4">The IFSC code of {formattedBankName} can be used for both National Electronic Fund Transfer (NEFT) and Real Time Gross Settlement (RTGS) financial transactions, as these codes are allocated to bank branches by the Reserve Bank of India to facilitate domestic funds transfer systems. While NEFT transactions are settled periodically in batches throughout the day, RTGS transactions are settled individually and instantly through the day. IMPS provides an additional instant 24x7 electronic fund transfer option using IFSC codes. The 11-digit IFSC code uniquely identifies bank branches participating in online money transfers. It is important to note that not all branches of a bank may provide net banking or funds transfer facilities, even if they have an IFSC allocated, as the code only identifies the branch - the branch itself must actively participate in online transaction systems.</p>

                <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">How to find {formattedBankName} IFSC Codes</h2>
                <p className="mb-4">The table provided contains the comprehensive {formattedBankName} IFSC code list, which can be used as a handy IFSC code finder for individuals looking to transfer funds to {formattedBankName} Bank accounts. The codes listed cater to all {formattedBankName} Bank branches located across various states in India. One can use these {formattedBankName} Bank NEFT, RTGS or IMPS codes by finding the specific code of the destination branch before initiating any electronic funds transfer. The list allows narrowing down the search by either selecting the relevant state from the drop-down menu above the table or by clicking on the particular state name in the table displayed on the right side, thus making it simple to locate the correct IFSC code in an organized manner. This paves the way for swift and accurate online money transfers to {formattedBankName} Bank accounts using NEFT, RTGS or IMPS.</p>

                <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600">Search {formattedBankName} IFSC Codes!</h2>
                <p className="mb-4">This comprehensive {formattedBankName} IFSC code finder allows users to seamlessly search through the extensive list of codes allocated to all {formattedBankName} Bank branches across the country. The website owners recognize the importance of maintaining an accurate and up-to-date database of IFSC codes to facilitate error-free funds transfers. Hence, they are diligently working towards regularly updating the {formattedBankName} IFSC code list by including codes for any new branches as and when that information is made available on the Reserve Bank of India's official website. This ensures users can confidently rely on this {formattedBankName} IFSC code search platform to obtain the correct codes needed to seamlessly transfer funds between {formattedBankName} Bank accounts using various electronic payment systems. The ongoing efforts to keep the {formattedBankName} IFSC code listing current aim to provide consumers with an invaluable resource for online banking transactions.</p>
            </div>
        </div>
    )
}