import { useEffect, useMemo, useState } from "react";

import { DefaultTemplate } from "components/default-template";
import DefaultPage from "./DefaultPage";
import { IoIosArrowDown } from "react-icons/io";
import { ButtonScrollTo } from "components/core";

const WelcomePage = () => {
  const [isFullPage, setIsFullPage] = useState(false);
  const [isScrollingDisabled, setIsScrollingDisabled] = useState(false);
  const scrollThreshold = 1500;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsFullPage(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isFullPage) {
      window.scrollTo(0, 0);
      setIsScrollingDisabled(true);
      document.body.style.overflow = "hidden";

      const timer = setTimeout(() => {
        setIsScrollingDisabled(false);
        window.scrollTo(0, 0);
        document.body.style.overflow = "auto";
      }, 1500);

      const debounce_timer = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 250);

      return () => {
        clearTimeout(debounce_timer);
        clearTimeout(timer);
      };
    }
  }, [isFullPage]);

  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [documentHeight, setDocumentHeight] = useState(document.documentElement.scrollHeight);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
    setDocumentHeight(document.documentElement.scrollHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollProgress: number = (scrollY / scrollThreshold) * 100;

  const messages = [
    { threshold: 80, message: "🔥🔥🔥" },
    { threshold: 60, message: "Let's take a look into my profile 🔥" },
    { threshold: 40, message: "I love to do creative things such as this website." },
    { threshold: 20, message: "My name is Piang." },
    { threshold: 0, message: "Greetings Fellow! 👋\n First, let me introduce myself" }
  ];

  const Typewriter = ({ text }: { text: string }) => {
    // const [displayedText, setDisplayedText] = useState("");
    // const [index, setIndex] = useState(0);

    // useEffect(() => {
    //   const timeoutId = setTimeout(() => {
    //     if (index < text.length) {
    //       setDisplayedText((prev) => prev + text[index]);
    //       setIndex((prev) => prev + 1);
    //     }
    //   }, 30); // Adjust typing speed

    //   return () => clearTimeout(timeoutId);
    // }, [index, text]);

    // // Reset typing effect when new text is provided
    // useEffect(() => {
    //   setDisplayedText("");
    //   setIndex(0);
    // }, [text]);

    return <h1 className="text-4xl whitespace-pre-line">{text}</h1>;
  };

  const RenderContent = ({}: { scrollProgress: number }) => {
    const [currentMessage, setCurrentMessage] = useState(messages[0].message);

    useEffect(() => {
      const message =
        messages.find((msg) => scrollProgress >= msg.threshold)?.message || currentMessage;
      console.log(message !== currentMessage);
      // Only update if the message changes
      if (message !== currentMessage) {
        setCurrentMessage(message);
      }
    }, [currentMessage]);

    return <Typewriter text={currentMessage} />;
  };

  return (
    <div>
      {!isFullPage ? (
        <button
          onClick={() => {
            setIsFullPage(true);
          }}
        >
          <div className="fixed flex flex-col h-screen w-screen justify-center items-center">
            <RenderContent scrollProgress={scrollProgress} />
            <div className="flex flex-col items-center animate-pulse">
              <IoIosArrowDown className="mt-6 animate-bounce" size={48} />
              <div>Scroll Down</div>
            </div>
          </div>
          <div className="h-[500vh]"></div>
        </button>
      ) : (
        <DefaultPage />
      )}
    </div>
  );
};

export default WelcomePage;
