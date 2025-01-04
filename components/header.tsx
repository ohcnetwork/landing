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
  const [dropDownHeight, setDropDownHeight] = useState(0);

  const headerContainerRef = useRef<HTMLDivElement>(null);
  const triangleRef = useRef<SVGSVGElement>(null); // SVGSVG? :D

  const productsItems = [
    {
      name: "CARE",
      description:
        "War ready HMIS software, empowering thousands of ICU beds across India. All built on open source.",
      image: "/features/care-desktop.png",
      href: "/care",
    },
    /*{
      name: "Ayushma",
      description:
        "AI powered chatbot to assist doctors and nurses in managing patient care.",
      image: "/features/care-desktop.png",
      href: "/ayushma",
    },
    {
      name: "Leaderboard",
      description:
        "Tracking the progress of open source contributors and rewarding them for their contributions.",
      image: "/features/care-desktop.png",
      href: "/leaderboard",
    },*/
  ];

  const communityItems = [
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

  const navigation: NavigationItem[] = [
    { type: "dropdown", content: "Products", items: productsItems },
    { type: "dropdown", content: "Community", items: communityItems },
    { type: "link", content: "Supporters", href: "/supporters" },
    { type: "link", content: "Timeline", href: "/timeline" },
    { type: "link", content: "Contact", href: path === '/' ? '/#contact' : '/?section=contact' },
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
    if (typeof window !== 'undefined' && path === '/' && window.location.hash) {
      const handleHashChange = () => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      handleHashChange(); // Handle the current hash on load

      window.addEventListener('hashchange', handleHashChange); // Listen for future hash changes
      return () => window.removeEventListener('hashchange', handleHashChange);
    }
  }, [path]);

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
      )
        setShowDropdown(null);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    setDropDownHeight(
      document.querySelector(".dropdown-animate-in")?.clientHeight || 0
    );
  }, [dropDownData]);

  const NavigationItemRender = (props: {
    item: NavigationItem;
    onHover?: (hoverstate: boolean, leftOffset: number) => void;
  }) => {
    const { item, onHover } = props;

    const className = `font-black md:font-semibold ${
      scrolled ? "md:hover:text-black/100" : "md:hover:text-white/100"
    } transition-all px-3 flex items-center md:justify-center h-full`;

    const itemRef = useRef<HTMLButtonElement>(null);

    switch (item.type) {
      case "link":
        return (
          <Link href={item.href} className={className}>
            {item.content}
          </Link>
        );
      case "section":
        return (
          <Link
            href={item.page + "#" + item.id}
            className={className}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
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
      case "button":
        return (
          <button className={className} onClick={item.onClick}>
            {item.content}
          </button>
        );
      case "dropdown":
        return (
          <button
            ref={itemRef}
            className={"nav-button " + className}
            onMouseOver={() => {
              onHover?.(
                true,
                (itemRef.current?.getBoundingClientRect().left || 0) +
                  (itemRef.current?.clientWidth || 0) / 2
              );
            }}
            onMouseOut={() => {
              onHover?.(
                false,
                (itemRef.current?.getBoundingClientRect().left || 0) +
                  (itemRef.current?.clientWidth || 0) / 2
              );
            }}
          >
            {item.content}
          </button>
        );
    }
  };

  const DropDownRender = (props: {
    items: DropDownItem[];
    className?: string;
  }) => {
    const { items, className } = props;
    return (
      <div
        className={
          `flex items-stretch p-4 absolute top-0 inset-x-0 ` + className
        }
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
              height={200}
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
      <div
        className={`absolute inset-x-0 h-full bg-white/70 backdrop-blur-xl -z-10 transition-all ${
          scrolled ? "top-0" : "-top-full"
        }`}
      />
      <nav
        className={`flex relative items-stretch justify-between transition-all px-4 md:px-6 lg:px-8`}
        aria-label="Global"
      >
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
        <div className="flex md:hidden mr-4">
          <button
            type="button"
            className=" inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
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
        <div
          className={`flex md:items-center p-6 md:p-0 fixed ${
            mobileMenuOpen ? "right-0" : "right-[-100vw]"
          } md:right-auto transition-all md:static ${
            scrolled ? "bg-white/50" : "bg-black/50"
          } pb-[300px] md:pb-0 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none h-screen md:h-auto top-0 md:top-auto w-screen md:w-auto flex-col md:flex-row text-5xl md:text-base`}
        >
          <button
            className="md:hidden block absolute top-6 right-8"
            onClick={() => setMobileMenuOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          {navigation.map((item, i) => (
            <NavigationItemRender
              item={item}
              key={i}
              onHover={(hoverstate, leftOffset) => {
                if (hoverstate) {
                  setShowDropdown(i + 1);
                  triangleRef.current?.style.setProperty(
                    "left",
                    `${leftOffset - triangleRef.current.clientWidth / 2}px`
                  );
                }
              }}
            />
          ))}
        </div>
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
