 "use client"

 import InputField from "../ui/InputField";
 import { useState } from "react";

 export default function AirdropForm() {
    const [tokenAddress, setTokenAddress] = useState("");   
    const [recipient, setRecipient] = useState("");

    return (
        <div>
            <InputField
                label="Recipient Address"
                placeholder="Enter recipient address..."
                value={tokenAddress}  
                large
                onChange={(e) => setTokenAddress(e.target.value)}
            />
            <InputField
                label="Token Address"
                placeholder="Enter token address..."
                value={tokenAddress}  
                large
                onChange={(e) => setTokenAddress(e.target.value)}
            />
        </div>
    )
 }