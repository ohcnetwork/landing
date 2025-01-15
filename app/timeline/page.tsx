import { Heading, Text } from "@/components/Text";
import Image from "next/image";
export const metadata = {
  title: "Timeline - Open Healthcare Network",
};

export default function Page() {
  const items = [
    {
      id: 1,
      title: "2020 | Initial Development",
      Purpose:
        " The COVID-19 pandemic was an unprecedented crisis, and there were no existing tools to manage the scale and complexity of the outbreak. In response, a group of volunteers came together to develop CARE, a software solution aimed at managing patient data, coordinating pandemic response efforts, and streamlining resource allocation. CARE was designed to support healthcare workers and administrators in handling the surge in cases efficiently while ensuring transparency and accountability in healthcare delivery.",
      features: [
        "Patient Registration and Tracking",
        "Pandemic Response Coordination",
        "Basic Hospital and Bed Management",
        "Patient Shifting Across Facilities",
        "Collaboration with NHM Kerala",
        "Resource Allocation",
      ],
    },
    {
      id: 2,
      title: "2021 | Enhanced Capabilities for Oxygen Tracking",
      Purpose:
        "During the second wave of COVID-19, oxygen availability became a critical issue across India. Oxygen tracking and management features were added to CARE to effectively manage oxygen availability and distribution in Kerala. CARE powered the oxygen war room in Kerala helping district administration to effectively manage the pandemic. ",
      features: [
        "Adoption by State Health Dept across 6 States",
        "Oxygen Capacity and Utilization Tracking",
        "Real-Time Resource Monitoring Dashboards",
        "Facility-Level Allocation Management",
        "Reporting and Analytics",
      ],
    },
    {
      id: 3,
      title:
        "2021 | Recognized as the 50th Digital Public Good by the United Nations.",
      Purpose:
        "CARE was recognized as 50th Digital Public Good by United Nations considering its  transformative healthcare management system, centralizing patient and capacity management across hospitals which empower administrators and healthcare professionals with real-time data for better decision-making",
      features: [
        "CARE was recognized as 50th Digital Public Good by United Nations ",
      ],
    },
    {
      id: 4,
      title: "2021 | CARE powers the 10BedICU Project",
      Purpose:
        "CARE identified as the teleICU tooling for 10BedICU Project, enabling technology-driven ICU care in rural India and providing TeleICU services to the remotest regions, impacting thousands of lives.CARE is deployed as part of the project by State health departments across government hospitals.",
      features: [
        "IoT integration with medical devices (FHIR and ONVIF based)",
        "⁠⁠ICU Rounds and Charts",
        "Clinical Scoring Systems",
      ],
    },
    {
      id: 5,
      title: "2022-2023 | Continuous Improvements and Advanced Features",
      Purpose:
        "Supported the expansion of the 10BedICU project and addressed broader healthcare needs. Over three years, the 10BedICU initiative expanded to 9 states, covering more than 200 hospitals and delivering critical care solutions to underserved regions.",
      features: [
        "Compliance with the Ayushman Bharat Digital Mission (ABDM)",
        "Remote ICU Monitoring Capabilities",
        "Integration with ICU Systems",
        "Remote Doctor Connect",
        "TeleICU Scalability",
        "Secure Data Handling",
        "Reports and Dashboards",
      ],
    },
    {
      id: 6,
      title: "2024 | Transition to HMIS and tooling for Palliative Care Grid",
      Purpose:
        "CARE is evolving into a comprehensive Hospital Management Information System (HMIS) to address the growing needs of healthcare institutions. Originally developed as a pandemic management and TeleICU tool, CARE is now expanding to deliver holistic solutions for hospital operations, patient workflows, and administrative management. This transformation empowers healthcare providers to optimize operations, enhance resource efficiency, and improve patient care. Building on its roots as a pandemic management and TeleICU platform, CARE is also being enhanced with a Palliative Care Grid to offer home-based care for elderly citizens. This innovative feature facilitates coordinated care delivery at home, catering to the unique requirements of the aging population. The first implementation is underway in Kerala, in partnership with the National Health Mission (NHM) and private NGOs, representing a significant leap in community healthcare development.",
      features: [
        "Integration with the Health Care Exchange (HCX)",
        "End-to-End Patient Management Workflows",
        "Inventory and Asset Management",
        "Comprehensive Facility Management",
        "Modular and Scalable Architecture",
        "Home-Based Care Coordination",
        "Caregiver and Patient Management",
        "Collaboration with NHM and NGOs",
        "Resource Allocation for Community Care",
        "Telemedicine Support",
      ],
    },
  ];

  function FeatureTile(props: {
    toLeft?: boolean;
    features: string[];
    title: React.ReactNode;
    content: React.ReactNode;
    id: string;
  }) {
    const { toLeft = false, features, title, content, id } = props;
    const titleStr = typeof title === "string" ? title : String(title);
    const [year, ...descriptionParts] = titleStr.split(" | ");
    const description = descriptionParts.join(" | ");

    return (
      <div id={id} className="scroll-mt-20 relative">
        {/* Pitstop Circle */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0d9f6e] z-10 hidden sm:block"
          style={{ top: "10%" }}
        />

        <div
          className={`flex sm:gap-20 ${
            toLeft ? "sm:flex-row-reverse" : "sm:flex-row"
          } items-center  sm:text-wrap  flex-col gap-20`}
        >
          {/* Description Section */}
          <div
            className="
              text-wrap  
              md:w-[300px]
              lg:text-lg lg:w-[400px] 
              sm:text-xs sm:w-[200px]"
          >
            <Heading className="font-semibold text-[#0d9f6e]" size={2}>
              {year}
            </Heading>
            <Heading size={1} className="sm:text-xs lg:text-3xl">
              {description}
            </Heading>
            <Text className="mt-4">{content}</Text>
          </div>

          {/* Highlights Section */}
          <div className="sm:w-[200px] lg:w-[400px] md:w-[300px]">
            <Heading className="font-thin" size={1}>
              Highlights
            </Heading>
            <ul>
              {features.map((feature, index) => (
                <li key={index} className="flex items-center mt-4">
                  <Image
                    alt="checkmark.svg"
                    width={30}
                    height={30}
                    src={`/icons/checkmark.svg`}
                    className="brightness-1"
                  />
                  <Text className="px-2">{feature}</Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Background Section */}
      <div
        className="flex items-center justify-center px-10 py-20 sm:px-20 sm:py-40"
        style={{
          background: "url('/backgrounds/green-square-vector.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Heading size={2} className="sm: text-white/90">
          Timeline of Development
        </Heading>
      </div>
      {/* Main Content */}
      <div
        className=" relative
              flex flex-col-reverse justify-center 
              ml-5 mr-5 mt-20 
              sm:text-wrap sm:text-xs 
              lg:text-lg  
              "
      >
        <div className="absolute h-full w-0.5 bg-[#0d9f6e] left-1/2 transform -translate-x-1/2 z-0 hidden sm:block" />
        <div className="flex flex-col items-center gap-20  ">
          {items.map((item, index) => (
            <FeatureTile
              key={item.id}
              id={`year${index}`}
              toLeft={index % 2 !== 0}
              features={item.features}
              title={item.title}
              content={item.Purpose}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
