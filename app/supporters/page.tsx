import Image from "next/image";

export const metadata = {
  title: "Supporters - Open Healthcare Network",
};

export default function Page() {
  const technologyLogos: { name: string; image: string }[] = [
    { name: "Github", image: "github.png" },
    { name: "Cloudflare", image: "cloudflare.svg" },
    { name: "OpenAI", image: "openai.svg" },
    { name: "Vercel", image: "vercel.svg" },
    { name: "Slack", image: "slack.svg" },
    { name: "Amazon Web Services", image: "aws.svg" },
    { name: "Digital Ocean", image: "digitalocean.svg" },
    { name: "One Password", image: "onepassword.svg" },
    { name: "Sentry", image: "sentry.svg" },
    { name: "GitBook", image: "gitbook.png" },
    { name: "Atlassian", image: "atlassian.svg" },
    { name: "CircleCI", image: "circleci.svg" },
    { name: "Exotel", image: "exotel.svg" },
    { name: "GitKraken", image: "gitkraken.png" },
    { name: "Heroku", image: "heroku.svg" },
    { name: "Jet Brains", image: "jetbrains.svg" },
    { name: "EUNOIANS", image: "eunoians.png" },
    { name: "MapBox", image: "mapbox.svg" },
    { name: "Netlify", image: "netlify.svg" },
    { name: "New Relic", image: "newrelic.svg" },
    { name: "Riafy", image: "riafy.png" },
    { name: "Wowmakers", image: "wowmakers.jpeg" },
  ];

  const sections = [
    {
      name: "Technology",
      description:
        "A diverse group of technology partners have contributed software technologies and tools that volunteers utilize to build, upgrade, and maintain Open Healthcare Network Products.",
      logos: technologyLogos,
    },
  ];

  return (
    <div>
      <div
        className="flex items-center justify-center px-10 py-20 md:px-20 md:py-40"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/backgrounds/ohcnetwork-people.jpeg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="text-4xl md:text-8xl font-black text-white/90">
          Supporters
        </div>
      </div>
      <div className="px-4 md:px-20">
        {sections.map((section, i) => (
          <div
            key={i}
            className="text-center my-10 md:my-20 flex flex-col items-center"
          >
            <h3 className="text-2xl md:text-4xl font-black">{section.name}</h3>
            <p className="text-gray-700 max-w-[700px] mt-5">
              {section.description}
            </p>
            <div className="flex items-center justify-center gap-x-10 gap-y-6 flex-wrap mt-10">
              {technologyLogos.map((logo, i) => (
                <div
                  key={i}
                  className="w-[125px] h-[45px] md:w-[200px] md:h-[75px] transition-all"
                >
                  <Image
                    src={"/logos/technology/" + logo.image}
                    alt="Logo"
                    width={200}
                    height={200}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
