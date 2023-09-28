import { Button as UIButton } from "@nextui-org/react";

interface ButtonProps {
  filled?: boolean;
  isIconOnly?: boolean;
  children?: React.ReactNode;
}

export default function Button({
  filled = true,
  isIconOnly = false,
  children,
}: ButtonProps) {
  return (
    <UIButton
      className="rounded-md"
      color="primary"
      variant={filled ? "shadow" : "bordered"}
      isIconOnly={isIconOnly}
    >
      {children}
    </UIButton>
  );
}
