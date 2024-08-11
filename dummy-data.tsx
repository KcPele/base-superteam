export interface DataProp {
    title: string;
    task: string;
    ends_in: number;
    reward: string;
    reward_image: string
}

const dummyData: DataProp[] = [
    {
        title: "SkyTrade",
        task: "Write a Twitter thread about your SkyTrade experience",
        ends_in: 8,
        reward: "2,567.5 USDT",
        reward_image: "/icons/tusdt.svg"
    },
    {
        title: "CloudTrade",
        task: "Write a Twitter thread about your SkyTrade experience",
        ends_in: 10,
        reward: "2,567.5 USDT",
        reward_image: "/icons/usdc.svg"
    },
    {
        title: "BaseTrade",
        task: "Write a Twitter thread about your SkyTrade experience",
        ends_in: 14,
        reward: "2,567.5 USDT",
        reward_image: "/icons/eth.svg"
    },
    {
        title: "SuperTrade",
        task: "Write a Twitter thread about your SkyTrade experience",
        ends_in: 2,
        reward: "2,567.5 USDT",
        reward_image: "/icons/tusdt.svg"
    },
]

export default dummyData;