import { Heading } from "@chakra-ui/react";
import React from "react";
import { FaPiggyBank } from "react-icons/fa";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { BalancesCard, CardContainer } from "../../../../components/UI";
import { useSupportedNetworkInfo } from "../../../../constants";
import {
  useGetAllStakingRewards,
  useGetUserTotalRewardClaimedANUSD,
  useGetUserTotalStakedValue,
} from "../../../../hooks/StakingHooks";

export const UserStaking = ({
  account,
  chainId,
  currentNetwork,
}: {
  account: string;
  chainId: number;
  currentNetwork: typeof useSupportedNetworkInfo;
}) => {
  const userAllStakingRewards = useGetAllStakingRewards(account);
  const userTotalStakedValue = useGetUserTotalStakedValue(account);
  const userTotalRewardClaimed = useGetUserTotalRewardClaimedANUSD(account);
  return (
    <CardContainer>
      <Heading size="sm">Your Mining</Heading>
      <BalancesCard
        currencyName={"Value Locked"}
        currencyValue={`${userTotalStakedValue.token.toFixed(3)} ${
          currentNetwork[chainId]?.Token?.Symbol
        }`}
        icon={FaPiggyBank}
      ></BalancesCard>
      <BalancesCard
        currencyName={"Pending Mining Rewards"}
        currencyValue={`${userAllStakingRewards.toFixed(3)} ${
          currentNetwork[chainId]?.ANUSD?.Symbol
        }`}
        icon={GiPayMoney}
      ></BalancesCard>
      <BalancesCard
        currencyName={"Claimed Mining Rewards"}
        currencyValue={`${
          userTotalRewardClaimed > 0 ? userTotalRewardClaimed.toFixed(5) : "0"
        } ${currentNetwork[chainId]?.ANUSD?.Symbol}`}
        icon={GiReceiveMoney}
      ></BalancesCard>
    </CardContainer>
  );
};
