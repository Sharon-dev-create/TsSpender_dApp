 "use client"

 import InputField from "../ui/InputField";
 import { useState } from "react";

 export default function AirdropForm() {
    const [tokenAddress, setTokenAddress] = useState("");   

    return (
        <div>
            <InputField
                label="Recipient Address"
                placeholder="Enter your message..."
                value=""  
                large
                onChange={() => {}}
            />
        </div>
    )
 }