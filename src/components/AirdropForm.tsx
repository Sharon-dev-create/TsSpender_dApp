"use client";

import InputField from "../ui/InputField";
import { useState } from "react";
import { chainsToTSender, tsenderAbi, erc20Abi } from "../app/constants";
import { useChainId, useReadContract, useAccount } from "wagmi";
import { readContract } from "@wagmi/core";
import { config } from "process";
import { Account } from "viem/tempo";

export default function AirdropForm() {
  const [tokenAddress, setTokenAddress] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const chainId = useChainId();

  async function getApprovedAmount(
    tSenderAddress: string | null,
  ): Promise<number> {
    if (!tSenderAddress) {
      alert("No address found, please use a supported chain");
      return 0;
    }
    // read from the chain to see if we have approved enough token
    const response = await readContract(config, {
      abi: erc20Abi,
      address: tokenAddress as `0x${string}`,
      fuunctionName: "allowance",
      args: [account.address, tSenderAddress as `0x${string}`],
    });
    // allowance
    return response as number;
  }

  async function handleSubmit() {
    // b. If already approved move to step two IF NOT APPROVED, APPROVE FIRST THEN MOVE TO STEP TWO
    // 1. Approve our tsender contract to send the tokens
    // 2. Call the airdrop function on thetsender contract
    // 3. Wait for the transaction to be confirmed
    const tSenderAddress = chainsToTSender[chainId]["tsender"];
    const approvedAmount = await getApprovedAmount(tSenderAddress);
    console.log(approvedAmount);
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
        large={true}
        onChange={(e) => setTokenAddress(e.target.value)}
      />
      <InputField
        label="Amount"
        placeholder="100, 200, 300..."
        value={amount}
        large={true}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="mt-4 px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold tracking-wide shadow-lg transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:scale-95"
      >
        Send Tokens
      </button>
    </div>
  );
}
