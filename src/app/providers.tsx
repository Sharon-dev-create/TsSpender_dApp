"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {type ReactNode } from "react"
import config from "@/rainbowKitConfig"
import { WagmiProvider } from "wagmi"
import { RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { useState } from "react"

export function Providers(prop: {children: ReactNode }) {
    const [queryClient] = useState(() => new QeryClient())

    return (
        <WagmiProvider config={config}> 
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
            {props.children}
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider >

    )
}

