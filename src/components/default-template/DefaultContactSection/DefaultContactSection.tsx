import { CopyToClipboard } from "react-copy-to-clipboard";

import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from "constants/links";
import GithubIcon from "icons/GithubIcon";
import LinkedinIcon from "icons/LinkedinIcon";
import MailIcon from "icons/MailIcon";
import { Section } from "shared/Section";

import { DefaultContactItem } from "./DefaultContactItem";

export const DefaultContactSection = () => {
  return (
    <Section id="contact" headingText="Contact">
      <div className="border border-white p-7 rounded-xl flex flex-col w-full justify-center h-full gap-[30px] ">
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
    </Section>
  );
};
