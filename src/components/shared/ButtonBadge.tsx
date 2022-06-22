type Color = "meador" | "red" | "orange" | "blue" | "grey" | "yellow" | "white";

interface Props {
  color: Color;
  value: number | string;
  bg?: Color;
}

//const textColor = {
//  blue: "text-blue",
//  green: "text-meador",
//  orange: "text-orange",
//  yellow: "text-yellow",
//  red: "text-red",
//  white: "text-white",
//};
const Badge = (props: Props) => {
  const { color = "meador", value, bg = "meador" } = props;
  return (
    <>
      <div className="flex flex-row">
        <span
          className={`bg-${bg} bg-opacity-10 text-${color} text-xs font-semibold ml-2 mr-2 px-2 py-0.5 rounded-xl`}
        >
          {value}
        </span>
      </div>
    </>
  );
};

export default Badge;
