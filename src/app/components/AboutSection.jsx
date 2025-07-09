"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <p className="font-semibold mt-2">Programming Languages</p>
        <li>Python</li>
        <li>JavaScript</li>
        <li>HTML & CSS</li>  
        <li>Java</li>
        <li>C</li>

        <p className="font-semibold mt-2">Frameworks & Libraries</p>
        <li>React</li>
        <li>Next.js</li>
        <li>JavaFX</li>
        <li>Swing</li>
        <li>Laravel (Back-End)</li>
        <li>Pandas, NumPy, Scikit-learn (Data Science)</li>

        <p className="font-semibold mt-2">Databases & Tools</p>
        <li>MySQL</li>
        <li>JDBC</li>
        <li>Git</li>
        <li>Gradle</li>
        <li>IntelliJ IDEA</li>
        <li>Visual Studio Code</li>

        <p className="font-semibold mt-2">Cloud Platforms</p>
        <li>Microsoft Azure (e.g., hosting databases)</li>
        <li>AWS (concepts/interest)</li>

        <p className="font-semibold mt-2">Data & Analytics Skills</p>
        <li>Data Science</li>
        <li>Data Analysis</li>
        <li>Statistical Analysis</li>
        <li>Problem-Solving</li>
        <li>Critical Thinking</li>

        <p className="font-semibold mt-2">Project Management</p>
        <li>Project Planning</li>
        <li>Coordination</li>
        <li>Risk Management</li>
        <li>Stakeholder Management</li>
        <li>Agile Methodologies</li>

        <p className="font-semibold mt-2">Soft Skills</p>
        <li>Leadership</li>
        <li>Communication (Public Speaking, Presentation, Negotiation)</li>
        <li>Teamwork</li>
        <li>Adaptability</li>
        <li>Empathy</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Institut Teknologi Bandung (ITB) - Sistem dan Teknologi Informasi</li>
        <li>MAN Insan Cendekia Serpong</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>DQ Lab - Data Science</li>
        <li>RevoU - Software Engineering</li>
        <li>MySkill - Data Analysis</li>
        <li>MySkill - Digital Marketing</li>
        <li>MySkill - Software Engineering</li>
        <li>MySkill - Product Management</li>
        <li>MySkill - Finance</li>
        <li>Dicoding & AWS - Backend</li>
      </ul>
    ),
  },
  {
    title: "Leadership & Experience",
    id: "leadership",
    content: (
      <ul className="list-disc pl-2">
        <li>**Vice Project Officer (VPO) Expo Campus TOGA:** Managed hundreds of committee members from various campuses and events attracting thousands of participants.</li>
        <li>**Wakil Ketua Pelaksana SONIC LINGUISTIC:** Managed a budget of hundreds of millions and over 4000 participants.</li>
        <li>**Ketua Divisi Sosial Masyarakat OSIS & I-CARE:** Demonstrated social initiative and humanitarian impact.</li>
        <li>Kepala Bidang Relasi PEMIRA KM ITB 2024/2025</li>
        <p className="text-[#ADB7BE] text-sm mt-2">
          These experiences have significantly enhanced my communication, negotiation, and teamwork skills, especially in leading diverse teams and problem-solving under pressure.
        </p>
      </ul>
    ),
  },
  {
    title: "Awards & Honors",
    id: "awards",
    content: (
      <ul className="list-disc pl-2">
        <li>Gold Medal – Mathematics Olympiad (PUSKANAS)</li>
        <li>Juara 3 - IPB Mathematics Challenge Essay Category</li>
        <li>Finalist - National Product Design Competition (AI Smart Kitchen)</li>
        <li>Brand Ambassador Mandiri Amal Institute</li>
        <li>Awardee Salman Catalyst Student & Brand Ambassador Salman ITB</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} unoptimized={true} alt="About Me" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            My name is Ghazy Achmed Movlech Urbayani. I am a passionate individual deeply
            interested in Public Speaking and Communication, alongside a lifelong fascination with
            computers and technology. Currently pursuing Information Systems and Technology at Institut Teknologi Bandung (STEI-K),
            I am driven to contribute to Indonesia's digital transformation in the Industry 4.0 era.
            My professional journey is evolving as a Junior Web Developer, Software Engineer, Data Scientist/Analyst, and aspiring Product Manager.
            I possess hands-on experience in full-stack web development, data analysis, and project management.
            I am a quick learner, constantly seeking to expand my knowledge and skill set, and thrive in collaborative environments to create impactful applications and solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("leadership")}
              active={tab === "leadership"}
            >
              {" "}
              Leadership & Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("awards")}
              active={tab === "awards"}
            >
              {" "}
              Awards & Honors{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
