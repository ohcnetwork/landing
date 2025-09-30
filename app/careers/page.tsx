"use client";
import { Heading, Text } from "@/components/Text";
import Link from "next/link";
import { useState } from "react";

const internships = [
  {
    title: "QA Intern",
    description:
      "We are looking for proactive and resourceful individuals with a passion for healthcare and technology to join our QA team.",
    requirements: [
      "Proactive and resourceful individuals with a passion for healthcare and technology",
      "A passion for software quality and testing",
      "Strong attention to detail and analytical skills",
      "The ability to learn and adapt to new tools, technologies, and workflows",
      "Excellent communication and teamwork skills",
      "A proactive mindset with the ability to take ownership of tasks and meet deadlines",
      "Enthusiasm for working in a collaborative and dynamic environment",
      "Prior experience in quality assurance or software testing is a plus but not mandatory",
    ],
    applyUrl:
      "https://ohcnetwork.notion.site/Quality-Assurance-Intern-Job-Description-f675d2d800c840599be27c3712229b22",
  },
  {
    title: "Junior Full Stack Developer Intern",
    description:
      "Develop healthcare solutions using modern web technologies while learning from experienced developers.",
    requirements: [
      "Basic knowledge of Python and Django for backend development",
      "Familiarity with React and TypeScript for frontend work",
      "Eagerness to learn and contribute to open-source projects",
      "A passion for healthcare and technology",
    ],
    applyUrl:
      "https://ohcnetwork.notion.site/Junior-Full-Stack-Developer-Intern-Job-Description-d3db6919fe4e45ac955b26bf0d92d8b4",
  },
  {
    title: "Software Engineer – DevOps (Care HMIS Implementation)",
    description:
      "Join our DevOps team to implement and maintain infrastructure for healthcare management systems, ensuring reliable and scalable deployment of our Care platform.",
    requirements: [
      "Bachelor's degree in Computer Science, Engineering, or a related field",
      "2+ years of experience in DevOps, infrastructure, or systems engineering",
      "Experience with cloud platforms (AWS, GCP, or similar)",
      "Familiarity with Docker, Linux administration, and CI/CD workflows",
      "Working knowledge of Git, scripting (Bash, Python), and PostgreSQL basics",
      "Understanding of basic security and networking concepts",
    ],
    applyUrl:
      "https://ohcnetwork.notion.site/Software-Engineer-DevOps-Care-HMIS-Implementation-25ae6e667ece80e7ba94e4b1ff03c5ca",
  },
  {
    title: "Product Manager (Care HMIS Implementation)",
    description:
      "Lead the implementation and product development of Care HMIS, working closely with healthcare institutions and open-source contributors to deliver impactful healthcare solutions.",
    requirements: [
      "Bachelor's degree in Health Informatics, Engineering, Public Health, or a related field",
      "3–5 years of experience in product or implementation roles",
      "Hands-on experience with GitHub for project management and open-source collaboration",
      "Familiarity with FHIR and clinical data standards",
      "Excellent coordination, writing, and communication skills",
    ],
    applyUrl:
      "https://ohcnetwork.notion.site/Product-Manager-Care-HMIS-Implementation-27de6e667ece8005a16bcbde7e3bacd9",
  },
];

export default function Page() {
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);

  return (
    <div>
      <div
        className="flex items-center justify-center px-10 py-20 md:px-20 md:py-40"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/war_room.jpg')",
          backgroundPosition: "center",
          backgroundSize: "90%",
        }}
      >
        <Heading size={3} className="text-white/90">
          Careers
        </Heading>
      </div>

      <div className="text-center my-10 md:my-20">
        <Heading size={2} className="font-black">
          Current Openings
        </Heading>
        <Text className="max-w-[700px] mt-5 mx-auto px-4">
          Join our team and help build the future of healthcare technology. We
          are looking for passionate individuals who want to make a difference
          in the healthcare industry.
        </Text>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-12">
        <div className="space-y-2">
          {internships.map((position, i) => (
            <div key={i} className="border rounded-lg">
              <button
                onClick={() =>
                  setSelectedPosition(selectedPosition === i ? null : i)
                }
                className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
              >
                <span className="font-medium">{position.title}</span>
                <Link
                  href={position.applyUrl}
                  className="px-4 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                >
                  Apply
                </Link>
              </button>

              {selectedPosition === i && (
                <div className="p-4 pt-0">
                  <Text className="text-gray-600 mb-4">
                    {position.description}
                  </Text>
                  <Text className="font-medium mb-2">Requirements:</Text>
                  <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                    {position.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
