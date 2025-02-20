"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { FormattedDate } from "@/components/Commit/FormattedDate";

export const a = Link;

export const img = function Img(props: ImageProps) {
  return (
    <div className="relative mt-8 overflow-hidden rounded-xl bg-gray-900 [&+*]:mt-8">
      <Image
        sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw"
        {...props}
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
    </div>
  );
};

interface ContentWrapperProps {
  className?: string;
  children: ReactNode;
}

function ContentWrapper({ className, children }: ContentWrapperProps) {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div>
        <div className={clsx("mx-auto max-w-lg", className)}>{children}</div>
      </div>
    </div>
  );
}

interface ArticleHeaderProps {
  id: string;
  date: Date;
}

function ArticleHeader({ id, date }: ArticleHeaderProps) {
  return (
    <header className="relative mb-10">
      <div className="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2">
        <Link href={`#${id}`} className="inline-flex">
          <FormattedDate date={date} className="hidden" />
        </Link>
        <div className="h-[0.0625rem] w-3.5 bg-gray-400" />
      </div>
      <ContentWrapper>
        <div className="flex">
          <Link href={`#${id}`} className="inline-flex">
            <FormattedDate date={date} className="text-xs font-medium text-white/50" />
          </Link>
        </div>
      </ContentWrapper>
    </header>
  );
}

interface ArticleProps {
  id: string;
  date: Date;
  children: ReactNode;
}

export const article = function Article({ id, date, children }: ArticleProps) {
  const heightRef = useRef<HTMLDivElement | null>(null);
  const [heightAdjustment, setHeightAdjustment] = useState(0);

  useEffect(() => {
    if (!heightRef.current) return;

    const observer = new ResizeObserver(() => {
      if (!heightRef.current) return;
      const { height } = heightRef.current.getBoundingClientRect();
      const nextMultipleOf8 = 8 * Math.ceil(height / 8);
      setHeightAdjustment(nextMultipleOf8 - height);
    });

    observer.observe(heightRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <article id={id} className="scroll-mt-16" style={{ paddingBottom: `${heightAdjustment}px` }}>
      <div ref={heightRef}>
        <ArticleHeader id={id} date={date} />
        <ContentWrapper className="typography" data-mdx-content>
          {children}
        </ContentWrapper>
      </div>
    </article>
  );
};

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  highlightedCode?: string;
}

export const code = function Code({ highlightedCode, ...props }: CodeProps) {
  if (highlightedCode) {
    return <code {...props} dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
  }
  return <code {...props} />;
};
