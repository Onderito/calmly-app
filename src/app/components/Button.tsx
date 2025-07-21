import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "blur" | "noBlur";
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
        "font-bold transition-colors duration-200",
        {
          // Primary style
          "bg-[#86C0FA] font-manrope text-[16px]  px-0 text-white py-4 hover:bg-[#6bb2f7] rounded-lg ":
            variant === "primary",
          // Secondary style
          "border font-manrope  border-[#404040] text-[16px] px-2 py-4 text-[#404040] bg-transparent rounded-lg  hover:bg-[#eaf6ff]":
            variant === "secondary",
          // message style blur
          "shadow-inner-top bg-white/40 font-gloria text-[12px] text-[#000000]/45 w-fit px-8 py-3 rounded-full":
            variant === "noBlur",
          // message style blur
          "shadow-inner-top border-1 font-gloria text-white/80 text-[12px] bg-white/10 backdrop-blur-xs w-fit px-8 py-3 rounded-full ":
            variant === "blur",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
