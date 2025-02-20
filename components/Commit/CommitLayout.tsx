import { useId, ReactNode } from "react";

import { Intro, IntroFooter } from "@/components/Commit/Intro";
import { StarField } from "@/components/Commit/StarField";
import { ThemeToggle } from "@/components/Commit/ThemeToggle";

function Timeline() {
  const id = useId();

  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden">
      <svg
        className="absolute left-[max(0px,calc(50%-18.125rem))] top-0 h-full w-1.5"
        aria-hidden="true"
      >
        <defs>
          <pattern id={id} width="6" height="8" patternUnits="userSpaceOnUse">
            <path d="M0 0H6M0 8H6" className="/10 stroke-white/10" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

function Glow() {
  const id = useId();

  return (
    <div className="inset-0 -z-10 overflow-hidden bg-gray-950">
      <svg
        className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`${id}-mobile`} cy="100%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
            <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id}-mobile)`} />
      </svg>
      <div className="absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay" />
    </div>
  );
}

interface FixedSidebarProps {
  main: ReactNode;
  footer: ReactNode;
}

function FixedSidebar({ main, footer }: FixedSidebarProps) {
  return (
    <div className="relative flex-none overflow-hidden px-6">
      <Glow />
      <div className="relative flex w-full">
        <div className="mx-auto max-w-lg">
          <div className="pb-16 pt-20 sm:pb-20 sm:pt-32">
            <div className="relative">
              <StarField className="-right-44 top-14" />
              {main}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CommitLayoutProps {
  children: ReactNode;
}

export default function CommitLayout({ children }: CommitLayoutProps) {
  return (
    <div className="pb-20">
      <div className="flex min-h-full flex-col bg-gray-950">
        <FixedSidebar main={<Intro />} footer={<IntroFooter />} />
      </div>
    </div>
  );
}
