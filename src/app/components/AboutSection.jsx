"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap gap-2">
        {/* Programming Languages */}
        <div className="w-full text-white font-semibold mt-2 mb-1">Programming Languages</div>
        <span className="skill-bubble">Python</span>
        <span className="skill-bubble">JavaScript</span>
        <span className="skill-bubble">HTML</span>
        <span className="skill-bubble">CSS</span>
        <span className="skill-bubble">Java</span>

        {/* Frameworks & Libraries */}
        <div className="w-full text-white font-semibold mt-4 mb-1">Frameworks & Libraries</div>
        <span className="skill-bubble">React</span>
        <span className="skill-bubble">Next.js</span>
        <span className="skill-bubble">JavaFX</span>
        <span className="skill-bubble">Swing</span>
        <span className="skill-bubble">Laravel (Backend)</span>
        <span className="skill-bubble">Pandas</span>
        <span className="skill-bubble">NumPy</span>
        <span className="skill-bubble">Scikit-learn</span>

        {/* Databases & Tools */}
        <div className="w-full text-white font-semibold mt-4 mb-1">Databases & Tools</div>
        <span className="skill-bubble">MySQL</span>
        <span className="skill-bubble">JDBC</span>
        <span className="skill-bubble">Git</span>
        <span className="skill-bubble">Gradle</span>
        <span className="skill-bubble">IntelliJ IDEA</span>
        <span className="skill-bubble">VS Code</span>

        {/* Cloud Platforms */}
        <div className="w-full text-white font-semibold mt-4 mb-1">Cloud Platforms</div>
        <span className="skill-bubble">Microsoft Azure</span>
        <span className="skill-bubble">AWS (Concepts)</span>

        {/* Data & Analytics */}
        <div className="w-full text-white font-semibold mt-4 mb-1">Data & Analytics</div>
        <span className="skill-bubble">Data Science</span>
        <span className="skill-bubble">Data Analysis</span>
        <span className="skill-bubble">Statistical Analysis</span>
        <span className="skill-bubble">Problem-Solving</span>
        <span className="skill-bubble">Critical Thinking</span>

        {/* Project Management */}
        <div className="w-full text-white font-semibold mt-4 mb-1">Project Management</div>
        <span className="skill-bubble">Project Planning</span>
        <span className="skill-bubble">Coordination</span>
        <span className="skill-bubble">Risk Management</span>
        <span className="skill-bubble">Stakeholder Management</span>
        <span className="skill-bubble">Agile Methodologies</span>

        {/* Soft Skills */}
        <div className="w-full text-white font-semibold mt-4 mb-1">Soft Skills</div>
        <span className="skill-bubble">Leadership</span>
        <span className="skill-bubble">Public Speaking</span>
        <span className="skill-bubble">Presentation</span>
        <span className="skill-bubble">Negotiation</span>
        <span className="skill-bubble">Teamwork</span>
        <span className="skill-bubble">Adaptability</span>
        <span className="skill-bubble">Empathy</span>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="mb-2">Bachelor: Institut Teknologi Bandung (ITB) - jurusan Sistem dan Teknologi Informasi - Fakultas STEI K</li>
        <li className="mb-2">High-School: MAN Insan Cendekia Serpong</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li className="mb-2">- DQ Lab: Data Science</li>
        <li className="mb-2">- RevoU: Software Engineering</li>
        <p className="font-semibold mt-2 mb-1">- MySkill:</p>
        <li className="ml-4 mb-2"> - Data Analysis</li>
        <li className="ml-4 mb-2"> - Digital Marketing</li>
        <li className="ml-4 mb-2"> - Software Engineering</li>
        <li className="ml-4 mb-2"> - Product Management</li>
        <li className="ml-4 mb-2"> - Finance</li>
      </ul>
    ),
  },
    {
    title: "Leadership & Experience",
    id: "leadership",
    content: (
      <>
        <ul className="list-disc pl-2">
          <li className="mb-2">- <strong>Vice Project Officer (VPO) Expo Campus TOGA:</strong> Managed hundreds of committee members from various campuses and events attracting thousands of participants.</li>
          <li className="mb-2">- <strong>Wakil Ketua Pelaksana SONIC LINGUISTIC:</strong> Managed a budget of hundreds of millions and over 4000 participants.</li>
          <li className="mb-2">- <strong>Ketua Divisi Sosial Masyarakat OSIS & I-CARE:</strong> Demonstrated social initiative and humanitarian impact.</li>
          <li className="mb-2">- Crew PUSTENA Salman ITB</li>
        </ul>
        <p className="text-[#ADB7BE] text-sm mt-4">
          These experiences have significantly enhanced my communication, negotiation, and teamwork skills, especially in leading diverse teams and problem-solving under pressure.
        </p>
      </>
    ),
  },
  {
    title: "Awards & Honors",
    id: "awards",
    content: (
      <ul className="list-disc pl-2">
        <li className="mb-2">- Gold Medal: Mathematics Olympiad (PUSKANAS)</li>
        <li className="mb-2">- Juara 3: IPB Mathematics Challenge Essay Category</li>
        <li className="mb-2">- Finalist: National Product Design Competition (AI Smart Kitchen)</li>
        <li className="mb-2">- Brand Ambassador Mandiri Amal Institute</li>
        <li className="mb-2">- Awardee Salman Catalyst Student & Brand Ambassador Salman ITB</li>
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
            computers and technology. Currently pursuing Information Systems and Technology at Institut Teknologi Bandung (ITB) (STEI-K),
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
