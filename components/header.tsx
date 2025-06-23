"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header(props: { fixed?: boolean }) {
  const { fixed } = props;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState<number | null>(null);
  const [dropDownData, setDropDownData] = useState<DropDownItem[] | null>(null);
  const [outDropdownData, setOutDropdownData] = useState<DropDownItem[] | null>(
    null
  );
  const headerContainerRef = useRef<HTMLDivElement>(null);
  const triangleRef = useRef<SVGSVGElement>(null);

  const [dropDownHeight, setDropDownHeight] = useState(0);

  // This type describes the dropdown items and nav items.
  type DropDownItem = {
    name: string;
    description: string;
    image: string;
    href: string;
  };

  type NavigationItem = {
    content: ReactNode;
  } & (
    | { type: "link"; href: string }
    | { type: "section"; id: string; page: string }
    | { type: "button"; onClick: () => void }
    | { type: "dropdown"; items: DropDownItem[] }
  );

  // Hard-coded navigation config.
  const productsItems: DropDownItem[] = [
    {
      name: "Care",
      description:
        "War ready HMIS software, empowering thousands of ICU beds across India. All built on open source.",
      image: "/logos/care.png",
      href: "/care",
    },
    {
      name: "Care Scribe",
      description:
        "AI powered medical transcription plugin for Care, reducing time taken to document patient encounters.",
      image: "/logos/scribe.png",
      href: "/care-scribe",
    },
    /*
      {
        name: "Leaderboard",
        description:
          "Tracking the progress of open source contributors and rewarding them for their contributions.",
        image: "/features/care-desktop.png",
        href: "/leaderboard",
      }*/
  ];

  const communityItems: DropDownItem[] = [
    {
      name: "Github",
      description: "Contribute to our open source projects on Github.",
      image: "/dropdownicons/github.webp",
      href: "https://github.com/ohcnetwork",
    },
    {
      name: "Slack",
      description:
        "Join our Slack community to connect with other contributors.",
      image: "/dropdownicons/slack.jpg",
      href: "https://slack.ohc.network/",
    },
  ];

  const navigation: NavigationItem[] = [
    { type: "dropdown", content: "Products", items: productsItems },
    { type: "dropdown", content: "Community", items: communityItems },
    { type: "link", content: "Supporters", href: "/supporters" },
    { type: "link", content: "Timeline", href: "/timeline" },
    { type: "link", content: "Careers", href: "/careers" },
    { type: "section", content: "Contact", id: "contact", page: "/" },
    {
      type: "link",
      content: (
        <Image
          alt="Github"
          src={`/logos/github-mark-white.svg`}
          width={50}
          height={50}
          className={`md:w-[25px] ${
            scrolled ? "brightness-0" : ""
          } transition-all`}
        />
      ),
      href: "https://github.com/ohcnetwork",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const nav = navigation[(showDropdown || 0) - 1];
    const items = nav?.type === "dropdown" ? nav.items : [];
    setOutDropdownData(dropDownData);
    setDropDownData(items);
  }, [showDropdown]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const target = e.target as Element;
      if (
        !target.closest(".nav-button") &&
        !target.closest(".nav-dropdown") &&
        !target.closest("#dropdown-triangle")
      ) {
        setShowDropdown(null);
      }
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    setDropDownHeight(
      document.querySelector(".dropdown-animate-in")?.clientHeight || 0
    );
  }, [dropDownData]);

  function isActive(item: NavigationItem): boolean {
    // If it's a link, we check if path === item.href.
    if (item.type === "link") {
      return path === item.href;
    }

    // If it's a section, we check if path === item.page.
    if (item.type === "section") {
      return false; // ignoring sections, or do path === item.page if needed.
    }

    // If it's a dropdown, we check if any of the sub-items have an href === path.
    if (item.type === "dropdown") {
      return item.items.some((subItem) => path === subItem.href);
    }

    return false;
  }

  function Dot({ active }: { active: boolean }) {
    return (
      <>
        {/* Mobile Dot: 20px below */}
        <span
          className={`
            absolute
            block
            md:hidden
            left-[-30px]
            top-1/2
            -translate-y-1/2
            w-5
            h-5
            rounded-full
            transition
            ${active ? "opacity-100" : "opacity-0"}
          `}
          style={{ backgroundColor: "currentColor" }}
        />
        {/* Desktop Dot: 12px below */}
        <span
          className={`
            absolute
            hidden
            md:block
            left-1/2
            -translate-x-1/2
            -bottom-[12px]
            w-2
            h-2
            rounded-full
            transition
            ${active ? "opacity-100" : "opacity-0"}
          `}
          style={{ backgroundColor: "currentColor" }}
        />
      </>
    );
  }

  const NavigationItemRender = (props: {
    item: NavigationItem;
    onHover?: (hoverstate: boolean, leftOffset: number) => void;
  }) => {
    const { item, onHover } = props;
    const active = isActive(item);

    const className = `relative font-black md:font-semibold ${
      scrolled ? "md:hover:text-black/100" : "md:hover:text-white/100"
    } transition-all px-3 flex items-center md:justify-center h-full`;

    switch (item.type) {
      case "dropdown": {
        return (
          <button
            className={"nav-button " + className}
            onMouseOver={() => {
              onHover?.(true, 0);
            }}
            onMouseOut={() => {
              onHover?.(false, 0);
            }}
          >
            <span className="relative">
              {item.content}
              {active && <Dot active={true} />}
            </span>
          </button>
        );
      }
      case "link": {
        // If it's a link, we can just render a Next Link. Show dot if active.
        return (
          <Link
            href={item.href}
            className={className}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="relative">
              {item.content}
              {active && <Dot active={true} />}
            </span>
          </Link>
        );
      }
      case "section": {
        return (
          <Link
            href={item.page + "#" + item.id}
            className={className}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMobileMenuOpen(false);
              if (path === item.page) {
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              } else {
                router.push(item.page + "#" + item.id);
              }
            }}
          >
            {item.content}
          </Link>
        );
      }
      case "button": {
        return (
          <button
            className={className}
            onClick={() => {
              item.onClick();
              setMobileMenuOpen(false);
            }}
          >
            {item.content}
          </button>
        );
      }
    }
  };

  const DropDownRender = (props: {
    items: DropDownItem[];
    className?: string;
  }) => {
    const { items, className } = props;
    return (
      <div
        className={`flex items-stretch p-4 absolute top-0 inset-x-0 ${
          className || ""
        }`}
      >
        {items?.map((item, i) => (
          <Link
            href={item.href}
            key={i}
            className={`p-4 w-[200px] text-left rounded-lg ${
              scrolled ? "hover:bg-black/5" : "hover:bg-black/10"
            } transition-all flex flex-col gap-2`}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={150}
              className="rounded-lg"
            />
            <div className="font-black text-sm">{item.name}</div>
            <p
              className={`text-xs ${
                scrolled ? "text-black/80" : "text-white/80"
              }`}
            >
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "text-black/80" : "text-white/80"
      }`}
      id="header"
    >
      {/* Background when scrolled. */}
      <div
        className={`absolute inset-x-0 h-full bg-white/70 backdrop-blur-xl -z-10 transition-all ${
          scrolled ? "top-0" : "-top-full"
        }`}
      />

      {/* Main nav */}
      <nav
        className={`flex relative items-stretch justify-between transition-all px-4 md:px-6 lg:px-8`}
        aria-label="Global"
      >
        {/* Left side: logo */}
        <div
          id="header-container"
          ref={headerContainerRef}
          className={`flex lg:flex-1 transition-all ${
            scrolled ? "py-3" : "py-6"
          }`}
        >
          <Link href="/" className="">
            <span className="sr-only">Open Healthcare Network</span>
            <Image
              src="/ohc_logo_white.svg"
              alt=""
              width={125}
              height={40}
              className={`h-[46px] ${
                scrolled ? "brightness-0" : ""
              } transition-all`}
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden mr-4">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              color={scrolled ? "black" : "white"}
              className="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* The menu (mobile or desktop) */}
        <div
          className={`flex md:items-center p-6 md:p-0 fixed ${
            mobileMenuOpen ? "right-0" : "right-[-100vw]"
          } md:right-auto transition-all md:static ${
            scrolled ? "bg-white/50" : "bg-black/50"
          } pb-[300px] md:pb-0 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none h-screen md:h-auto top-0 md:top-auto w-screen md:w-auto flex-col md:flex-row text-5xl md:text-base`}
        >
          {/* Mobile menu close button */}
          <button
            className="md:hidden block absolute top-6 right-8 z-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          {/* Render each navigation item */}
          {navigation.map((item, i) => (
            <NavigationItemRender
              item={item}
              key={i}
              onHover={(hoverstate, leftOffset) => {
                if (hoverstate) {
                  setShowDropdown(i + 1);
                  if (triangleRef.current) {
                    triangleRef.current.style.setProperty(
                      "left",
                      `${leftOffset - triangleRef.current.clientWidth / 2}px`
                    );
                  }
                }
              }}
            />
          ))}
        </div>

        {/* The little triangle shown below dropdown if needed */}
        <svg
          id="dropdown-triangle"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="black"
          className={`hidden md:block absolute bottom-[-1px] ${
            !!showDropdown
              ? scrolled
                ? "opacity-5"
                : "opacity-20"
              : "opacity-0"
          } transition-all`}
          ref={triangleRef}
        >
          <path d="M24 22h-24l12-20z" />
        </svg>
      </nav>

      {/* The dropdown container for subitems (Products, Community, etc.) */}
      <div
        className={`nav-dropdown ${scrolled ? "bg-black/5" : "bg-black/20"} ${
          scrolled ? "" : "backdrop-blur md:rounded-xl md:mx-10"
        } transition-all overflow-hidden fixed bottom-0 md:bottom-auto inset-x-0 md:inset-x-auto md:relative ${
          !!showDropdown ? "max-h-[400px]" : "max-h-0"
        }`}
        style={{ height: dropDownHeight }}
      >
        <DropDownRender
          items={dropDownData || []}
          className="dropdown-animate-in"
        />
        <DropDownRender
          items={outDropdownData || []}
          className="dropdown-animate-out"
        />
      </div>
    </header>
  );
}
