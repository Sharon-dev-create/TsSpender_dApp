"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {type ReactNode } from "react"
import config from "@/rainbowKitConfig"
import { WagmiProvider } from "wagmi"
import { RainbowKitProvider, ConnectButton } from "@rainbow-me/rainbowkit"
import { useState } from "react"
import "@rainbow-me/rainbowkit/styles.css"

export function Providers(prop: {children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <WagmiProvider config={config}> 
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
                <ConnectButton/>
            {prop.children}
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider >

    )
}

