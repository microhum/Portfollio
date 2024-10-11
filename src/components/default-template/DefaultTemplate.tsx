import { Footer } from "shared/Footer";
import { Header } from "shared/Header";
import { DefaultAboutMeSection } from "./DefaultAboutMeSection";
import { DefaultContactSection } from "./DefaultContactSection";
import { DefaultProjectsSection } from "./DefaultProjectsSection";
import { DefaultSkillsSection } from "./DefaultSkillsSection";
import { pageStore } from "stores/pageStore";
import { motion } from "framer-motion";
import { Component, useEffect, useRef } from "react";

export const DefaultTemplate = () => {
  const { OnPage, setOnPage } = pageStore();

  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionOffsets = [
    { ref: aboutMeRef, page: "about-me", component: DefaultAboutMeSection },
    { ref: skillsRef, page: "skills", component: DefaultSkillsSection },
    { ref: projectsRef, page: "projects", component: DefaultProjectsSection }
    // { ref: contactRef, page: "contact", component: DefaultContactSection }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionOffsets.forEach((section, idx) => {
        if (section.ref.current) {
          const sectionTop = section.ref.current?.offsetTop;
          const sectionHeight = section.ref.current?.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            console.log(section.page);
            setOnPage(section.page);
          }
        }
      });
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative flex flex-col">
      <Header />
      <div className="flex flex-col max-w-[1240px] w-full mx-auto p-[30px] ">
        <div />
        {sectionOffsets.map((section) => (
          <div key={section.page} ref={section.ref}>
            <section.component />
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
};
