interface GridContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function GridContainer({ children, className }: GridContainerProps) {
  return <div className={`grid gap-6 ${className}`}>{children}</div>;
}
