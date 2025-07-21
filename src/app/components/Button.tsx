import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

export default function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        " py-4 rounded-lg font-bold font-manrope transition-colors duration-200 text-base text-[16px]",
        {
          // Primary style
          "bg-[#86C0FA] px-0 text-white hover:bg-[#6bb2f7]":
            variant === "primary",
          // Secondary style
          "border border-[#404040] px-2 text-[#404040] bg-transparent hover:bg-[#eaf6ff]":
            variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
