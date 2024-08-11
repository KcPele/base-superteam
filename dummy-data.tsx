export interface DataProp {
    id: number;
    title: string;
    task: string;
    ends_in: number;
    reward: string;
    reward_image: string
}

const dummyData: DataProp[] = [
    {
        id: 1,
        title: "SkyTrade",
        task: "Write a Twitter thread about your SkyTrade experience",
        ends_in: 8,
        reward: "2,567.5 USDT",
        reward_image: "/icons/tusdt.svg"
    },
    {
        id: 2,
        title: "OnchainSummer",
        task: "Write a Twitter thread about your OnchainSummer experience",
        ends_in: 10,
        reward: "2,567.5 USDT",
        reward_image: "/icons/usdc.svg"
    },
    {
        id: 3,
        title: "SuperHack",
        task: "Write a Twitter thread about your EthGlobal experience",
        ends_in: 14,
        reward: "2,567.5 USDT",
        reward_image: "/icons/eth.svg"
    },
    {
        id: 4,
        title: "Basecamp",
        task: "Write a Twitter thread about your BaseCamp experience",
        ends_in: 2,
        reward: "2,567.5 USDT",
        reward_image: "/icons/tusdt.svg"
    },
]

export default dummyData;