interface IconContainerProps {
  color: string;
  children?: React.ReactNode;
}

export default function IconContainer({ color, children }: IconContainerProps) {
  return <div className={`p-2 bg-[${color}] rounded-lg`}>{children}</div>;
}
