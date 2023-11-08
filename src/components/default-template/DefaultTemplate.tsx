import { Footer } from "shared/Footer";
import { Header } from "shared/Header";
import { DefaultAboutMeSection } from "./DefaultAboutMeSection";
import { DefaultContactSection } from "./DefaultContactSection";
import { DefaultProjectsSection } from "./DefaultProjectsSection";
import { DefaultSkillsSection } from "./DefaultSkillsSection";

export const DefaultTemplate = () => {
  return (
    <main className="relative flex flex-col">
      <Header />
      <div className="flex flex-col max-w-[1240px] w-full mx-auto p-[30px] ">
        <div />
        <DefaultAboutMeSection />
        <DefaultSkillsSection />
        <DefaultProjectsSection />
        <DefaultContactSection />
      </div>
      <Footer />
    </main>
  );
};
