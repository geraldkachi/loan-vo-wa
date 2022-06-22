import React from "react";
import { DualAxes, Pie } from "@ant-design/plots";
import { data } from "../../server/data";

interface Props {
  geometry: any;
}
export const LineChart = (props: Props) => {
  const { geometry } = props;
  const config = {
    data: [data, data],
    height: 400,
    xField: "month",
    yField: ["value", "count"],
    geometry,
    point: {
      size: 1,
    },
  };
  return <DualAxes {...config} />;
};
