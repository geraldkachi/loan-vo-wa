import { AIarrowdown1Outlin, AIarrowup2Outlin } from "arvara-icons";
import { useRef, useState } from "react";

interface Props {
  title: JSX.Element | string;
  content: JSX.Element[] | string[];
}
const Accodion = (props: Props) => {
  const { title, content } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contentElement = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={" p-4 flex justify-between text-black"}
        onClick={handleClick}
      >
        <h4 className="font-semibold">{title}</h4>
        {isOpen ? <AIarrowup2Outlin /> : <AIarrowdown1Outlin />}
      </div>
      {isOpen && (
        <div className="overflow-hidden transition-all duration-200">
          {content.map((item, index) => (
            <div key={index} className="p-4 ml-10">
              {setIsOpen ? item : null}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Accodion;
