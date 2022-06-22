import { RadialBar } from "@ant-design/plots";
interface Props {
  color?: any;
  data: any;
}

export const RadialBarChart = (props: Props) => {
  const { color, data } = props;
  const config = {
    data,
    xField: "name",
    yField: "type",
    maxAngle: 320,
    radius: 1,
    innerRadius: 0.7,
    colorField: "type",
    color,
    barStyle: {
      lineCap: "round",
    },
    //theme: "dark",
    //barBackground: {
    //  style: {
    //    fill: "rgba(255,255,255,0.45)",
    //  },
    //},
  };
  return <RadialBar {...config} />;
};
