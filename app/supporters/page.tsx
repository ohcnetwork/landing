import { Heading, Text } from "@/components/Text";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Supporters - Open Healthcare Network",
};

export default function Page() {
  const currentSupporters: { name: string; image: string; url: string }[] = [
    { name: "Github", image: "github.png", url: "https://github.com" },
    {
      name: "Cloudflare",
      image: "cloudflare.svg",
      url: "https://www.cloudflare.com",
    },
    { name: "OpenAI", image: "openai.svg", url: "https://www.openai.com" },
    { name: "Vercel", image: "vercel.svg", url: "https://vercel.com" },
    { name: "Slack", image: "slack.svg", url: "https://slack.com" },
    {
      name: "Digital Ocean",
      image: "digitalocean.svg",
      url: "https://www.digitalocean.com?utm_medium=opensource&utm_source=open-healthcare-network",
    },
    {
      name: "One Password",
      image: "onepassword.svg",
      url: "https://1password.com",
    },
    { name: "Sentry", image: "sentry.svg", url: "https://sentry.io" },
    { name: "Cypress", image: "cypress.svg", url: "https://cypress.io" },
    {
      name: "BrowserStack",
      image: "browserstack.png",
      url: "https://browserstack.com",
    },
    { name: "GitBook", image: "gitbook.png", url: "https://www.gitbook.com" },
    {
      name: "Atlassian",
      image: "atlassian.svg",
      url: "https://www.atlassian.com",
    },
    {
      name: "Jet Brains",
      image: "jetbrains.svg",
      url: "https://www.jetbrains.com",
    },
    { name: "Netlify", image: "netlify.svg", url: "https://www.netlify.com" },
  ];

  const pastSupporters: { name: string; image: string; url: string }[] = [
    {
      name: "Amazon Web Services",
      image: "aws.svg",
      url: "https://aws.amazon.com",
    },
    { name: "CircleCI", image: "circleci.svg", url: "https://circleci.com" },
    { name: "Exotel", image: "exotel.svg", url: "https://exotel.com" },
    {
      name: "GitKraken",
      image: "gitkraken.png",
      url: "https://www.gitkraken.com",
    },
    { name: "Heroku", image: "heroku.svg", url: "https://www.heroku.com" },
    { name: "EUNOIANS", image: "eunoians.png", url: "https://eunoians.com" },
    { name: "MapBox", image: "mapbox.svg", url: "https://www.mapbox.com" },
    { name: "New Relic", image: "newrelic.svg", url: "https://newrelic.com" },
    { name: "Riafy", image: "riafy.png", url: "https://riafy.me" },
    {
      name: "Wowmakers",
      image: "wowmakers.jpeg",
      url: "https://www.wowmakers.com",
    },
  ];

  const sections = [
    {
      name: "Current Supporters",
      description:
        "These technology partners are currently contributing software technologies and tools that volunteers utilize to build, upgrade, and maintain Open Healthcare Network Products.",
      logos: currentSupporters,
    },
    {
      name: "Past Supporters",
      description:
        "We're grateful for the support these partners have provided in the past, contributing to the growth and success of Open Healthcare Network.",
      logos: pastSupporters,
    },
  ];

  return (
    <div className="">
      <div
        className="flex items-center justify-center px-10 py-20 md:px-20 md:py-40"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/backgrounds/ohcnetwork-people.jpeg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Heading size={3} className="text-white/90">
          Supporters
        </Heading>
      </div>
      <div className="max-w-5xl mx-auto px-4">
        {sections.map((section, i) => (
          <div
            key={i}
            className="text-center my-10 md:my-20 flex flex-col items-center"
          >
            <Heading size={2} className="font-black">
              {section.name}
            </Heading>
            <Text className="max-w-[700px] mt-5">{section.description}</Text>
            <div className="flex flex-wrap gap-10 items-center justify-center mt-10">
              {section.logos.map((logo, i) => (
                <Link
                  key={i}
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <div className="h-[100px] w-[200px] transition-all hover:scale-105">
                    <Image
                      src={"/logos/technology/" + logo.image}
                      alt={logo.name}
                      width={200}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
