"use client";

import { useState } from "react";
import AirdropForm from "../components/AirdropForm";
import InputField from "../ui/InputField"
import Header from "../components/Header";

export default function Page() {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <Header />
      <AirdropForm /> 
      <InputField
      label="Messageee fuuucckk"
        placeholder="Enter your message..."
        value={message}
        large
        onChange={(e) => setMessage(e.target.value)}
     /> 
      </div>
  );
}