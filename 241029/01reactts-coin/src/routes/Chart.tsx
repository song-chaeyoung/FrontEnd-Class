import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";
import styled from "styled-components";

const Loading = styled.div``;

const Container = styled.div``;

interface CoinHistory {
  // time_open: number;
  // time_close: number;
  // open: string;
  // high: string;
  // low: string;
  // close: string;
  // volume: string;
  // market_cap: number;
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const Chart = () => {
  const { coinId } = useParams();

  const { isLoading, data } = useQuery<CoinHistory[]>({
    queryKey: ["coinHistory", coinId],
    queryFn: () => fetchCoinHistory(coinId),
    // refetchInterval: 5000,
  });

  return (
    <Container>
      {isLoading ? (
        <Loading>Loading Chart...</Loading>
      ) : (
        <ApexCharts
          width={450}
          type="line"
          series={[
            {
              name: "priceChart",
              data: data?.map((it) => Number(it.close)) || [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            stroke: {
              width: 4,
              curve: "smooth",
            },
            chart: {
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: {
              show: false,
            },
            xaxis: {
              labels: {
                show: true,
              },
            },
            yaxis: {
              labels: {
                show: true,
              },
            },
            colors: ["red"],
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["blue"],
                stops: [0, 100],
              },
            },
            tooltip: {
              y: {
                formatter: (value) => `${value.toFixed(0)}`,
              },
            },
          }}
        />
      )}
    </Container>
  );
};

export default Chart;
