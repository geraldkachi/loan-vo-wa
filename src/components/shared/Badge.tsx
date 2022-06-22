interface Props {
  color: string;
  value?: string;
}
const Badge = (props: Props) => {
  const { color, value } = props;
  return (
    <>
      {color === "green" && (
        <div className="flex flex-row">
          <span
            className="
            bg-meador bg-opacity-10 text-meador text-xs font-semibold ml-2 mr-2 px-2 py-0.5 rounded-xl"
          >
            {value}
          </span>
        </div>
      )}
      {color === "meador" && (
        <div className="flex flex-row">
          <span
            className="
            bg-meador bg-opacity-10 text-white text-xs font-semibold ml-2 mr-2 px-2 py-0.5 rounded-xl"
          >
            {value}
          </span>
        </div>
      )}
      {color === "red" && (
        <div className="flex flex-row">
          <span className="bg-red bg-opacity-10 text-red text-xs ml-2 mr-2 px-2.5 py-0.5 rounded-xl">
            {value}
          </span>
        </div>
      )}
      {color === "orange" && (
        <div className="flex flex-row">
          <span className="bg-orange bg-opacity-20 text-orange text-xs ml-2 mr-2 px-2.5 py-0.5 rounded-xl">
            {value}
          </span>
        </div>
      )}

      {color === "yellow" && (
        <div className="flex flex-row">
          <span className="bg-yellow bg-opacity-20 text-yellow text-xs font-semibold ml-2 mr-2 px-2 py-0.5 rounded-xl">
            {value}
          </span>
        </div>
      )}
      {color === "blue" && (
        <div className="flex flex-row">
          <span className="bg-blue-4 bg-opacity-40 text-blue text-xs mr-2 px-2 py-0.5 rounded-xl ml-2">
            {value}
          </span>
        </div>
      )}
      {color === "grey" && (
        <div className="flex flex-row">
          <span className="bg-grey-slate bg-opacity-20 text-blue text-xs mr-2 px-2 py-0.5 rounded-xl ml-2">
            {value}
          </span>
        </div>
      )}
    </>
  );
};

export default Badge;
//type TextColor = "blue" | "green" | "orange" | "yellow" | "red" | "white";

//interface Props {
//  color: string;
//  value?: number | string | number[];
//  text?: TextColor;
//}

//const textColor = {
//  blue: "text-blue",
//  green: "text-meador",
//  orange: "text-orange",
//  yellow: "text-yellow",
//  red: "text-red",
//  white: "text-white",
//};
//const Badge = (props: Props) => {
//  const { color, value, text } = props;
//  return (
//    <>
//      {color === "green" && (
//        <div className="flex flex-row">
//          <span
//            className={`${textColor[text]}
//            bg-meador bg-opacity-10 text-meador text-xs font-semibold ml-2 mr-2 px-2 py-0.5 rounded-xl`}
//          >
//            {value}
//          </span>
//        </div>
//      )}
//      {color === "meador" && (
//        <div className="flex flex-row">
//          <span
//            className={`${textColor[text]}
//            bg-meador bg-opacity-10 text-white text-xs font-semibold ml-2 mr-2 px-2 py-0.5 rounded-xl`}
//          >
//            {value}
//          </span>
//        </div>
//      )}
//      {color === "red" && (
//        <div className="flex flex-row">
//          <span
//            className={`${textColor[text]} bg-red bg-opacity-10 text-red text-xs ml-2 mr-2 px-2.5 py-0.5 rounded-xl`}
//          >
//            {value}
//          </span>
//        </div>
//      )}
//      {color === "orange" && (
//        <div className="flex flex-row">
//          <span
//            className={`${textColor[text]} bg-orange bg-opacity-20 text-orange text-xs ml-2 mr-2 px-2.5 py-0.5 rounded-xl`}
//          >
//            {value}
//          </span>
//        </div>
//      )}

//      {color === "yellow" && (
//        <div className="flex flex-row">
//          <span
//            className={`${textColor[text]} bg-yellow bg-opacity-20 text-yellow text-xs font-semibold ml-2 mr-2 px-2 py-0.5 rounded-xl`}
//          >
//            {value}
//          </span>
//        </div>
//      )}
//      {color === "blue" && (
//        <div className="flex flex-row">
//          <span
//            className={`${textColor[text]}bg-blue-4 bg-opacity-40 text-blue text-xs mr-2 px-2 py-0.5 rounded-xl ml-2`}
//          >
//            {value}
//          </span>
//        </div>
//      )}
//      {color === "blueButton" && (
//        <div className="flex flex-row">
//          <span
//            className={`${textColor[text]}bg-blue text-blue text-xs mr-2 px-2 py-0.5 rounded-xl ml-2`}
//          >
//            {value}
//          </span>
//        </div>
//      )}
//      {color === "grey" && (
//        <div className="flex flex-row">
//          <span
//            className={`${textColor[text]}bg-grey-slate bg-opacity-20 text-blue text-xs mr-2 px-2 py-0.5 rounded-xl ml-2`}
//          >
//            {value}
//          </span>
//        </div>
//      )}
//    </>
//  );
//};

//export default Badge;
