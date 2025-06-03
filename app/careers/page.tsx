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
    title: "Product Documentation Intern",
    description:
      "Create clear and comprehensive documentation for our healthcare products and APIs.",
    requirements: [
      "Exceptional written communication skills with a focus on clarity and simplicity",
      "Strong attention to detail, organizational skills, and a proactive attitude toward problem-solving",
      "Ability to work collaboratively in a remote team environment and adapt to feedback",
      "Comfortable using documentation tools like Markdown, Google Docs, Notion etc.",
    ],
    applyUrl:
      "https://ohcnetwork.notion.site/Product-Documentation-Intern-JD-e3824efd379048adad7ebdf375677472",
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
    title: "Data Analytics Intern",
    description:
      "Join our data team to analyze healthcare data, create insightful dashboards, and help drive data-driven decisions in healthcare technology.",
    requirements: [
      "Comfortable working with large datasets and translating them into actionable insights",
      "Familiarity with dashboard tools such as Metabase and SQL",
      "Working knowledge of spreadsheets, formulas, and basic SQL queries",
      "Strong analytical mindset with the ability to ask the right questions",
      "Excellent communication skills to explain findings to both technical and non-technical audiences",
      "Self-motivated with the ability to take ownership of projects",
      "A passion for healthcare and technology",
    ],
    applyUrl:
      "https://ohcnetwork.notion.site/Data-Analytics-Intern-Job-Description-206e6e667ece80f6b104f1c176eaf195",
  },
  {
    title: "Content Creator Intern",
    description:
      "Create engaging content for healthcare professionals, including blog posts, social media content, and educational materials.",
    requirements: [
      "Strong writing skills with the ability to explain complex ideas clearly and creatively",
      "Experience with visual design tools like Canva, Figma, or Illustrator",
      "Familiarity with video scripting, basic editing, or animation tools is a plus",
      "Curious mindset with strong observational skills and attention to detail",
      "Self-motivated with the ability to work independently in a remote environment",
      "Passion for healthcare and technology",
      "Excellent communication and collaboration skills",
    ],
    applyUrl:
      "https://ohcnetwork.notion.site/Content-Creator-Intern-Job-Description-206e6e667ece80f088aceec619f935cf",
  },
  {
    title: "Medical Intern",
    description:
      "Bridge healthcare and technology by translating clinical workflows into digital solutions to improve patient care.",
    requirements: [
      "Medical/Healthcare background with experience or coursework in medicine, biomedical engineering, or health informatics",
      "Strong attention to detail with ability to translate clinical workflows into structured digital processes",
      "Problem-solving mindset with passion for optimizing hospital management and patient care through technology",
      "Analytical thinking skills to interpret medical data and create meaningful insights for digital healthcare applications",
      "Eagerness to explore the intersection of healthcare and technology",
      "Excellent communication and collaboration skills",
    ],
    applyUrl:
      "https://ohcnetwork.notion.site/Medical-Interns-Job-Description-1b4e6e667ece80209a88dddb39a1096f",
  },
  {
    title: "Social Media Intern",
    description:
      "Create engaging social media content to connect healthcare professionals with innovative technology solutions.",
    requirements: [
      "Strong written communication skills with the ability to connect with diverse audiences",
      "Experience with visual design tools like Canva, Figma, or Photoshop",
      "Familiarity with social media platforms (LinkedIn, Twitter, Instagram) and analytics tools",
      "Curious mindset with eagerness to explore new content formats and trends",
      "Self-motivated with ability to work independently in a remote environment",
      "Passion for healthcare and technology",
      "Excellent collaboration and time management skills",
    ],
    applyUrl:
      "https://ohcnetwork.notion.site/Social-Media-Intern-Job-Description-206e6e667ece80769693dc7a9455d5ae",
  },
  {
    title: "DevOps Intern",
    description:
      "Help build and maintain cloud infrastructure, automate deployments, and ensure smooth operation of healthcare applications.",
    requirements: [
      "Basic understanding of cloud platforms (AWS, Azure, or GCP)",
      "Familiarity with containerization technologies (Docker, Kubernetes)",
      "Knowledge of CI/CD pipelines and automation tools",
      "Understanding of Linux/Unix systems and command line",
      "Basic scripting skills (Python, Bash, or similar)",
      "Strong problem-solving abilities and attention to detail",
      "Eagerness to learn new technologies and best practices",
      "Excellent communication and collaboration skills",
      "Passion for healthcare and technology",
    ],
    applyUrl:
      "https://ohcnetwork.notion.site/DevOps-Intern-Job-Description-3269c44838a74dc0a22433d2e1e60981",
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
