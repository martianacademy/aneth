import { Heading, VStack } from "@chakra-ui/react";
import { useEtherBalance, useEthers, useTokenBalance } from "@usedapp/core";
import { formatEther } from "ethers/lib/utils";
import React from "react";
import { BalancesCard, CardContainer } from "../../../../components/UI";
import { useSupportedNetworkInfo } from "../../../../constants";

export const UserBalances = ({
  account,
  chainId,
  currentNetwork,
}: {
  account: string;
  chainId: number;
  currentNetwork: typeof useSupportedNetworkInfo;
}) => {
  const userNativeValueInWei = useEtherBalance(account);
  const userTokenBalanceInWei = useTokenBalance(
    currentNetwork[chainId]?.Token?.ContractAddress,
    account
  );
  const userANUSDBalanceInWei = useTokenBalance(
    currentNetwork[chainId]?.ANUSD?.ContractAddress,
    account
  );
  return (
    <CardContainer>
      <Heading size="sm">Balances</Heading>
      <BalancesCard
        currencyName={`${currentNetwork[chainId]?.Native?.Symbol}`}
        currencyValue={Number(formatEther(userNativeValueInWei ?? 0)).toFixed(
          5
        )}
        logo={currentNetwork[chainId]?.Native?.Logo}
      ></BalancesCard>
      <BalancesCard
        currencyName={`${currentNetwork[chainId]?.ANUSD?.Symbol}`}
        currencyValue={Number(formatEther(userANUSDBalanceInWei ?? 0)).toFixed(
          5
        )}
        logo={currentNetwork[chainId]?.ANUSD?.Logo}
      ></BalancesCard>
      <BalancesCard
        currencyName={`${currentNetwork[chainId]?.Token?.Symbol}`}
        currencyValue={Number(formatEther(userTokenBalanceInWei ?? 0)).toFixed(
          5
        )}
        logo={currentNetwork[chainId]?.Token?.Logo}
      ></BalancesCard>
    </CardContainer>
  );
};
