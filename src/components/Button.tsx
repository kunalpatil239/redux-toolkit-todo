import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
