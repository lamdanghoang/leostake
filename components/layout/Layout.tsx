"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { Navigation } from "./Navigation";
import { http, WagmiProvider } from "wagmi";
import { coreTestnet2 } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    getDefaultConfig,
    lightTheme,
    RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { Toaster } from "@/components/ui/sonner";

const config = getDefaultConfig({
    appName: "CoreBank",
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
    chains: [coreTestnet2],
    transports: {
        [coreTestnet2.id]: http(),
    },
    ssr: true, // If your dApp uses server side rendering (SSR)
});

const client = new QueryClient();

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={client}>
                <RainbowKitProvider
                    modalSize="compact"
                    locale="en"
                    theme={lightTheme({
                        accentColor: "#3498db",
                        accentColorForeground: "white",
                        borderRadius: "large",
                        fontStack: "system",
                        overlayBlur: "small",
                    })}
                >
                    <div className="min-h-screen bg-background">
                        <Navigation />
                        <main className="container mx-auto px-4 py-8">
                            {children}
                        </main>
                    </div>
                    <Toaster />
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
};
