import { Input as UIInput, extendVariants } from "@nextui-org/react";

interface ButtonProps extends Pick<React.InputHTMLAttributes<string>, "type"> {
  label?: string;
  icon?: JSX.Element;
  placholder?: string;
}

export default function Input({ type, label, icon, placholder }: ButtonProps) {
  return (
    <BaseInput
      variant="bordered"
      labelPlacement="outside"
      className="border-[#393C49] text-gray-400 overflow-hidden"
      type={type}
      label={label}
      startContent={icon}
      placeholder={placholder}
    />
  );
}

const BaseInput = extendVariants(UIInput, {
  variants: {
    color: {
      base: {
        inputWrapper: ["bg-[#2D303E]"],
      },
    },
  },
  defaultVariants: {
    color: "base",
  },
});
