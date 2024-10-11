import { Link } from "react-router-dom";
import FireEffect from "assets/effect/loop-of-smoke-fire-sparks-rising-up-particle-free-video (1).jpg?url";
import { skills } from "constants/skills";
import { Section } from "shared/Section";

export const DefaultSkillsSection = () => {
  return (
    <div>
      <img
        className="mask_gradient left-0 mix-blend-screen absolute saturate-150 w-screen h-[40%] animate-pulse"
        src={FireEffect}
        alt=""
      />
      <Section id="skills" headingText="Skills">
        <div className="flex flex-col gap-[20px] w-full">
          <li>Data Science</li>
          <li>Machine/ Deep Learning</li>
          <li>Fullstack Development</li>
        </div>
      </Section>
      <Section id="stacks" headingText="Tech Stacks">
        <div className="flex flex-col gap-[40px] w-full">
          <div className="flex flex-col gap-[30px]">
            <h3 className="text-xl font-semibold">Experienced with</h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(145px,_1fr))] w-full gap-[30px] sm:grid-cols-3 lg:grid-cols-4">
              {skills.experiencedWith.map(({ src, website, text }) => (
                <div className=" flex flex-col gap-[10px]" key={`${website}-${text}`}>
                  <Link
                    className="group flex items-center gap-[8px]"
                    to={website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="block w-[22px] h=[22px] object-cover" src={src} alt={text} />
                    <span className="text-color2 group-hover:text-color1 group-focus-visible:text-color1 duration-200">
                      {text}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[30px]">
            <h3 className="text-xl font-semibold">Want to learn</h3>
            <div className="grid grid-cols-2 w-full gap-[30px] sm:grid-cols-3 lg:grid-cols-4">
              {skills.wantToLearn.map(({ src, website, text }) => (
                <Link
                  key={`learn-${website}`}
                  className="group flex items-center gap-[8px]"
                  to={website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="block w-[22px] h=[22px] object-cover" src={src} alt={text} />
                  <span className="text-color2 group-hover:text-color1 group-focus-visible:text-color1 duration-200">
                    {text}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
