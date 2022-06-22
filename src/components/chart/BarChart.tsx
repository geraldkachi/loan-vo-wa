import { useState, useEffect } from "react";
import { Pie } from "@ant-design/plots";

interface Props {
  color?: any;
  data: any | string | [];
}

export const BarChart = (props: Props) => {
  const { color, data } = props;
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    const items = data.forEach((item) => {
      setAllItems((prev) => {
        return [...prev, { name: `${item.type}  ${item.value}` }];
      });
    });
  }, []);

  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "",
      autoHide: true,
    },
    interactions: [
      {
        type: "element-selected",
      },
    ],
    //statistic: {
    //  title: false,
    //  content: {
    //    style: {
    //      whiteSpace: "pre-wrap",
    //      overflow: "hidden",
    //      textOverflow: "ellipsis",
    //    },

    //  },
    //},
    legend: {
      layout: "horizontal",
      position: "bottom",
      items: allItems,
    },
    items: [{}],
    color,
  };
  return <Pie {...config} />;
};
