import { Link } from "react-router-dom";
import { IconButton, Typography } from "components/core";
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from "constants/links";
import GithubIcon from "icons/GithubIcon";
import { Section } from "shared/Section";
import fire from "assets/models/Flame_Icon.glb?url";
import Scene from "src/3D/scene";
import CopyToClipboard from "react-copy-to-clipboard";
import { DefaultContactItem } from "./DefaultContactSection/DefaultContactItem";
import MailIcon from "icons/MailIcon";
import { PiGraphFill } from "react-icons/pi";
import LinkedinIcon from "icons/LinkedinIcon";
import { useRef } from "react";

export const DefaultAboutMeSection = () => {
  return (
    <div className="md:grid md:grid-cols-2">
      <Section id="about-me" headingText="Guntee Doungmanee">
        <div className="flex flex-col w-full gap-[30px] max-w-[800px]">
          <Typography tag="p" weight="semibold" className="text-primary text-xl sm:text-2xl">
            {"A Typical Com eng. Student with 🔥"}
          </Typography>
          <Typography tag="p" className="text-color2 text-l sm:text-xl whitespace-pre-line">
            {
              "My journey as a programmer has started since 2021. \nI do work about data science, deep learning and fullstack development"
            }
          </Typography>
          <Typography tag="p" className=" font-extralight text-color2 text-l sm:text-xl">
            Now is student at{" "}
            <span className="font-semibold text-color1">
              King Mongkut's University of Technology Thonburi.
            </span>
          </Typography>

          {/* Contacts */}
          <div
            id="contacts"
            className="border border-white p-7 rounded-xl flex flex-col w-full justify-center h-full"
          >
            <h1 className="font-semibold underline underline-offset-8 text-2xl mb-6">Contacts</h1>
            <div className="flex flex-col sm:flex-row w-full justify-center gap-5">
              <CopyToClipboard text={EMAIL_ADDRESS}>
                <DefaultContactItem
                  icon={<MailIcon />}
                  title="Email address"
                  text={EMAIL_ADDRESS}
                  buttonText="Copy to clipboard"
                />
              </CopyToClipboard>
              <DefaultContactItem icon={<LinkedinIcon />} title="LinkedIn" href={LINKEDIN_URL} />
              <DefaultContactItem icon={<GithubIcon />} title="GitHub" href={GITHUB_URL} />
            </div>
          </div>
        </div>
        {/* 3D model */}
      </Section>
      <div className="h-full hidden md:block ">
        <Scene glbSource={fire}></Scene>
      </div>
    </div>
  );
};
