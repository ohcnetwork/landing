import { Heading, Text } from "@/components/Text";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "CARE - Open Healthcare Network",
};

const patientFeatures: { title: string; desc: string; icon: string }[] = [
  {
    title: "Consultations",
    desc: "Managing and documenting patient consultations.",
    icon: "patient-list",
  },
  {
    title: "Rounds",
    desc: "Features to support medical rounds and their documentation.",
    icon: "stethoscope",
  },
  {
    title: "Investigations",
    desc: "Management of patient investigations and tests.",
    icon: "ecg",
  },
  {
    title: "Labs",
    desc: "Labs and test management.",
    icon: "syringe",
  },
  {
    title: "Files and Documents",
    desc: "Document management, including patient records and files.",
    icon: "files",
  },
  {
    title: "Discharge Summary",
    desc: "Generation and management of discharge summaries.",
    icon: "clinical-notes",
  },
  {
    title: "Patient Shifting",
    desc: "Management of patient transfers between departments or facilities.",
    icon: "ambulance",
  },
  {
    title: "Sample Tests",
    desc: "Handling and documentation of various sample tests.",
    icon: "virus",
  },
  // {
  //   title: "ICD11 Diagnosis",
  //   desc: "Support for ICD11 diagnosis coding and documentation.",
  //   icon: "ecg-heart",
  // },
];

const teleICUFeatures = [
  {
    name: "Central Nursing Station",
    desc: "Monitor patient vitals from a central hub",
    image: "/features/cns.png",
  },
  {
    name: "Live Camera Monitoring",
    desc: "See live feed from ICU cameras",
    image: "/features/monitoring.png",
  },
  {
    name: "Doctor Connect",
    desc: "Connect with patients and nursing staff through online video and text communications",
    image: "/features/doctor-connect.png",
  },
];

const careApps = [
  {
    name: "CARE Scribe",
    desc: "AI-powered autofilling of EMR records to reduce manual data entry.",
    display: (
      <>
        <Image
          src="/icons/speech_to_text.svg"
          height={100}
          width={100}
          alt="Scribe"
          className="brightness-0 invert"
        />
      </>
    ),
    className: "from-red-500 to-orange-500",
    link: "https://github.com/ohcnetwork/care_scribe_fe",
  },
  {
    name: "HCX - Health Care Exchange",
    desc: "Integration with Health Claims Exchange",
    className: "from-blue-500 to-blue-400",
    display: (
      <>
        <Image
          src="/logos/hcx.png"
          alt="Health Care Exchange"
          width={200}
          height={200}
          className="contrast-100 brightness-0 invert -translate-x-8"
        />
      </>
    ),
    link: "https://github.com/ohcnetwork/care_hcx_fe",
  },
  {
    name: "ABDM - Ayushman Bharat Digital Mission",
    desc: "Integration with the Ayushman Bharat Digital Mission",
    className: "from-purple-500 to-violet-600",
    display: (
      <>
        <Image
          src="/logos/national_health_authority.png"
          alt="National Health Authority Logo"
          width={200}
          height={200}
          className="invert"
        />
      </>
    ),
    link: "https://github.com/ohcnetwork/care_abdm_fe",
  },
];

