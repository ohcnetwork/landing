"use client";

import { useEffect, useState, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";

import screenshotABDMIntegration from "@/public/features/abdm.png";
import screenshotDeviceIntegrations from "@/public/features/device.png";
import screenshotEMRCriticalCare from "@/public/features/emr.png";
import screenshotRealTimeMonitoring from "@/public/features/monitoring.png";

type Feature = {
  title: string;
  description: string;
  image: StaticImageData;
};

const features: Feature[] = [
  {
    title: "EMR Support For Critical Care",
    description:
      "A comprehensive electronic medical record system tailored for intensive and critical care settings, enhancing patient data management and accessibility.",
    image: screenshotEMRCriticalCare,
  },
  {
    title: "Real-time Monitoring",
    description:
      "Monitor patient vitals and room conditions in real-time, adhering to Onvif specifications for seamless integration with existing security infrastructure.",
    image: screenshotRealTimeMonitoring,
  },
  {
    title: "Device Integrations",
    description:
      "Integrate seamlessly with a variety of medical devices using the HL7 standard, ensuring accurate and timely data collection across systems.",
    image: screenshotDeviceIntegrations,
  },
  {
    title: "ABDM Integration",
    description:
      "Fully integrated with India's Ayushman Bharat Digital Mission (ABDM), facilitating better healthcare delivery through digital health records and services.",
    image: screenshotABDMIntegration,
  },
];

export function PrimaryFeatures() {
  const [tabOrientation, setTabOrientation] = useState<
    "horizontal" | "vertical"
  >("horizontal");

  useEffect(() => {
    const lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    const onMediaQueryChange = (event: MediaQueryListEvent) => {
      const { matches } = event;
      setTabOrientation(matches ? "vertical" : "horizontal");
    };

    lgMediaQuery.addEventListener(
      "change",
      onMediaQueryChange as EventListener
    );
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="product"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-primary-600 pb-28 md:pb-16 pt-20 sm:py-32 mt-32 sm:mt-56"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Empowering Healthcare with Advanced Technology
          </h2>
          <p className="mt-6 lg:mx-8 text-lg tracking-tight text-primary-100">
            Explore the advanced capabilities of Care designed to enhance
            healthcare delivery and patient management. From real-time
            monitoring to comprehensive EMR support, our features are tailored
            to meet the needs of modern medical facilities.
          </p>
        </div>
        <TabGroup
          className=" grid grid-cols-1 items-center gap-y-2  sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === "vertical"}
        >
          {({ selectedIndex }: { selectedIndex: number }) => (
            <>
              <div className="-mx-4 md:block hidden overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        "group relative rounded-full px-4 py-1 lg:rounded-xl lg:p-6",
                        selectedIndex === featureIndex
                          ? "bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10"
                          : "hover:bg-white/10 lg:hover:bg-white/5"
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            "font-display text-lg outline-none",
                            selectedIndex === featureIndex
                              ? "text-primary-600 lg:text-white"
                              : "text-primary-100 hover:text-white lg:text-white"
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-xl" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          "mt-2 hidden text-sm lg:block",
                          selectedIndex === featureIndex
                            ? "text-white"
                            : "text-primary-100 group-hover:text-white"
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              {/*Sliding card in Mobile view */}
              <div className="sm:hidden mt-6 flex overflow-x-auto snap-x snap-mandatory">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="snap-center  flex-shrink-0 w-full mr-3"
                  >
                    <p className="my-4 font-display text-xl tracking-tight text-white">
                      {feature.title}
                    </p>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      className="rounded-lg shadow-lg"
                      priority
                    />
                    <p className="mt-4 text-white">{feature.description}</p>
                  </div>
                ))}
              </div>
              <TabPanels className="lg:col-span-7 md:block hidden ">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-20 lg:ml-5 w-full overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-primary-900/20 sm:w-auto lg:mt-0">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  );
}

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

function Container({ className, ...props }: ContainerProps) {
  return <div className={clsx("px-4 lg:px-6", className)} {...props} />;
}
