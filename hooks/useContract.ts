import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { parseEther } from "viem";
import { corebank_contract } from "@/constants/contract";

export const useDeposit = () => {
    const { data: hash, error, isPending, writeContract } = useWriteContract();

    const depositFund = async (amount: string) => {
        if (!amount) throw new Error("Amount is required");

        const formattedAmount = parseEther(`${amount}`);

        writeContract({
            ...corebank_contract,
            functionName: "deposit",
            args: [],
            value: formattedAmount,
        });
    };

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        });

    return {
        hash,
        error,
        isPending,
        isConfirming,
        isConfirmed,
        depositFund,
    };
};
