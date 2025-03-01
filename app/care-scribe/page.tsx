import { FeatureTile } from "@/components/FeatureTile";
import { Heading, Text } from "@/components/Text";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <video
        src="/backgrounds/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute -z-20 h-[500px] md:h-[750px] inset-0 w-screen object-cover"
      />
      <div className="mx-auto mt-40 flex flex-col items-center gap-10 text-white">
        <Heading
          size={3}
          className="md:text-center text-4xl md:text-7xl lg:text-8xl px-6"
        >
          Focus on care, not
          <br /> documentation
        </Heading>
        <div className="flex flex-col md:flex-row gap-10 p-6">
          <video
            src={"/illustrations/scribe.webm"}
            autoPlay
            loop
            muted
            playsInline
            className="lg:shadow-xl rounded-2xl h-[300px] lg:h-auto lg:w-full lg:max-w-[600px]"
          />

          <div className="w-full lg:w-[400px] text-black md:text-inherit">
            Care Scribe is an AI powered plugin integrated with Care&apos;s EMR
            software, designed to streamline documentation. By converting
            dictated information and image-based inputs into automatic form
            fills, it helps medical professionals save time and reduce errors.
            <Heading size={1} className="mt-4 text-base">
              Key Benefits
            </Heading>
            <ul className="list-disc mt-4 ml-8">
              <li>Accelerated documentation process</li>
              <li>Enhanced accuracy through AI transcription</li>
              <li>Seamless integration with existing EMR workflows</li>
            </ul>
            <br />
            <Link
              href="https://github.com/ohcnetwork/care_scribe"
              className="bg-black/30 md:bg-white/30 opacity-90 hover:opacity-100 text-black md:text-white px-4 py-2 rounded-full font-semibold transition-all inline-flex items-center"
              target="_blank"
            >
              <Image
                src={"/logos/github-mark-white.svg"}
                alt="GitHub"
                width={20}
                height={20}
                className="mr-2 invert md:invert-0"
              />
              View on Github
            </Link>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-center gap-10 mt-20 w-full lg:w-[1000px] mx-auto px-6 lg:p-0">
        <div>
          <Text variant="small-subheading">The Problem</Text>
          <Heading size={1} className="w-full font-normal shrink-0">
            Medical professionals often struggle with time-consuming
            documentation tasks. Manual data entry not only slows down workflows
            but also increases the risk of errors.
          </Heading>
        </div>
        <div>
          <Text variant="small-subheading">The Solution</Text>
          <Heading size={1} className="w-full font-normal shrink-0">
            Scribe automates the documentation process by transforming spoken
            words and visual data into structured, accurate form entries. It
            reduces administrative burdens, allowing clinicians to focus on
            patient care.
          </Heading>
        </div>
      </div>
      <div className="mt-20 px-6 lg:w-[1000px] mx-auto">
        <Heading size={2} className="text-center">
          Multimodal Capabilities
        </Heading>
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 mt-14">
          <div className="flex items-center justify-center flex-col gap-4 md:w-[400px]">
            <Image
              alt="microphone"
              src="/icons/voice.png"
              width={100}
              height={100}
            />
            <Heading size={1} className="text-center">
              Audio Capabilities
            </Heading>
            <div className="text-center">
              Effortlessly convert voice dictations into detailed medical
              records with AI transcription.
            </div>
          </div>
          <div className="flex items-center justify-center flex-col gap-4 md:w-[400px]">
            <Image
              alt="microphone"
              src="/icons/ocr.png"
              width={100}
              height={100}
            />
            <Heading size={1} className="text-center">
              Image Capabilities
            </Heading>
            <div className="text-center">
              Harness the power of image recognition to extract and process data
              from medical imaging, handwritten notes, or charts, turning visual
              inputs into actionable data.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 mt-20 p-10">
        <Heading size={2} className="text-center">
          Get Started
        </Heading>
        <div className="flex items-center justify-center gap-4 mt-10">
          <Link
            href="https://github.com/ohcnetwork/care_scribe"
            className=" bg-gradient-to-tr from-primary-500 to-primary-600 opacity-90 hover:opacity-100 text-white px-4 py-2 rounded-full font-semibold transition-all flex items-center"
            target="_blank"
          >
            <Image
              src={"/logos/github-mark-white.svg"}
              alt="GitHub"
              width={20}
              height={20}
              className="mr-2"
            />
            View on Github
          </Link>
        </div>
      </div>
    </>
  );
}
