"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Exhibitly: Integrated Museum Management System",
    description: "Full-stack development (Java, JavaFX, MySQL on Azure) for a comprehensive museum management system. Implemented MVC architecture, secure authentication, CRUD operations, and role-based access control to digitalize museum operations and enhance visitor experience.",
    image: "/images/projects/exhibitly.png",
    tag: ["All", "Web", "Desktop System"],
    gitUrl: "https://github.com/GhazyUrbayani/IF2050-2025-K2E-Exhibitly",
    previewUrl: "#", // Replace with actual preview URL if available
  },
  {
    id: 2,
    title: "Steddy Valley: Farming-Life Simulation RPG",
    description: "Developed game mechanics, state management, and complex NPC social interaction systems using Java/Swing. Focused on creating an engaging farming and life simulation experience within the game.",
    image: "/images/projects/steddy-valley.png",
    tag: ["All", "Terminal System", "Desktop System"],
    gitUrl: "https://github.com/10xengineeroop/steddyvalley/",
    previewUrl: "#", // Replace with actual preview URL if available
  },
  {
    id: 3,
    title: "FocusTrack: Smart Pomodoro Alarm (IoT & Platform Design)",
    description: "Designed both hardware (ESP32) and software platform for an IoT-based smart Pomodoro alarm system. Explored AI integration for personalized productivity insights.",
    image: "/images/projects/focustrack.png",
    tag: ["All", "IoT"],
    gitUrl: "/",
    previewUrl: "#", // Replace with actual preview URL if available
  },
  {
    id: 4,
    title: "Garuda Project: Business Process Re-engineering & Strategic Analysis",
    description: "Conducted in-depth business process analysis to identify inefficiencies and formulated strategic recommendations for process re-engineering to optimize organizational workflows and outcomes.",
    image: "/images/projects/garuda-project.png",
    tag: ["All", "Analysis"],
    gitUrl: "https://docs.google.com/presentation/d/156XAcHTKCcu9DqnQJrhhbsqw47z05kWls4Ixo8grLl8/edit?usp=sharing", //non-git
    previewUrl: "#", // Replace with actual preview URL if available
  },
  {
    id: 5,
    title: "Integrasi E-Learning dan AI dengan Self Management Siswa SMA",
    description: "Led a team focusing on integrating AI into an e-learning platform to enhance self-management skills for high school students. Explored concepts of personalized learning paths and adaptive content delivery.",
    image: "/images/projects/e-learning&ai.png",
    tag: ["All", "Web", "AI/ML"],
    gitUrl: "/",
    previewUrl: "#", // Replace with actual preview URL if available
  },
  {
    id: 6,
    title: "Food Delivery Order Application",
    description: "Simple Python - Tugas Besar KU1102 Pengenalan Komputasi",
    image: "/images/projects/4.png",
    tag: ["All", "Terminal System"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Data Analysis",
    description: "Simple Python - Tugas Besar KU1102 Pengenalan Komputasi",
    image: "/images/projects/2.png",
    tag: ["All", "Terminal System"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Monster Battle Games app",
    description: "Python - Tugas Besar IF1210 Dasar Pemrograman",
    image: "/images/projects/3.png",
    tag: ["All", "Terminal System"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 flex-wrap">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Terminal System"
          isSelected={tag === "Terminal System"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Desktop System"
          isSelected={tag === "Desktop System"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="IoT"
          isSelected={tag === "IoT"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Analysis"
          isSelected={tag === "Analysis"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI/ML"
          isSelected={tag === "AI/ML"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
