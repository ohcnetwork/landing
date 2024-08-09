import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation";

export const metadata = {
    title: "CARE - Open Healthcare Network",
}

const facilityFeatures = [
    { name: "Assets" },
    { name: "Locations" },
    { name: "Beds" },
    { name: "Resources" },
    { name: "Resource Requests" },
    { name: "Capacity Monitoring" },
    { name: "Notice Board" },
    { name: "Notifications" }
]

function FeatureTile(props: { to_left?: boolean, image: string, title: React.ReactNode, content: React.ReactNode }) {
    const { to_left = false, image, title, content } = props;

    return (
        <div className={`flex ${to_left ? "flex-row-reverse" : "flex-row"} items-center gap-10`}>
            <Image
                alt="Facility Management"
                src={image}
                className="shadow-xl rounded-2xl"
                width={600}
                height={415}
            />
            <div className="w-[400px]">
                <h3 className="text-3xl font-black">
                    {title}
                </h3>
                <p className="text-slate-700 mt-4">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default function Page() {
    return notFound()
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
                            CARE
                        </div>
                        <div className="text-white/80 text-2xl w-3/4 mt-4">
                            War ready EMR software, empowering thousands of ICU beds across India.<br /> All built on open source.
                        </div>
                        <div className="flex items-center gap-4 mt-6">
                            <Link href="https://github.com/coronasafe/care_fe" className=" opacity-80 bg-white text-black px-4 py-2 rounded-full font-semibold hover:opacity-100 transition-all flex items-center" target="_blank">
                                <Image src={"/logos/github-mark.svg"} alt="GitHub" width={20} height={20} className="mr-2" />
                                Star on GitHub
                            </Link>
                            <Link href={"https://care.ohc.network"} className="text-white font-semibold flex opacity-80 hover:opacity-100 transition-all">
                                View Demo
                            </Link>
                        </div>
                        <Image src={"/features/care-desktop.png"} alt="" width={5000} height={5000} className="w-[80vw] mt-14 block" />
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
                        to_left
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
            </div>
        </div>
    )
}