"use client";
import { Heading, Text } from "@/components/Text";
import Link from "next/link";
import { useState } from "react";

const internships = [
  {
    title: "QA Intern",
    description:
      "Help ensure quality and reliability of our healthcare applications through comprehensive testing and collaboration.",
    requirements: [
      "Design, execute, and maintain manual test cases with comprehensive documentation",
      "Familiarize yourself with the existing Cypress framework built with React and TypeScript",
      "Identify, document, and track bugs, ensuring prompt resolution and maintaining high-quality standards",
      "Collaborate with cross-functional teams to support and streamline testing efforts",
      "Demonstrate the ability to commit to weekly testing tasks, take ownership, and meet deadlines consistently",
      "Knowledge of Python and Django is a plus but not mandatory",
      "Possess a basic understanding of GitHub workflows (e.g., creating pull requests)",
      "Experience using IDEs like VS Code to navigate coding environments",
      "Prior experience in QA or testing is an advantage but not required",
    ],
    applyUrl:
      "https://ohcnetwork.notion.site/Quality-Assurance-Intern-Job-Description-f675d2d800c840599be27c3712229b22",
  },
  {
    title: "DevOps Intern",
    description:
      "Support our infrastructure and deployment processes using modern DevOps practices and cloud technologies.",
    requirements: [
      "Linux systems proficiency and basic shell scripting",
      "Familiarity with Git and version control systems",
      "Understanding of networking basics (DNS, HTTP, load balancing)",
      "Hands-on experience with cloud platforms (AWS, DigitalOcean, GCP)",
      "Familiarity with containerization (Docker) and orchestration tools (Kubernetes/ECS)",
      "Exposure to Infrastructure as Code (IaC) tools (Terraform, Ansible, CloudFormation)",
      "Experience with CI/CD tools (GitHub Actions, Jenkins, GitLab CI)",
      "Proactive and solution-oriented mindset",
      "Strong communication and documentation skills",
      "Passion for collaborative development and open-source initiatives",
      "Strong attention to details",
      "Quick learners with the ability to adapt to new tools and workflows",
      "Team players with excellent communication and collaboration skills",
      "Proactive and independent contributors who take ownership of tasks",
    ],
    applyUrl:
      "https://ohcnetwork.notion.site/DevOps-Intern-Job-Description-3269c44838a74dc0a22433d2e1e60981",
  },
  {
    title: "Product Management Intern",
    description:
      "Shape product requirements and drive decisions while working closely with development teams and stakeholders.",
    requirements: [
      "Proactive and resourceful with a passion for healthcare and technology",
      "Strong communication skills, especially in written and verbal English",
      "Ability to conduct research and analyze data effectively",
      "Familiarity with project management tools like Trello, JIRA, or Notion (preferred)",
      "Interest in open-source projects and community-driven solutions",
      "Quick learner eager to take ownership of tasks",
      "Familiarity with Github will be an added advantage",
      "Strong attention to detail and organizational skills",
      "Ability to work collaboratively in a remote team environment",
    ],
    applyUrl:
      "https://ohcnetwork.notion.site/Product-Management-Intern-JD-99dfc807b2854f11b4ee5b69567da796",
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
    title: "Junior Full Stack Development Intern",
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
                  className="px-4 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
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
