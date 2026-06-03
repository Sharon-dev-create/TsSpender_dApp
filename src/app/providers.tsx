"use client"
 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { type ReactNode } from "react"
import { config, chains } from "@/src/rainbowKitConfig"
import { WagmiConfig } from "wagmi"
import { RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { useState } from "react"
import "@rainbow-me/rainbowkit/styles.css"

export function Providers(props: {children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <WagmiConfig config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider chains={chains}>
              {props.children}
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiConfig>
    )
}

