import { Address } from "viem";

// Type definitions for the learning contract
export interface CoreBankContractConfig {
    address: Address;
    abi: readonly any[];
}

export const corebank_contract: CoreBankContractConfig = {
    address: "0x01368f47E2DA0F8259E6d9D23dA18e3CCec02a39",
    abi: [
        {
            inputs: [
                {
                    internalType: "address payable",
                    name: "_feeRecipient",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_performanceFee",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_depositFee",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_withdrawalFee",
                    type: "uint256",
                },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address",
                },
            ],
            name: "OwnableInvalidOwner",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "user",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "sharesMinted",
                    type: "uint256",
                },
            ],
            name: "Deposit",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "recipient",
                    type: "address",
                },
            ],
            name: "FeeRecipientUpdated",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "perf",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "dep",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "wit",
                    type: "uint256",
                },
            ],
            name: "FeesUpdated",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "profit",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "loss",
                    type: "uint256",
                },
            ],
            name: "Harvested",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "OwnershipTransferred",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
            ],
            name: "Paused",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "strat",
                    type: "address",
                },
            ],
            name: "StrategyAdded",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "strat",
                    type: "address",
                },
            ],
            name: "StrategyRemoved",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "idx",
                    type: "uint256",
                },
            ],
            name: "StrategySwitched",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
            ],
            name: "Unpaused",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "user",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "sharesBurned",
                    type: "uint256",
                },
            ],
            name: "Withdraw",
            type: "event",
        },
        {
            stateMutability: "payable",
            type: "fallback",
        },
        {
            inputs: [],
            name: "MAX_FEE",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "contract IStrategy",
                    name: "strat",
                    type: "address",
                },
            ],
            name: "addStrategy",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            name: "balanceOf",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "currentStrategy",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "deposit",
            outputs: [
                {
                    internalType: "uint256",
                    name: "shares",
                    type: "uint256",
                },
            ],
            stateMutability: "payable",
            type: "function",
        },
        {
            inputs: [],
            name: "depositFee",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "feeRecipient",
            outputs: [
                {
                    internalType: "address payable",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "harvest",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            name: "isStrategy",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "owner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "pause",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "paused",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "performanceFee",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "idx",
                    type: "uint256",
                },
            ],
            name: "removeStrategy",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "rescueETH",
            outputs: [],
            stateMutability: "nonpayable",

            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address payable",
                    name: "recipient",
                    type: "address",
                },
            ],
            name: "setFeeRecipient",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "_performanceFee",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_depositFee",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_withdrawalFee",
                    type: "uint256",
                },
            ],
            name: "setFees",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "strategies",
            outputs: [
                {
                    internalType: "contract IStrategy",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "idx",
                    type: "uint256",
                },
            ],
            name: "switchStrategy",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "totalShares",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "unpause",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "shares",
                    type: "uint256",
                },
            ],
            name: "withdraw",
            outputs: [
                {
                    internalType: "uint256",
                    name: "withdrawn",
                    type: "uint256",
                },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "withdrawalFee",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            stateMutability: "payable",
            type: "receive",
        },
    ],
};
