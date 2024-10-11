import type { ReactElement } from "react";

import { Typography } from "components/core";

interface SectionProps {
  children: ReactElement | ReactElement[];
  id: string;
  headingText?: string;
}

export const Section = ({ children, id, headingText }: SectionProps) => {
  return (
    <section id={id} className="flex flex-col h-full">
      <div className="flex flex-col gap-[40px] w-full my-[42px] mx-auto sm:my-[50px]">
        <div className="flex flex-col w-full h-full">
          {headingText ? (
            <Typography tag="h2" weight="semibold" className="text-5xl sm:text-5xl">
              {headingText}
            </Typography>
          ) : (
            ""
          )}
        </div>
        {children}
      </div>
    </section>
  );
};
