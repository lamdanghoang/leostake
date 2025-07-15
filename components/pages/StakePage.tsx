"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

export const StakePage = () => {
    const [depositAmount, setDepositAmount] = useState([12.03]);
    const [investmentDays, setInvestmentDays] = useState([230]);

    const plans = [
        { name: "Basic", apy: "3%", selected: true },
        { name: "Standard", apy: "5%", selected: false },
        { name: "Premium", apy: "7%", selected: false },
    ];

    const calculateRewards = (amount: number, days: number, apy: number) => {
        const daily = (amount * apy) / 365;
        return {
            day1: (daily * 1).toFixed(2),
            week1: (daily * 7).toFixed(0),
            month1: (daily * 30).toFixed(2),
        };
    };

    const rewards = calculateRewards(depositAmount[0], investmentDays[0], 0.03);

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-6xl font-bold gradient-primary bg-clip-text text-transparent">
                    STAKING
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gradient-card rounded-lg px-8 pb-8">
                {/* Investment Planning */}
                <Card className="col-span-2 p-0 pt-8 bg-transparent border-transparent">
                    {/* Deposit Amount */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            Deposit amount:
                        </div>

                        <div className="bg-background rounded-lg p-4 pb-0 relative">
                            <div className="text-2xl font-bold text-left mb-4">
                                {depositAmount[0].toFixed(2)} BTC
                            </div>
                            <Slider
                                value={depositAmount}
                                onValueChange={setDepositAmount}
                                max={50}
                                min={1}
                                step={0.01}
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Investment Days */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            How many days do you want to invest for?
                        </div>
                        <div className="bg-background rounded-lg p-4 pb-0 relative">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-2xl font-bold">
                                    {investmentDays[0]}
                                </span>
                                <Badge variant="outline">Days</Badge>
                            </div>
                            <Slider
                                value={investmentDays}
                                onValueChange={setInvestmentDays}
                                max={365}
                                min={1}
                                step={1}
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Plan Selection */}
                    <div className="mt-4 lg:mt-0 space-y-4 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {plans.map((plan) => (
                                <Button
                                    key={plan.name}
                                    variant="outline"
                                    className="flex justify-between h-auto px-4 py-3 hover:bg-gray-900"
                                >
                                    <div className="flex flex-col items-start text-sm font-medium justify-between">
                                        <span className="text-md text-white">
                                            Plan:
                                        </span>
                                        <div className="text-xl font-semibold text-white">
                                            {plan.name}
                                        </div>
                                    </div>
                                    <div className="text-3xl lg:text-5xl font-bold text-sky-400">
                                        {plan.apy}
                                    </div>
                                </Button>
                            ))}
                        </div>
                    </div>
                </Card>

                {/* Rewards Projection */}
                <div className="mt-8 lg:mt-0 flex justify-center items-start">
                    <div className="note-paper gradient-accent">
                        <div className="holes">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>

                        <div className="content my-10 text-left">
                            <div>
                                <p>You'll have it in 24 hours:</p>
                                <p className="value">+ 1.12 BTC</p>
                            </div>
                            <hr />
                            <div>
                                <p>You'll have it in 1 week:</p>
                                <p className="value">+ 7.94 BTC</p>
                            </div>
                            <hr />
                            <div>
                                <p>You'll get in 1 month:</p>
                                <p className="value">+ 19.32 BTC</p>
                            </div>
                        </div>

                        <div className="holes-after">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
