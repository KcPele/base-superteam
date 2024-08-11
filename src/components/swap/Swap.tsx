"use client";
import {
  Swap,
  SwapAmountInput,
  SwapToggleButton,
  SwapButton,
  SwapMessage,
} from "@coinbase/onchainkit/swap";
import { useCallback, useState } from "react";
import { TokenSearch, getTokens } from "@coinbase/onchainkit/token";
import { useAccount, useSendTransaction } from "wagmi";
import type { Token } from "@coinbase/onchainkit/token";
import { ConnectButton } from "../connect-button/ConnectButton";
import type {
  BuildSwapTransaction,
  SwapError,
} from "@coinbase/onchainkit/swap";

export default function SwapComponents() {
  const { address } = useAccount();
  const [tokenFrom, setTokenFrom] = useState<Token>();
  const [tokenTo, setTokenTo] = useState<Token>();
  const { sendTransaction } = useSendTransaction();
  const ETHToken: Token = {
    address: "",
    chainId: 8453,
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
    image:
      "https://wallet-api-production.s3.amazonaws.com/uploads/tokens/eth_288.png",
  };

  const USDCToken: Token = {
    address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    chainId: 8453,
    decimals: 6,
    name: "USDC",
    symbol: "USDC",
    image:
      "https://d3r81g40ycuhqg.cloudfront.net/wallet/wais/44/2b/442b80bd16af0c0d9b22e03a16753823fe826e5bfd457292b55fa0ba8c1ba213-ZWUzYjJmZGUtMDYxNy00NDcyLTg0NjQtMWI4OGEwYjBiODE2",
  };

  const swappableTokens: Token[] = [ETHToken, USDCToken];
  const handleChange = useCallback((value: string) => {
    console.log(value);
    async function getData(value: string) {
      const res = await getTokens({ search: value });

      console.log(res);
      // Do something with tokens here
    }
    getData(value);
  }, []);

  return (
    <div
      className="bg-[url('/images/hero-image.png')] bg-cover text-center py-[150px]
    flex justify-center items-center flex-col gap-2"
    >
      {address ? (
        <>
          {/* <TokenSearch onChange={handleChange} delayMs={200} /> */}

          <Swap address={address}>
            <SwapAmountInput
              label="Sell"
              swappableTokens={swappableTokens}
              token={tokenFrom}
              type="from"
            />
            <SwapToggleButton />
            <SwapAmountInput
              label="Buy"
              swappableTokens={swappableTokens}
              token={tokenTo}
              type="to"
            />
            <SwapButton
              onStart={() => {
                console.log("Swap started");
              }}
            />
            <SwapMessage />
          </Swap>
        </>
      ) : (
        <ConnectButton />
      )}
    </div>
  );
}
