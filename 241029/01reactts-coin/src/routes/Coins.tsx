import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

const Header = styled.header``;

const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
  text-transform: uppercase;
  margin-bottom: 20px;
  font-size: 40px;
`;

const CoinList = styled.ul`
  width: 100%;
  padding: 0 20px;
`;

const Coin = styled.li`
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.bgColor};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    color: inherit;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    gap: 20px;
    &:hover {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
`;

const Loader = styled.div`
  color: ${({ theme }) => theme.accentColor};
  font-size: 30px;
  margin-top: 30px;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

// const coins: CoinInterface[] = [
//   {
//     id: "btc-bitcoin",
//     name: "Bitcoin",
//     symbol: "BTC",
//     rank: 1,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "eth-ethereum",
//     name: "Ethereum",
//     symbol: "ETH",
//     rank: 2,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "hex-hex",
//     name: "HEX",
//     symbol: "HEX",
//     rank: 3,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
// ];

const Coins = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState<CoinInterface[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/Divjason/coindata/refs/heads/main/coins.json"
      );
      const json = await response.json();
      // console.log(json.slice(0, 101));
      setCoins(json.slice(0, 100));
      setIsLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Coin List</Title>
      </Header>
      {isLoading ? (
        <Loader>"Loading..."</Loader>
      ) : (
        <CoinList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                💿 Now Rank : {coin.rank} :
                <Img
                  src={`https://cryptoicon-api.pages.dev/icons/128/color/${coin.symbol.toLowerCase()}.png`}
                />
                {coin.name} ({coin.symbol}) &rarr; {coin.name} Information
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
