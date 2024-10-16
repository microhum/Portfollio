import type { ComponentPropsWithoutRef, ReactElement } from "react";
import { cloneElement } from "react";
import { Link } from "react-router-dom";

interface CustomLinkProps extends ComponentPropsWithoutRef<"a"> {
  href: string;
  icon?: ReactElement;
}

export const CustomLink = ({ children, href, icon, ...props }: CustomLinkProps) => {
  return (
    <Link
      className="relative flex align-center text-primary font-semibold text-l duration-200 hover:opacity-70 active:brightness-125 focus-visible:shadow-[0px_1px_0px_theme('colors.current')] sm:text-[12px]"
      to={href}
      {...props}
    >
      {icon &&
        cloneElement(icon, {
          className: "self-center w-[15px] h-[15px] mr-[5px]"
        })}
      {children}
    </Link>
  );
};
