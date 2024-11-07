import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function Text(props: {
  variant?: "paragraph" | "subheading" | "small-subheading";
  className?: string;
  children: ReactNode;
}) {
  const { variant = "paragraph", className, children } = props;
  const sizeClasses =
    variant === "paragraph"
      ? "opacity-90"
      : variant === "subheading"
      ? "opacity-50"
      : "text-sm opacity-50";

  return <p className={twMerge("", sizeClasses, className)}>{children}</p>;
}

export function Heading(props: {
  size: 1 | 2 | 3;
  className?: string;
  children: ReactNode;
}) {
  const { size, className, children } = props;

  const sizeClasses =
    size === 1
      ? "text-3xl font-bold"
      : size === 2
      ? "md:text-5xl text-4xl font-bold"
      : "md:text-8xl text-5xl font-black";

  return <div className={twMerge("", sizeClasses, className)}>{children}</div>;
}
