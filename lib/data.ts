import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import ekosTerminal from "@/public/ekos-terminal.png";
import flyerDesign from "@/public/Poster Infaq Masjid As-Sakinah-100.jpg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Vocational High School",
    location: "Indramayu, Indonesia",
    description:
      "Graduated from Computer & Network Engineering major while got an internship at the second year of my school.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "Graphics Designer Intern",
    location: "Cirebon, Indonesia",
    description:
      "Internship program in a private company, worked on poster design & motion graphics contents for Instagram Reels.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Software Engineering Student",
    location: "Bandung, Indonesia",
    description:
      "Currently, I'm a undergraduate student majoring in bachelor degree of Software Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "eKOS",
    description:
      "Digital boarding house management app with information-sharing, payment, and chatroom as the main features. Made by Fadhel Raihan, Fauziah Zahra, Aiman Zikri, and Me.",
    tags: ["Python"],
    imageUrl: ekosTerminal,
  },
  {
    title: "Flyer Design",
    description: "Flyer designs for all purpose from charity to social media posts",
    tags: ["illustrator"],
    imageUrl: flyerDesign, 
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Python",
  "After Effects",
  "Illustrator",
  "Photoshop",
  "Blender"
] as const;