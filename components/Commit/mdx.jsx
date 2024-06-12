"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { FormattedDate } from "@/components/Commit/FormattedDate";

export const a = Link;

export const img = function Img(props) {
  return (
    <div className="relative mt-8 overflow-hidden rounded-xl bg-gray-900 [&+*]:mt-8">
      <Image
        alt=""
        sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw"
        {...props}
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
    </div>
  );
};

function ContentWrapper({ className, ...props }) {
  return (
    <div className="mx-auto max-w-7xl px-6  ">
      <div className="    ">
        <div className={clsx("mx-auto max-w-lg    ", className)} {...props} />
      </div>
    </div>
  );
}

function ArticleHeader({ id, date }) {
  return (
    <header className="relative mb-10 ">
      <div className="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2    ">
        <Link href={`#${id}`} className="inline-flex">
          <FormattedDate date={date} className="/4   /50  hidden" />
        </Link>
        <div className=".5 h-[0.0625rem] w-3.5 bg-gray-400  " />
      </div>
      <ContentWrapper>
        <div className="flex">
          <Link href={`#${id}`} className="inline-flex">
            <FormattedDate
              date={date}
              className="text-2xs/4 font-medium text-white/50"
            />
          </Link>
        </div>
      </ContentWrapper>
    </header>
  );
}

export const article = function Article({ id, date, children }) {
  let heightRef = useRef(null);
  let [heightAdjustment, setHeightAdjustment] = useState(0);

  useEffect(() => {
    if (!heightRef.current) {
      return;
    }

    let observer = new window.ResizeObserver(() => {
      if (!heightRef.current) {
        return;
      }
      let { height } = heightRef.current.getBoundingClientRect();
      let nextMultipleOf8 = 8 * Math.ceil(height / 8);
      setHeightAdjustment(nextMultipleOf8 - height);
    });

    observer.observe(heightRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <article
      id={id}
      className="scroll-mt-16"
      style={{ paddingBottom: `${heightAdjustment}px` }}
    >
      <div ref={heightRef}>
        <ArticleHeader id={id} date={date} />
        <ContentWrapper className="typography" data-mdx-content>
          {children}
        </ContentWrapper>
      </div>
    </article>
  );
};

export const code = function Code({ highlightedCode, ...props }) {
  if (highlightedCode) {
    return (
      <code {...props} dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    );
  }

  return <code {...props} />;
};
