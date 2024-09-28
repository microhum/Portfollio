import { Link } from "react-router-dom";

import { IconButton, Typography } from "components/core";
import { GITHUB_URL } from "constants/links";
import GithubIcon from "icons/GithubIcon";
import { Section } from "shared/Section";
import Scene from "src/3D/scene";

export const DefaultAboutMeSection = () => {
  return (
    <div className="md:grid md:grid-cols-2">
      <Section id="about-me" headingText="Guntee Doungmanee">
        <div className="animate-hidden flex flex-col w-full gap-[30px] max-w-[800px]">
          <Typography tag="p" weight="semibold" className="text-primary text-xl sm:text-2xl">
            {"A Typical Com eng. Student"}
          </Typography>
          <Typography tag="p" className="text-color2 text-l sm:text-xl whitespace-pre-line">
            {
              "My journey as a programmer has started since 2021. \nI do work about data science, deep learning and fullstack development"
            }
          </Typography>
          <Typography tag="p" weight="semibold" className="pl-8 text-color1 text-l sm:text-xl">
            {"Don't watch the clock; do what it does. Keep going."}
          </Typography>
          <div className="flex gap-[12px]">
            <Link to={GITHUB_URL} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
              <IconButton title="GitHub" size="large">
                <GithubIcon />
              </IconButton>
            </Link>
          </div>
        </div>
      </Section>
      <div className="p-5 hidden md:block ">
        <Scene glbSource="src/assets/models/fire.glb"></Scene>
      </div>
    </div>
  );
};
