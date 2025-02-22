"use client";

import {useState } from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import LoadVideoPlayer from "@/components/LoadVideoPlayer";
import { OpenAIHero } from "@/components/OpenAIHero";
import Head from "next/head";
import Link from "next/link";
import CommitLayout from "@/components/Commit/CommitLayout";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import ScrollToQuery from "@/components/ScrollToQuery";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";

const primaryFeatures = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
    icon: ServerIcon,
  },
];
const secondaryFeatures = [
  {
    name: "Push to deploy",
    description:
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const featuredTestimonial = {
  body: "Open Healthcare Network in India is a profoundly inspiring story of how we can accelerate human progress by enabling the world's soon-to-be largest developer community with the possibilities of AI. India's developers, building with their copilot companion, will help save lives -- one commit at a time. 🇮🇳",
  author: {
    name: "Thomas Dohmke",
    handle: "GitHub CEO",
    imageUrl: "thomas_dohmke",
    logoUrl: "",
  },
};
const testimonials = [
  [
    [
      {
        body: 'Great work by@10BedICU in putting 200+ tele-ICUs in remote districts in India, all operational and connected to 11 regional expertise centers or "hubs" for people who had no access to an ICU during COVID. Now they can permanently have nearby ICU access. Goal is to get to all 700 districts of India.',
        author: {
          name: "Vinod Khosla",
          handle: "Founder, Khosla Ventures",
          imageUrl: "vinod_khosla",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "It gives me immense pleasure to attend the inauguration of the first of its kind 10 Bedded ICU Ward and Tele ICU Hub in JNIMS today. Equipped with some the best equipments, this facility will immensely help in serving the patients in JNIMS as well as the remote areas of Manipur.",
        author: {
          name: "Biren Singh",
          handle: "Chief Minister of Manipur",
          imageUrl: "biren_singh",
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: "What a journey it has been for CARE from a COVID dashboard fully run by volunteers for a district in Kerala to this... phew!!! In a symbolic view, for me this feels almost like an unicorn valuation equivalent for social sector #india #dpg #innovation #healthcare #ai #tech4good",
        author: {
          name: "Sreevas Sahasranam",
          handle: "University of Glasgow",
          imageUrl: "sreevas_sahasranam",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: `One of the coolest non-profits operating in the healthcare space just turned 4 🐣 - they bring advanced ICU care to places in rural India.
Meeting and working with the team has been a major highlight of the past couple months :)`,
        author: {
          name: "Kai Chen",
          handle: "OpenAI",
          imageUrl: "kai_chen",
        },
      },
      // More testimonials...
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const aiTools = [
  {
    title: "Voice",
    description:
      "Medispeak transforms voice to text and automatically fill Electronic Medical Records.",
  },
  {
    title: "Vision",
    description:
      "Automate medical readings from ICU equipment into Electronic Medical Records.",
  },
  {
    title: "Agent",
    description:
      "Ayushma AI is multilingual Medical Protocol Assistant for assisting nurses.",
  },
];
type Banner = {
  message: string;
  href: string;
};
export default function Page() {
  const [banner, setBanner] = useState<Banner | null>(null);

  return (
    <div className="bg-white">
      {/* Hero */}
      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gray-900">
          <Image
            src="/war_room.jpg"
            alt=""
            fill={true}
            style={{ objectFit: "cover" }}
            className="absolute inset-0 -z-10 opacity-20 object-fill"
          />
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              {banner && (
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                  {banner.message}
                  <a href={banner.href} className="font-semibold text-white">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              )}
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">
                Reimagining Public Healthcare with AI
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Engineering free and open-source tools to maximize human
                efficiency in compassionate healthcare delivery
              </p>
              <Link
                href={"https://github.com/ohcnetwork"}
                className="bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-all font-bold py-3 px-4 pr-4 inline-flex mt-6 items-center gap-2"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Star us on GitHub
              </Link>
              {/* CTA Buttons */}
              {/*
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div> */}
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
        {/* Logo cloud */}
        <div className="mt-10 max-w-7xl mx-auto px-5">
          <div className="p-0 md:p-5">
            <div className="bg-white p-8 pt-0 rounded-2xl ">
              <div className="flex justify-center text-center">
                <p className="leading-tight text-center px-4 py-2 rounded-b-lg text-gray-800">
                  Supported By
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5 md:grid-cols-4 pt-7">
                <div className="flex justify-center">
                  <div className="w-48 flex items-center">
                    <Image
                      width={160}
                      height={40}
                      className="object-contain"
                      src="/logos/aicte.png"
                      alt="AICTE Logo"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-24 flex items-center">
                    <Image
                      width={160}
                      height={40}
                      className="object-contain"
                      src="/logos/e-gov-foundation-logo.png"
                      alt="e-gov foundation Logo"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-16 flex justify-center items-center">
                    <Image
                      width={160}
                      height={40}
                      className="object-contain"
                      src="/logos/ACT-Logo.png"
                      alt="ACT Logo"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-56 flex items-center">
                    <Image
                      width={160}
                      height={40}
                      className="object-contain"
                      src="/logos/logo-msdf-color.svg"
                      alt="Michael & Susan Dell Foundation Logo"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-24 flex items-center">
                    <Image
                      width={160}
                      height={40}
                      className="object-contain"
                      src="/logos/ima-kochi.png"
                      alt="IMA Logo"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-36 flex items-center">
                    <Image
                      width={160}
                      height={40}
                      className="object-contain"
                      src="/logos/kerala-startup-mission.svg"
                      alt="Kerala Startup Mission Logo"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-36 flex items-center">
                    <Image
                      width={160}
                      height={40}
                      className="object-contain"
                      src="/logos/saturn-global-logo.svg"
                      alt="Saturn Global Logo"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-32 flex items-center">
                    <Image
                      width={160}
                      height={40}
                      className="object-contain"
                      src="/logos/swasth.svg"
                      alt="Swasth Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Video Section */}
        <section className="pt-4 max-w-7xl mt-20 mx-auto px-4 md:px-10">
          <h2 className="font-display text-3xl tracking-tight text-center sm:text-4xl md:text-5xl text-primary-600">
            Watch Satya Nadella&apos;s keynote at Microsoft AI Tour
          </h2>
          <p className="text-md text-center mx-auto md:text-lg max-w-2xl pt-4 text-gray-800">
            Highlighting the open-source work done by our community.
          </p>
          <div className="border-8 border-white/10 rounded-xl mt-8">
            <LoadVideoPlayer
              thumbnailUrl="/video-thumbnails/Satyas-keynote-video-thumbnail.jpeg"
              videoType="vimeo"
              videoUrl="https://player.vimeo.com/video/924932122?h=1090910241&amp;badge=0&amp;autoplay=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              altText="Shout Out from Satya Nadella CEO and Chairman of Microsoft for Open Healthcare Network"
            />
          </div>
        </section>

        {/* OpenAI Blog Feature */}
        <OpenAIHero />
        {/* AI Tools Section */}
        <section
          id="ai_features"
          className="mt-24 sm:mt-36 max-w-7xl mx-auto px-5"
        >
          <div className="grid md:grid-cols-2 border border-white/10 border-dashed">
            <div className="p-5 flex md:items-center md:justify-center border-b border-e-0 md:border-e border-white/10 border-dashed">
              <div>
                <h2 className=" text-2xl lg:text-6xl leading-snug bg-clip-text text-transparent bg-gradient-to-br from-green-500 via-green-600 to-green-700 font-semibold">
                  GenAI@ <br /> ohc.network
                </h2>
                <p className="text-gray-400 md:pt-4 text-lg max-w-sm">
                  Revolutionizing Healthcare with Generative AI
                </p>
              </div>
            </div>
            <div className="p-5 border-b border-white/10 border-dashed">
              <AiTool {...aiTools[0]} />
            </div>
            <div className="p-5 border-b  border-e-0 md:border-e border-white/10 border-dashed">
              <AiTool {...aiTools[1]} />
            </div>
            <div className="p-5 border-b border-white/10 border-dashed">
              <AiTool {...aiTools[2]} />
            </div>
          </div>
        </section>
        {/* Product Section */}
        {/* <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
              <div className="lg:row-start-2 lg:max-w-md">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Boost your productivity.
                  <br />
                  Start using our app today.
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel
                  nulla. Ac euismod vel sit maecenas.
                </p>
              </div>
              <img
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="Product screenshot"
                className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
                width={2432}
                height={1442}
              />
              <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                  {primaryFeatures.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="ml-9 inline-block font-semibold text-white">
                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-primary-500" aria-hidden="true" />
                        {feature.name}
                      </dt>{&apos; &apos;}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div
              className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
              aria-hidden="true"
            >
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
                style={{
                  clipPath:
                    &apos;polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)&apos;,
                }}
              />
            </div>
          </div>
        </div> */}

        <PrimaryFeatures />
        {/* Github Video Section */}
        <section className="pt-4 max-w-7xl mt-20 mx-auto px-4 md:px-10">
          <h2 className="font-display text-3xl tracking-tight text-center sm:text-4xl md:text-5xl text-primary-600">
            A story on Open Healthcare Network work in India
          </h2>
          <p className="text-md text-center mx-auto md:text-lg max-w-2xl pt-4 text-gray-800">
            How Open Healthcare Network has helped revolutionize access to
            healthcare across India. Their doctors and engineers show how open
            source collaboration on GitHub has been key to the success of their
            platform, CARE, and is impacting millions of lives throughout the
            country.
          </p>
          <div className="border-8 border-white/10 rounded-xl mt-8">
            <LoadVideoPlayer
              thumbnailUrl="/video-thumbnails/ohc-story-github.jpeg"
              videoType="youtube"
              showVideoProp={true}
              videoUrl="https://www.youtube.com/embed/-wxIzaqvkQA?si=WEvFIphUCPf7Fs64"
              altText="Shout Out from Satya Nadella CEO and Chairman of Microsoft for Open Healthcare Network"
            />
          </div>
        </section>
        {/* Feature section */}
        {/* <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Deploy faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
              pulvinar et feugiat blandit at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a href={feature.href} className="text-sm font-semibold leading-6 text-primary-600">
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div> */}

        {/* Newsletter section */}
        {/* <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get notified when we’re launching.
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
              Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Notify me
              </button>
            </form>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div> */}

        {/* Our Deployments */}

        <div id="deployments" className="overflow-hidden bg-white py-24">
          <div className="bg-white px-6 pb-10 sm:pb-16 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Our Deployments
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Care is deployed in various healthcare projects across India
                both in the public and private sector. Here are some of our
                showcase deployments.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
              <div className="lg:pr-4 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-green-600">
                    Major Deployment
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    10BedICU
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Launched in March 2021, the 10BedICU project aimed to
                    establish critical care infrastructure in rural and smaller
                    government hospitals. This initiative has set up over 200+
                    10BedICUs across nine states, transforming the landscape of
                    healthcare accessibility.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    The 10BedICU provisions ICU medical equipment, the CARE
                    software system, the TeleICU technology infrastructure, and
                    essential training for clinical and system operations, as
                    well as foster community participation.<br></br>
                  </p>

                  <figure className="mt-16 text-gray-600">
                    <blockquote className="text-base leading-7">
                      <p>
                        “One of the most active open source communities in
                        India. The OHC powers the CARE EMR a key pillar of the
                        10BedICU project.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-4 flex gap-x-4 text-sm leading-6 items-center">
                      <img
                        src="people/srikanth.jpeg"
                        alt=""
                        className="h-16 w-16 flex-none rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          Srikanth Nadhamuni
                        </div>
                        <div>– Chairman, 10BedICU</div>
                      </div>
                    </figcaption>
                  </figure>
                  <div className="mt-8">
                    <a
                      href="https://10bedicu.org/"
                      target="_blank"
                      className="inline-flex rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                      Read More about 10BedICU
                    </a>
                  </div>
                </div>
              </div>
              <img
                src="deployments/10bedicu.png"
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl sm:w-[57rem] md:-ml-4 lg:ml-0"
              />
            </div>
          </div>
        </div>

        {/* Testimonials section */}
        <div className="relative isolate sm:pt-36">
          <svg
            className="absolute inset-0 -z-10 hidden h-full w-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] sm:block"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
                width={200}
                height={200}
                x="50%"
                y={0}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={0} className="overflow-visible fill-gray-50">
              <path
                d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)"
            />
          </svg>
          <div className="relative">
            <div
              className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
              aria-hidden="true"
            >
              <div
                className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div
              className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end"
              aria-hidden="true"
            >
              <div
                className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-xl sm:text-center">
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary-600">
                  What the Community says about us
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  We have worked with some amazing people
                </p>
              </div>
              <div className="mx-auto mt-16 sm:grid max-w-2xl grid-cols-1 flex flex-col sm:grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                <figure className="col-span-2 block sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                  <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                    <p>{`“${featuredTestimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                    <img
                      className="h-10 w-10 flex-none rounded-full bg-gray-50"
                      src={`/profile/${featuredTestimonial.author.imageUrl}.jpeg`}
                      alt=""
                    />
                    <div className="flex-auto">
                      <div className="font-semibold">
                        {featuredTestimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`${featuredTestimonial.author.handle}`}</div>
                    </div>
                    <img
                      className="h-10 w-auto flex-none"
                      src={featuredTestimonial.author.logoUrl}
                      alt=""
                    />
                  </figcaption>
                </figure>
                {testimonials.map((columnGroup, columnGroupIdx) => (
                  <div
                    key={columnGroupIdx}
                    className="space-y-8 xl:contents xl:space-y-0"
                  >
                    {columnGroup.map((column, columnIdx) => (
                      <div
                        key={columnIdx}
                        className={classNames(
                          (columnGroupIdx === 0 && columnIdx === 0) ||
                            (columnGroupIdx === testimonials.length - 1 &&
                              columnIdx === columnGroup.length - 1)
                            ? "xl:row-span-2"
                            : "xl:row-start-1",
                          "space-y-8"
                        )}
                      >
                        {column.map((testimonial) => (
                          <figure
                            key={testimonial.author.handle}
                            className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                          >
                            <blockquote className="text-gray-900">
                              <p>{`“${testimonial.body}”`}</p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-x-4">
                              <img
                                className="h-10 w-10 rounded-full bg-gray-50"
                                src={`/profile/${testimonial.author.imageUrl}.jpeg`}
                                alt=""
                              />
                              <div>
                                <div className="font-semibold">
                                  {testimonial.author.name}
                                </div>
                                <div className="text-gray-600">{`${testimonial.author.handle}`}</div>
                              </div>
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* New DPG Recognition Section */}
        <section className="relative bg-gradient-to-br from-white via-green-50 to-white px-6 py-24 sm:py-48 lg:px-8 mt-8 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative mx-auto max-w-7xl">
            <div className="lg:grid items-center">
              <div className="col-span-7 mb-12 lg:mb-0">
                <div className="flex items-center justify-center mb-8">
                  <img
                    className="h-12 md:h-28 mr-4"
                    src="https://www.digitalpublicgoods.net/wp-content/themes/dpga/images/logo.svg"
                    alt="Digital Public Goods Alliance"
                  />
                  <div className="h-12 w-px bg-gray-300 mx-4"></div>
                  <img
                    className="h-12 md:h-28"
                    src="/logos/care-logo.svg"
                    alt="Care Logo"
                  />
                </div>
                <h2 className="text-3xl text-center font-bold text-gray-900 sm:text-4xl mb-6">
                  Recognized as the 50th Digital Public Good
                </h2>
                <p className="text-lg text-center max-w-xl mx-auto text-gray-600 mb-8">
                  Open Healthcare Network&apos;s <b>Care</b> has been honored by
                  the United Nations as a Digital Public Good, marking a
                  significant milestone in our mission to transform global
                  healthcare through open-source solutions.
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://www.digitalpublicgoods.net/registry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mx-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out shadow-md hover:shadow-lg"
                  >
                    Explore the DPG Registry
                    <svg
                      className="ml-2 -mr-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CommitLayout />
        <section
          id="contact"
          aria-label="Join Our Open Healthcare Network Slack Community"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative -mx-4 overflow-hidden bg-green-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-3xl md:px-16 xl:px-24 xl:py-36">
              <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
                <div>
                  <p className="font-display text-4xl font-medium tracking-tighter text-green-900 sm:text-5xl">
                    Join our Community
                  </p>
                  <p className="mt-4 text-lg tracking-tight text-green-900">
                    Connect, collaborate, and create change with like-minded
                    innovators in our Slack community, dedicated to advancing
                    healthcare through technology.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg text-center font-semibold tracking-tight text-green-900">
                    Become a Member of Our Community{" "}
                    <span aria-hidden="true">↓</span>
                  </h3>
                  <a
                    href="https://slack.ohc.network"
                    target="_blank"
                    className="mt-5 inline-block w-full text-center rounded-3xl bg-green-600 py-2.5 text-base font-semibold text-white hover:bg-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-900"
                  >
                    Start Collaborating 🎉
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function AiTool({ title, description }) {
  return (
    <div className="rounded-xl bg-gray-700 bg-gradient-to-br from-gray-900 to-gray-950 shadow-xl">
      <div className="w-full">
        <Image
          src={`/illustrations/${title}-icon.svg`}
          alt={`Illustration of ${title}`}
          width={700}
          height={500}
        />
      </div>
      <div className="p-6">
        <h3 className="text-gray-100 text-lg md:text-3xl">{title}</h3>
        <p className="text-gray-400 pt-1">{description}</p>
      </div>
    </div>
  );
}
