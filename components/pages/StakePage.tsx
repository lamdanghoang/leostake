"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

export const StakePage = () => {
    const [selectedPlan, setSelectedPlan] = useState(0);
    const [depositAmount, setDepositAmount] = useState([12.03]);
    const [depositInput, setDepositInput] = useState("12.03");
    const [investmentDays, setInvestmentDays] = useState([230]);

    const plans = [
        { name: "Basic", apy: 0.03 },
        { name: "Standard", apy: 0.05 },
        { name: "Premium", apy: 0.07 },
    ];

    const calculateRewards = (amount: number, days: number, apy: number) => {
        const daily = (amount * apy) / 365;
        return {
            day1: (daily * 1).toFixed(8),
            week1: (daily * 7).toFixed(6),
            month1: (daily * 30).toFixed(2),
            custom: (daily * days).toFixed(6),
        };
    };

    const rewards = calculateRewards(
        depositAmount[0],
        investmentDays[0],
        plans[selectedPlan].apy
    );

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
                                <input
                                    type="number"
                                    min={0}
                                    max={50}
                                    step={0.001}
                                    value={depositInput}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setDepositInput(val);
                                        const num = parseFloat(val);
                                        if (
                                            val === "" ||
                                            val === "0" ||
                                            (!isNaN(num) &&
                                                num >= 0 &&
                                                num <= 50)
                                        ) {
                                            setDepositAmount([
                                                isNaN(num) ? 0 : num,
                                            ]);
                                        }
                                    }}
                                    className="w-24 text-2xl font-bold bg-transparent border-none outline-none text-white text-right"
                                />
                                <span className="text-2xl font-bold">BTC</span>
                            </div>
                            <Slider
                                value={depositAmount}
                                onValueChange={(val) => {
                                    setDepositAmount(val);
                                    setDepositInput(val[0].toString());
                                }}
                                max={50}
                                min={0}
                                step={0.001}
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

                    {/* Platform */}
                    <div className="p-1.5 w-fit flex items-center gap-1 border rounded-sm bg-gray-800">
                        <div className="flex justify-end">
                            <img
                                src="/bits.svg"
                                alt="Bits Platform Logo"
                                className="h-6 w-auto"
                            />
                        </div>
                        <div className="font-semibold text-sm">BITS</div>
                    </div>

                    {/* Plan Selection */}
                    <div className="mt-4 lg:mt-0 space-y-4 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {plans.map((plan, idx) => (
                                <Button
                                    key={plan.name}
                                    variant="outline"
                                    className={`flex justify-between h-auto px-4 py-3 hover:bg-gray-900 ${
                                        selectedPlan === idx
                                            ? "bg-gray-800"
                                            : ""
                                    }`}
                                    onClick={() => setSelectedPlan(idx)}
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
                                        {(plan.apy * 100).toFixed(0)}%
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
                                <p className="value">+ {rewards.day1} BTC</p>
                            </div>
                            <hr />
                            <div>
                                <p>You'll have it in 1 week:</p>
                                <p className="value">+ {rewards.week1} BTC</p>
                            </div>
                            <hr />
                            <div>
                                <p>You'll get in 1 month:</p>
                                <p className="value">+ {rewards.month1} BTC</p>
                            </div>
                            <hr />
                            <div>
                                <p>You'll get in {investmentDays[0]} days:</p>
                                <p className="value">+ {rewards.custom} BTC</p>
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
