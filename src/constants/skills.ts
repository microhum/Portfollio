import reactIcon from "assets/icons/react.svg";
import svelteIcon from "assets/icons/svelte.svg";
import tailwindcssIcon from "assets/icons/tailwind-css.svg";
import typescriptIcon from "assets/icons/typescript.svg";
import viteIcon from "assets/icons/vite.svg";
import htmlIcon from "assets/icons/html.svg";
import jsIcon from "assets/icons/js.svg";
import cssIcon from "assets/icons/css.svg";
import pythonIcon from "assets/icons/python.svg";
import tensorflowIcon from "assets/icons/tensorflow.svg";
import pytorchIcon from "assets/icons/pytorch.svg";
import djangoIcon from "assets/icons/django.svg";
import dockerIcon from "src/assets/icons/docker.svg";
import ThumbsUp from "src/assets/icons/thumbs-up-sign.svg";

type Skill = {
  src: string;
  website: string;
  text: string;
};

export const skills: {
  experiencedWith: Skill[];
  wantToLearn: Skill[];
} = {
  experiencedWith: [
    {
      src: reactIcon,
      website: "https://reactjs.org",
      text: "React.js"
    },
    {
      src: typescriptIcon,
      website: "https://www.typescriptlang.org",
      text: "TypeScript"
    },
    {
      src: tailwindcssIcon,
      website: "https://tailwindcss.com",
      text: "Tailwind CSS"
    },
    {
      src: pythonIcon,
      website: "",
      text: "Python"
    },
    {
      src: dockerIcon,
      website: "",
      text: "Docker Container"
    },
    {
      src: pytorchIcon,
      website: "",
      text: "Pytorch"
    }
  ],
  wantToLearn: [
    {
      src: reactIcon,
      website: "https://reactnative.dev",
      text: "React Native"
    },
    {
      src: svelteIcon,
      website: "https://svelte.dev",
      text: "Svelte"
    },
    {
      src: ThumbsUp,
      website: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      text: "Secret"
    }
  ]
};
