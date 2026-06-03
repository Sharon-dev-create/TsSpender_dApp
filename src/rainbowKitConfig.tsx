"use client"

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { anvil, zksync } from "wagmi/chains";

export const chains = [anvil, zksync] as const;

const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;
if (!walletConnectProjectId) {
  throw new Error("Missing NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID in environment");
}

export const config = getDefaultConfig({
  appName: "Tsender",
  projectId: walletConnectProjectId,
  chains,
  ssr: false,
});

export default config;