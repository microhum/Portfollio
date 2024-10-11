import { useEffect, useRef, useState } from "react";

import { Button, ButtonScrollTo, IconButton } from "components/core";
import MenuIcon from "icons/MenuIcon";
import { Logo } from "shared/Logo";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import { pageStore } from "stores/pageStore";
import { handleCreateRippleEffect } from "utils/rippleUtils";
interface NavButtonProps {
  element_id: string;
  children: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ element_id, children }) => {
  const { OnPage, setOnPage } = pageStore();
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const element = document.getElementById(element_id);

    console.log(element_id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <button
      id={`button-${element_id}`}
      className={`p-3 bg-primary rounded-xl transition-colors border border-spacing-3 border-white duration-300 ${
        OnPage == element_id ? "bg-opacity-40" : "bg-opacity-0 hover:bg-opacity-15 border-0"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const Header = () => {
  const headerRef = useRef<HTMLHeadElement>(null);
  const [isPinned, setIsPinned] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { OnPage, setOnPage } = pageStore();

  useEffect(() => {
    const { current } = headerRef;

    if (current) {
      const observerFnc = () => {
        const observer = new IntersectionObserver(
          ([entries]) => {
            setIsPinned(entries.intersectionRatio < 1);
          },
          { threshold: [1] }
        );

        observer.observe(current);

        return () => {
          observer.unobserve(current);
        };
      };

      observerFnc();

      window.addEventListener("scroll", observerFnc);
      window.addEventListener("resize", observerFnc);

      return () => {
        window.removeEventListener("scroll", observerFnc);
        window.removeEventListener("resize", observerFnc);
      };
    }
  }, []);

  return (
    <>
      <div
        className={`h-[50px] duration-200 ${isPinned && "bg-background2/30 backdrop-blur-md "}`}
      />
      <header
        className={`sticky top-[-1px] right-0 left-0 w-full z-50 duration-200 after:content-[''] after:absolute after:left-[50%] after:bottom-0 after:w-full after:translate-x-[-50%] after:h-px after:duration-200 ${
          isPinned ? "bg-background2/30 backdrop-blur-md after:scale-x-100" : "after:scale-x-0"
        }`}
        ref={headerRef}
      >
        <nav className="flex align-center justify-between gap-[16px] flex-wrap max-w-[1240px] w-full mx-auto px-[30px] py-[12px]">
          <div className="">
            <Logo />
          </div>
          <div className="hidden sm:flex sm:align-center sm:gap-[10px] sm:mx-auto">
            <NavButton element_id="about-me">About me</NavButton>
            {/* <NavButton element_id="contacts">Contacts</NavButton> */}
            <NavButton element_id="skills">Skills</NavButton>
            <NavButton element_id="projects">Projects</NavButton>
          </div>
          <div className="flex sm:hidden">
            <IconButton title="Menu" onClick={() => setIsMenuOpen((prev) => !prev)}>
              <MenuIcon />
            </IconButton>
          </div>
        </nav>
        <HeaderMobileMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          isPinned={isPinned}
        />
      </header>
    </>
  );
};