function FeatureTile(
  props: {
    toLeft?: boolean;

    title: React.ReactNode;
    content: React.ReactNode;
  } & ({ image: string } | { video: string })
) {
  const { toLeft = false, title, content } = props;

  return (
    <div
      className={`flex ${
        toLeft ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-10 flex-col`}
    >
      {"video" in props ? (
        <video
          src={props.video}
          autoPlay
          loop
          muted
          playsInline
          className="shadow-xl rounded-2xl w-full lg:max-w-[600px]"
          width={600}
          height={415}
        />
      ) : (
        <Image
          alt="Image"
          src={props.image}
          className="shadow-xl rounded-2xl w-full lg:max-w-[600px]"
          width={600}
          height={415}
        />
      )}
      <div className="w-full lg:w-[400px]">
        <Heading size={1}>{title}</Heading>
        <Text className="mt-4">{content}</Text>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="">
      <div className="relative">
        {/*
        <video
          src="/backgrounds/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute -z-20 inset-0 h-screen w-screen object-cover"
        />
        */}
        <div
          className="absolute -z-20 inset-0 h-screen w-screen object-cover"
          style={{
            background: "url('/backgrounds/green-square-vector.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        {/*<div className="absolute inset-x-0 top-0 h-screen -z-10 bg-black/20" />*/}
        <div className="pt-[20vh]">
          <div className="text-center flex flex-col items-center">
            <div className="text-8xl font-black text-white/90">
              <Image
                src="https://raw.githubusercontent.com/ohcnetwork/branding/refs/heads/main/Care/SVG/Logo/Care-Logo_gradient_mark_with_white_wordmark.svg"
                alt="Care Logo"
                height={300}
                width={300}
                className=" w-[200px] md:w-[300px] object-cover"
              />
            </div>
            <Heading size={3} className="md:text-7xl p-4 text-[#DDFFD8]">
              Empowering <br />
              thousands of ICU beds <br /> across India.
            </Heading>
            <Text className="text-white/80 text-2xl w-3/4 mt-4">
              War ready HMIS software, all built on open source.
            </Text>
            <div className="flex items-center gap-4 mt-6">
              <Link
                href="https://github.com/ohcnetwork/care_fe"
                className=" opacity-80 bg-white text-black px-4 py-2 rounded-full font-semibold hover:opacity-100 transition-all flex items-center"
                target="_blank"
              >
                <Image
                  src={"/logos/github-mark.svg"}
                  alt="GitHub"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Star on GitHub
              </Link>
              <Link
                href={"https://care.ohc.network"}
                className="text-white font-semibold flex opacity-80 hover:opacity-100 transition-all"
              >
                View Demo
              </Link>
            </div>
            <Image
              src={"/illustrations/care-desktop.png"}
              alt=""
              width={5000}
              height={5000}
              className="w-full md:w-[80vw] mt-14 block rounded-2xl border-gray-200 border-4 shadow-xl"
            />
          </div>
        </div>
      </div>
      <div className="bg-white text-black flex flex-col items-center justify-center p-6 md:p-20">
        <Heading size={3} className="text-center">
          Comprehensive Care Support
        </Heading>
        <Text className="text-center md:w-[800px] mt-10">
          Care's consultation module supports outpatient, inpatient, and home
          care scenarios. Clinicians can manage patient encounters in hospitals,
          clinics, or even virtual/home settings within one system. This
          comprehensive support means all types of care—routine check-ups,
          hospital admissions, or home visits—are documented and handled in a
          unified interface, improving efficiency across the continuum of care.
        </Text>
        <div className="flex items-center justify-center gap-4 mt-10">
          {[
            { name: "Inpatient Care", image: "inpatient" },
            { name: "Outpatient Care", image: "outpatient" },
            { name: "Home Care", image: "homecare" },
          ].map((type, i) => (
            <div className="flex flex-col items-center gap-4" key={i}>
              <img
                src={`/illustrations/${type.image}.png`}
                className="w-72 aspect-square rounded-xl"
              />
              <Heading size={1} className="font-normal">
                {type.name}
              </Heading>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-20 mt-20">
          <FeatureTile
            video="/illustrations/scheduling.webm"
            title="Advanced Scheduling & Public Facility Pages"
            content="An advanced scheduling system streamlines appointment management for both patients and healthcare providers. Users can easily book, view, and manage appointments with intuitive calendar features. In addition, public facility pages showcase healthcare facility information and availability to the public. Hospitals and clinics can display their services, operating hours, and resource availability, improving transparency and helping patients find and schedule the care they need more conveniently."
          />
          <FeatureTile
            video="/illustrations/forms.webm"
            title="Customizable EMR Forms"
            toLeft
            content="Care's Electronic Medical Record (EMR) system now includes extensively customizable forms for data capture. Healthcare providers can tailor forms to capture all necessary patient information and clinical observations. As data is entered, Care automatically generates structured observations (FHIR resources), ensuring that information is stored in a standardized format. This flexibility allows for detailed clinical documentation that fits diverse specialty needs while maintaining consistency and data integrity."
          />
          <FeatureTile
            video="/illustrations/scribe.webm"
            title="Care Scribe – AI‑Powered Transcription"
            content="Introducing Care Scribe, a voice-enabled EMR tool that leverages AI
            for speech-to-text transcription. Clinicians can dictate their notes
            and orders during or after a consultation, and Care Scribe will
            transcribe the speech directly into the corresponding EMR fields.
            This AI-powered transcription speeds up documentation, reduces
            typing burden, and allows healthcare providers to focus more on the
            patient rather than paperwork. Care Scribe supports medical
            terminology and integrates with the Care platform seamlessly as a
            plugin, showcasing the power of the new Care Apps architecture."
          />
        </div>

        <div className="flex flex-col xl:flex-row gap-10 justify-center">
          <div className="flex-1 flex flex-col xl:items-center">
            <Heading size={2} className="xl:text-center mt-20">
              Interoperable at core
            </Heading>
            <Text className="text-left xl:text-left md:w-[600px] mt-10">
              Care now offers full HL7 FHIR R5 compliance, integrating standard
              healthcare terminologies like SNOMED CT, LOINC, and UCUM. This
              ensures seamless data exchange and interoperability with other
              health systems, adhering to global healthcare data standards. By
              using the latest FHIR protocols, Care makes it easier to share and
              consume health information across platforms, reducing errors and
              improving continuity of care.
            </Text>
            <div className="flex items-center gap-10 justify-center mt-10 flex-wrap">
              {["hl7fhir.webp", "snomedct.png", "loinc.png", "ucum.png"].map(
                (logo, i) => (
                  <img key={i} src={"/logos/" + logo} alt="" className="h-14" />
                )
              )}
            </div>
          </div>
          <div className="flex-1  flex flex-col">
            <Heading size={2} className="xl:text-center mt-20">
              Fully Flexible RBAC
            </Heading>
            <Text className="xl:text-center md:w-[600px] mt-10">
              Maintain security and precise control over data access with fully
              flexible Role-Based Access Control (RBAC). Care administrators can
              define granular roles and permissions for every user type – from
              doctors and nurses to administrative staff and patients. This
              fine-grained RBAC ensures each user sees and does only what they
              are authorized to, supporting compliance with privacy regulations
              and internal policies. Managing user access is straightforward,
              allowing quick role adjustments as staff responsibilities change.
            </Text>
            <Image
              src="/illustrations/rbac.jpg"
              alt=""
              width={1000}
              height={600}
              className="h-64 aspect-video rounded-lg object-contain"
            />
          </div>
        </div>

        <Heading size={3} className="text-center mt-40 mb-10">
          Eliminating the distance between doctors and health centers
        </Heading>
        <Text className="text-center md:w-[600px]">
          With it&apos;s TeleICU features, CARE can be used to bridge the
          distance between spoke and hub hospitals, supporting real time
          monitoring accross facilities from one part of the world to another.
        </Text>
        <div className="flex items-center gap-4 flex-wrap justify-center mt-10">
          {teleICUFeatures.map((feature, i) => (
            <div key={i} className="w-full md:w-[500px] rounded-lg p-4">
              <Image
                src={feature.image}
                alt={feature.name}
                width={1000}
                height={600}
                className="w-full aspect-video bg-gray-100 rounded-lg object-cover"
              />
              <div className="text-center">
                <Heading size={1} className="mt-4 text-xl">
                  {feature.name}
                </Heading>
                <Text variant="small-subheading">{feature.desc}</Text>
              </div>
            </div>
          ))}
        </div>
        <Heading size={3} className="text-center mt-40 mb-10">
          Power packed for patient management
        </Heading>
        <div className="">
          <div className="flex flex-row flex-wrap justify-center gap-2 md:gap-6 mt-10">
            {patientFeatures.map((feature, i) => (
              <div
                className="md:bg-gray-50 flex items-center md:justify-center flex-col text-center md:border border-gray-300 rounded-xl w-[170px] md:w-[250px] p-4 md:aspect-square gap-2 hover:border-slate-400 transition-all hover:scale-105"
                key={i}
              >
                <Image
                  alt={feature.icon}
                  width={70}
                  height={70}
                  src={"/icons/" + feature.icon + ".svg"}
                  className={`brightness-0`}
                />
                <Heading size={1} className="text-2xl">
                  {feature.title}
                </Heading>
                <Text className="md:block" variant="small-subheading">
                  {feature.desc}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col relative p-6 md:p-20">
        <div className="flex items-center justify-between">
          <div className="md:w-[700px]">
            <Heading size={3} className="mt-20 mb-6 ">
              Built to be plugged into
            </Heading>
            <Text className="mb-20 text-xl" variant="subheading">
              Care is built to support first and third party integrations
            </Text>
          </div>
          <div className="hidden md:block">
            <Image
              src="/icons/plug.svg"
              height={150}
              width={150}
              alt="plug"
              className="-rotate-45 brightness-0"
            />
          </div>
        </div>
        <div className="flex justify-center w-full gap-6 text-white flex-col md:flex-row">
          {careApps.map((app, i) => (
            <Link
              href={app.link}
              target="_blank"
              key={i}
              className={`w-full flex flex-col p-10 rounded-lg bg-gradient-to-tr ${app.className} hover:scale-105 transition-all`}
            >
              {app.display}
              <Heading size={1} className="font-black mt-5">
                {app.name}
              </Heading>
              <Text className="mt-2">{app.desc}</Text>
            </Link>
          ))}
        </div>
        <Heading size={3} className="mt-40 mb-6 text-center">
          Built with ❤️ for Open Source
        </Heading>
        <div className="flex items-center justify-center flex-col md:flex-row gap-4 mt-6">
          <Link
            href="https://github.com/ohcnetwork/care_fe"
            className=" opacity-80 bg-black text-white px-6 py-4 rounded-full font-semibold hover:opacity-100 transition-all flex items-center"
            target="_blank"
          >
            <Image
              alt="Github"
              src={`/logos/github-mark-white.svg`}
              width={50}
              height={50}
              className={`md:w-[25px] transition-all mr-2`}
            />
            Star CARE on GitHub
          </Link>
          <Link
            href={"https://care.ohc.network"}
            className="text-black font-semibold flex opacity-80 hover:opacity-100 transition-all"
          >
            View Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
