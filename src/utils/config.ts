import { http, createConfig } from "wagmi";
import { base, baseSepolia, mainnet } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";

export const config = createConfig({
  chains: [base, baseSepolia, mainnet],
  multiInjectedProviderDiscovery: false,
  connectors: [
    coinbaseWallet({
      appName: "Super Team",
      preference: "all", // set this to `all` to use EOAs as well
      version: "4",
    }),
  ],
  ssr: true,
  transports: {
    [base.id]: http(),
    [baseSepolia.id]: http(),
    [mainnet.id]: http(),
  },
});
