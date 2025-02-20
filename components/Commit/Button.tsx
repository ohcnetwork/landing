import Link from "next/link";
import clsx from "clsx";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonInnerProps {
  arrow?: boolean;
  children: ReactNode;
}

function ButtonInner({ arrow = false, children }: ButtonInnerProps) {
  return (
    <>
      <span className="absolute inset-0 rounded-md bg-gradient-to-b from-white/80 to-white opacity-10 transition-opacity group-hover:opacity-15" />
      <span className="absolute inset-0 rounded-md opacity-7.5 shadow-[inset_0_1px_1px_white] transition-opacity group-hover:opacity-10" />
      {children} {arrow && <span aria-hidden="true">&rarr;</span>}
    </>
  );
}

// Define separate types for button and link props
type ButtonProps = {
  className?: string;
  arrow?: boolean;
  children: ReactNode;
} & (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>) // If href exists, treat as <a> props
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }) // Otherwise, treat as <button> props
  );

export function Button({ className, arrow, children, href, ...props }: ButtonProps) {
  const buttonClass = clsx(
    className,
    "group relative isolate flex-none rounded-md py-1.5 text-[0.8125rem]/6 font-semibold text-white",
    arrow ? "pl-2.5 pr-[calc(9/16*1rem)]" : "px-2.5"
  );

  if (href) {
    return (
      <Link href={href} passHref>
        <a className={buttonClass} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          <ButtonInner arrow={arrow}>{children}</ButtonInner>
        </a>
      </Link>
    );
  }

  return (
    <button className={buttonClass} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      <ButtonInner arrow={arrow}>{children}</ButtonInner>
    </button>
  );
}
