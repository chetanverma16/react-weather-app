import React, { useRef, useState, useEffect } from "react";

import { useContainerDimensions } from "../utils/useContainerDimenstions";

import { IoIosSunny } from "react-icons/io";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

const dummyData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const TemeperatureCard = ({ data }) => {
  let componentRef = useRef();
  const { width, height } = useContainerDimensions(componentRef);

  return (
    <div className="temperature_card_wrapper">
      <div className="temperature_card" ref={componentRef}>
        <div className="temperature">
          <h1>{`${data ? data.current.temp : " fetching.."} F`}</h1>
        </div>
        <div className="graph_wrapper">
          <AreaChart
            width={width - 20}
            height={height - 100}
            data={data ? data.hourly : dummyData}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2196f3" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2196f3" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="dt" />
            <YAxis dataKey="temp" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="temp"
              stroke="#2196f3"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default TemeperatureCard;
