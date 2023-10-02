import StatusIndicator from "../StatusIndicator/StatusIndicator";

interface StatusProsp {
  value: number;
  valueSymbol: "positive" | "negative";
}

export default function Status({ value, valueSymbol }: StatusProsp) {
  return (
    <div
      className={`flex gap-[6px] items-center ${
        valueSymbol === "negative" ? "text-[#FF7CA3]" : "text-[#50D1AA]"
      }`}
    >
      {/* Status value */}
      <p>
        {valueSymbol === "negative" ? "-" : "+"}
        {value}%
      </p>
      {/* Status indicator */}
      <StatusIndicator symbol={valueSymbol} />
    </div>
  );
}
