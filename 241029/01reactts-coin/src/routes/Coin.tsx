import React, { useEffect, useState } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import styled from "styled-components";
import Chart from "./Chart";
import Price from "./Price";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

const Header = styled.header`
  font-size: 32px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
  text-transform: uppercase;
  margin-bottom: 20px;
  font-size: 40px;
`;

const Loader = styled.span`
  color: ${({ theme }) => theme.accentColor};
  font-size: 38px;
  margin-top: 30px;
`;

const Overview = styled.div`
  width: 90%;
  color: ${({ theme }) => theme.bgColor};
`;

const OverviewItem = styled.div`
  background: ${({ theme }) => theme.textColor};
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  span:nth-child(1) {
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.accentColor};
  }
  span:nth-child(2) {
    font-size: 20px;
  }
`;

const Description = styled.div`
  width: 90%;
  border-radius: 10px;
  background: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.textColor};
  padding: 10px 20px;
  margin-bottom: 20px;
  b {
    font-size: 20px;
    text-transform: uppercase;
  }
`;

interface RouterParams {
  coinId: string;
}

interface LocationState {
  state: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Coin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState<InfoData>();
  const [price, setPrice] = useState<PriceData>();
  const { coinId } = useParams<RouterParams | any>();
  const { state } = useLocation() as LocationState;

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
        )
      ).json();
      const priceData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
        )
      ).json();

      setInfo(infoData);
      setPrice(priceData);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <Container>
        <Header>
          <Title>
            {" "}
            {state ? state : isLoading ? "Loading..." : info?.name}
          </Title>
        </Header>
        {isLoading ? (
          <Loader>Lading...</Loader>
        ) : (
          <>
            <Overview>
              <OverviewItem>
                <span>Rank : </span>
                <span>{info?.rank}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Symbol : </span>
                <span>{info?.symbol}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Open Source : </span>
                <span>{info?.is_active ? "Yes" : "No"}</span>
              </OverviewItem>
            </Overview>
            <Description>
              <b>💡Infomation of {info?.type}</b> : Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Obcaecati impedit laboriosam nam
              repudiandae aliquam, unde reprehenderit, provident nulla, dolor
              excepturi omnis iure doloribus architecto? Temporibus vero minima
              quaerat deleniti praesentium?
            </Description>
            <Overview>
              <OverviewItem>
                <span>Total Supply : </span>
                <span>{price?.total_supply}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Max Supply : </span>
                <span>{price?.max_supply}</span>
              </OverviewItem>
            </Overview>
            <Outlet />
          </>
        )}
      </Container>
    </>
  );
};

export default Coin;
