import Link from "next/link";
import clsx from "clsx";

type baseStylesType = {
  solid: String;
  outline: String;
}
const baseStyles: baseStylesType = {
  solid:
    "inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors",
  outline:
    "inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors",
};

const variantStyles = {
  solid: {
    cyan: "relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors",
    white:
      "bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70",
    gray: "bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80",
  },
  outline: {
    gray: "border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80",
  },
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  color?: "cyan" | "white" | "gray";
  href?: string;
}

export function Button({ className, variant = "solid", color = "gray", href, ...props }: ButtonProps) {
  className = clsx(
    baseStyles[variant],
    variant === "outline"
      ? variantStyles.outline[color as 'gray']
      : variant === "solid"
        ? variantStyles.solid[color as 'white']
        : undefined,
    className
  );

  return href ? (
    <Link className={className} href={href} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />
  ) : (
    <button className={className} {...props} />
  );
}