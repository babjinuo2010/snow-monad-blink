// src/provider.tsx

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider } from "connectkit";
import { type PropsWithChildren } from "react";
import { WagmiProvider } from "wagmi";
import { config } from "@/config";

const queryClient = new QueryClient();

//创建一个钱包的上下文提供者 context providers

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};