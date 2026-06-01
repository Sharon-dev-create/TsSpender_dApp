 "use client"

 import InputField from "../ui/InputField";
 import { useState } from "react";

 export default function AirdropForm() {
    const [tokenAddress, setTokenAddress] = useState("");   
    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState("");

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
        </div>
    )
 }