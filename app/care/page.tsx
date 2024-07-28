import Image from "next/image"
import Link from "next/link"

export const metadata = {
    title: "CARE - Open Healthcare Network",
}
export default function Page() {
    return (
        <>
            <div className="relative h-screen">
                <video
                    src="/backgrounds/bg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-screen w-screen object-cover"
                />
                <div className="absolute inset-0 z-10 bg-black/20">
                    <div className="text-center translate-y-[20vh] flex flex-col items-center">
                        <div className="text-8xl font-black text-white/90">
                            CARE
                        </div>
                        <div className="text-white/80 text-2xl w-3/4 mt-4">
                            War ready EMR software, empowering thousands of ICU beds across India.<br /> All built on open source.
                        </div>
                        <Link href="https://github.com/coronasafe/care_fe" className="mt-6 opacity-80 bg-white text-black px-4 py-2 rounded-full font-semibold hover:opacity-100 transition-all flex items-center" target="_blank">
                            <Image src={"/logos/github-mark.svg"} alt="GitHub" width={20} height={20} className="mr-2" />
                            Star on GitHub
                        </Link>
                        <Image src={"/features/care-desktop.png"} alt="" width={5000} height={5000} className="w-[80vw] mt-14" />
                    </div>
                </div>
            </div>
            <div className="h-screen bg-white">

            </div>
        </>
    )
}