import { BsArrowUp, BsArrowDown} from "react-icons/bs";


interface StatusIndicatorProps {
  symbol: "positive" | "negative";
}

export default function StatusIndicator({ symbol: valueSymbol }: StatusIndicatorProps) {
  if (valueSymbol === "negative") {
    return (
      <div className="w-5 h-5 bg-[#FF6471]/25 rounded-full grid place-content-center">
        <BsArrowDown size={10.5} />
      </div>
    );
  }

  return (
    <div className="w-5 h-5 bg-[#88E091]/25 rounded-full grid place-content-center">
      <BsArrowUp size={10.5} />
    </div>
  );
}
