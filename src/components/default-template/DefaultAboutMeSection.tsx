import { Link } from "react-router-dom";

import { IconButton, Typography } from "components/core";
import { GITHUB_URL } from "constants/links";
import GithubIcon from "icons/GithubIcon";
import { Section } from "shared/Section";

export const DefaultAboutMeSection = () => {
  return (
    <Section id="about-me" headingText="Guntee Doungmanee">
      <div className="animate-hidden flex flex-col w-full gap-[30px] max-w-[800px]">
        <Typography tag="p" weight="semibold" className="text-primary text-xl sm:text-2xl">
          {"Student"}
        </Typography>
        <Typography tag="p" className="text-color2 text-l sm:text-xl whitespace-pre-line">
          {
            "My journey has started since 2021 (around 2 years ago) \n Starting programming so lately which mean more effort and attention giving into it !"
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
  );
};
