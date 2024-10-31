import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

const Loading = styled.div``;

const Container = styled.div``;

interface CoinHistory {
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
  const isDark = useRecoilValue(isDarkAtom);
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<CoinHistory[]>({
    queryKey: ["coinHistory", coinId],
    queryFn: () => fetchCoinHistory(coinId),
    refetchInterval: 5000,
  });

  const chartData = Array.isArray(data) && data.length > 0 ? data : [];

  return (
    <Container>
      {isLoading ? (
        <Loading>Loading Chart...</Loading>
      ) : chartData.length > 0 ? (
        <ApexCharts
          width={450}
          type="line"
          series={[
            {
              name: "priceChart",
              data: chartData?.map((it) => Number(it.close)) || [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            stroke: {
              width: 4,
              curve: "smooth",
            },
            chart: {
              toolbar: {
                show: false,
              },
              background: "rgba(255,255,255,0.1)",
            },
            grid: {
              show: true,
            },
            xaxis: {
              labels: {
                show: true,
                style: {
                  fontSize: "10px",
                  colors: "grey",
                },
              },
              categories: chartData.map((price) =>
                new Date(price.time_close * 1000).toLocaleDateString()
              ),
            },
            yaxis: {
              labels: {
                show: true,
                style: {
                  fontSize: "12px",
                  colors: "grey",
                },
                formatter: (value) => `${value.toFixed(0)}`,
              },
            },
            colors: ["#ff0844"],
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["#005bea"],
                stops: [0, 100],
              },
            },
            tooltip: {
              y: {},
            },
          }}
        />
      ) : (
        "No Data available to display chart..."
      )}
    </Container>
  );
};

export default Chart;
