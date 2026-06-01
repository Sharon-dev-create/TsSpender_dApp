 "use client"

 import InputField from "../ui/InputField";
 import { useState } from "react";
 import { chainsToTSender, tsenderAbi, erc20Abi  } from "../app/constants";

 export default function AirdropForm() {
    const [tokenAddress, setTokenAddress] = useState("");   
    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState("");

    async function handleSubmit() {
        // b. If already approved move to step two IF NOT APPROVED, APPROVE FIRST THEN MOVE TO STEP TWO
        // 1. Approve our tsender contract to send the tokens
        // 2. Call the tsender contract to send the <tokens></tokens>
        const tSenderAddress =     
    }

    return (
        <div>
            <InputField
                label="Recipient Address"
                placeholder="Enter recipient address..."
                value={recipient}  
                large
                onChange={(e) => setRecipient(e.target.value)}
            />
            <InputField
                label="Token Address"
                placeholder="0x234..."
                value={tokenAddress}  
                large= {true}
                onChange={(e) => setTokenAddress(e.target.value)}
            />
            <InputField
                label="Amount"
                placeholder="100, 200, 300..."
                value={amount}  
                large= {true}
                onChange={(e) => setAmount(e.target.value)}
            />
                <button onClick ={handleSubmit}>
                  Send Tokens
                </button>
        </div>
    )
 }