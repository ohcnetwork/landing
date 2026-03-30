import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PressMentionCard } from "@/components/ui/press-mention-card";
import { pressMentions } from "@/data/press-mentions";

export const metadata = {
  title: "Press & Media | Open Healthcare Network",
  description:
    "Read the latest press coverage and media mentions about Open Healthcare Network.",
};

export default function PressMediaPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Press & Media
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Open Healthcare Network in the news
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Explore coverage, interviews, and announcements featuring Open
              Healthcare Network and the impact of open-source digital public
              goods in healthcare.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="mailto:community@ohc.network">Contact us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about-us">About OHC</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pressMentions.map((mention) => (
            <PressMentionCard key={mention.title} mention={mention} />
          ))}
        </div>
      </section>
    </main>
  );
}
