import type { ReactNode } from "react";

import { Button, CustomLink, Typography } from "components/core";
import ExternalLinkIcon from "icons/ExternalLinkIcon";

interface DefaultContactItemProps {
  icon: ReactNode;
  title: string;
  text?: string;
  href?: string;
  buttonText?: string;
  onClick?: () => void;
}

export const DefaultContactItem = ({
  icon,
  title,
  text,
  href,
  buttonText,
  onClick
}: DefaultContactItemProps) => {
  return (
    <div className="flex gap-[15px] sm:gap-[20px]">
      <div className="flex [&>svg]:h-[20px] [&>svg]:w-[20px] [&>svg]:text-color2/60">{icon}</div>
      <div className="flex flex-col gap-[10px]">
        <Typography weight="medium" className="text-lg sm:text-xl">
          {title}
        </Typography>
        {text && <Typography className="text-color2 text-m sm:text-l">{text}</Typography>}
        {onClick && <Button onClick={onClick}>{buttonText}</Button>}
        {href && (
          <CustomLink
            href={href}
            icon={<ExternalLinkIcon />}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit page
          </CustomLink>
        )}
      </div>
    </div>
  );
};
