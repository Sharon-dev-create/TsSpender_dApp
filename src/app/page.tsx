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
      </div>
  );
}