"use client";

import { AppRouter } from "@/trpc/routers/_app";
import { inferRouterOutputs } from "@trpc/server";
import { createContext, useContext } from "react";


type TTSVoiceItem = inferRouterOutputs<AppRouter>["voices"]["getAll"]["custom"][number];

interface TTSVoicesContextValue {
    customVoices: TTSVoiceItem[];
    systemVoices: TTSVoiceItem[];
    allVoices: TTSVoiceItem[];
}

const TTSVoicesContext = createContext<TTSVoicesContextValue | null>(null);

export const TTSVoicesProvider = ({ children, value }: { children: React.ReactNode, value: TTSVoicesContextValue }) => {
    return (
        <TTSVoicesContext.Provider value={value}>
            {children}
        </TTSVoicesContext.Provider>
    )
}

export const useTTSVoices = () => {
    const context = useContext(TTSVoicesContext);

    if (!context) {
        throw new Error("useTTSVoices must be used within a valid TTSVoicesProvider.")
    }

    return context;
}