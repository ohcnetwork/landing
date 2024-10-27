import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "CARE - Open Healthcare Network",
};

const facilityFeatures = [
  { name: "Assets" },
  { name: "Locations" },
  { name: "Beds" },
  { name: "Resources" },
  { name: "Resource Requests" },
  { name: "Capacity Monitoring" },
  { name: "Notice Board" },
  { name: "Notifications" },
];

const patientFeatures: { title: string; desc: string; icon: string }[] = [
  {
    title: "Consultations",
    desc: "Managing and documenting patient consultations.",
    icon: "hospital-user",
  },
  {
    title: "Rounds",
    desc: "Features to support medical rounds and their documentation.",
    icon: "user-nurse-hair-long",
  },
  {
    title: "Investigations",
    desc: "Management of patient investigations and tests.",
    icon: "stethoscope",
  },
  {
    title: "ABG",
    desc: "Arterial Blood Gas (ABG) test management.",
    icon: "syringe",
  },
  {
    title: "Files and Documents",
    desc: "Document management, including patient records and files.",
    icon: "folder-medical",
  },
  {
    title: "Discharge Summary",
    desc: "Generation and management of discharge summaries.",
    icon: "clipboard-medical",
  },
  {
    title: "Patient Shifting",
    desc: "Management of patient transfers between departments or facilities.",
    icon: "truck-medical",
  },
  {
    title: "Sample Tests",
    desc: "Handling and documentation of various sample tests.",
    icon: "vial-virus",
  },
  {
    title: "ICD11 Diagnosis",
    desc: "Support for ICD11 diagnosis coding and documentation.",
    icon: "user-doctor-message",
  },
];

const careApps = [
  {
    name: "Care Scribe",
    desc: "Scribe desc",
    display: <></>,
  },
  {
    name: "HCX",
  },
  {
    name: "ABDM",
  },
];

function FeatureTile(props: {
  toLeft?: boolean;
  image: string;
  title: React.ReactNode;
  content: React.ReactNode;
}) {
  const { toLeft = false, image, title, content } = props;

  return (
    <div
      className={`flex ${
        toLeft ? "flex-row-reverse" : "flex-row"
      } items-center gap-10`}
    >
      <Image
        alt="Facility Management"
        src={image}
        className="shadow-xl rounded-2xl"
        width={600}
        height={415}
      />
      <div className="w-[400px]">
        <h3 className="text-3xl font-black">{title}</h3>
        <p className="text-slate-700 mt-4">{content}</p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="">
      <div className="relative">
        <video
          src="/backgrounds/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute -z-20 inset-0 h-screen w-screen object-cover"
        />
        <div className="absolute inset-x-0 top-0 h-screen -z-10 bg-black/20" />
        <div className="pt-[20vh]">
          <div className="text-center flex flex-col items-center">
            <div className="text-8xl font-black text-white/90">
              <Image
                src="https://raw.githubusercontent.com/ohcnetwork/branding/refs/heads/main/Care/SVG/Logo/Care-Logo_gradient_mark_with_white_wordmark.svg"
                alt="Care Logo"
                height={500}
                width={500}
                className="w-[400px] object-cover"
              />
            </div>
            <div className="text-white/80 text-2xl w-3/4 mt-4">
              War ready HMIS software, empowering thousands of ICU beds across
              India.
              <br /> All built on open source.
            </div>
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
              src={"/features/care-desktop.png"}
              alt=""
              width={5000}
              height={5000}
              className="w-[80vw] mt-14 block"
            />
          </div>
        </div>
      </div>
      <div className="bg-white text-black flex flex-col items-center justify-center p-20">
        <h1 className="font-black text-4xl">
          Everything a Healthcare Facility needs, in one place.
        </h1>
        <div className="flex flex-col gap-20 mt-20">
          <FeatureTile
            image="/features/care-facility-overview.png"
            title="Real-time facility wide summarization, statistics, capacity monitoring and reporting to prevent any choke points"
            content="Glance over important statistics like bed availability, asset locations, active patients, staff capacity with the facility dashboard."
          />
          <FeatureTile
            toLeft
            image="/features/care-asset-management.png"
            title="Manage assets and track their availability"
            content="CARE can store and maintain records of assets such as 5-para monitors, beds, and other medical equipment at any given time. No need to maintain paper trails for assets anymore."
          />
          <FeatureTile
            image="/features/care-location-management.png"
            title="See live information on ICUs, Wards, and other in-facility locations"
            content="Manage beds, middleware uptime, and monitor camera feeds"
          />
        </div>
        <h1 className="font-black text-4xl mt-40 mb-10">
          Power packed for patient management
        </h1>
        <div className="">
          <div className="grid grid-cols-3 gap-10 mt-10">
            {patientFeatures.map((feature, i) => (
              <div
                className="bg-white flex items-center justify-center flex-col text-center border border-slate-300 rounded-xl w-[300px] p-6 aspect-square gap-2 hover:border-slate-400 transition-all hover:scale-105"
                key={i}
              >
                <i className={`fal fa-${feature.icon} text-6xl`} />
                <h2 className="text-2xl font-bold mt-4">{feature.title}</h2>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-green-500 flex items-center justify-center flex-col">
        <h1 className="font-black text-4xl mt-20 mb-2">
          Built to be plugged onto
        </h1>
        <p className="mb-10">
          Care is built to support first and third party integrations
        </p>
        <div className="flex justify-center w-full">
          {careApps.map((app, i) => (
            <div
              key={i}
              className="w-full flex flex-col items-center justify-end"
            >
              <h2 className="text-4xl font-black">{app.name}</h2>
              <p className="">{app.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
