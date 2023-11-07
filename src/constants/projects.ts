import type { IconType } from "react-icons/lib";

import CurrentPortfolioUrl from "assets/projects/current-portfolio.jpg?url";
import MyStrokeUrl from "assets/projects/MyStroke.jpg?url";
import AccilaNewsAIUrl from "assets/projects/AccilaNewsAI.jpg?url";
import BraincodeCoverUrl from "assets/projects/BraincodeCover.jpg?url";
import ReactIcon from "icons/ReactIcon";
import TailwindIcon from "icons/TailwindIcon";
import TypescriptIcon from "icons/TypescriptIcon";
import ViteIcon from "icons/ViteIcon";
import jsIcon from "icons/JavaScriptIcon";
import PythonIcon from "icons/PythonIcon";
import TensorflowIcon from "icons/TensorflowIcon";
import PytorchIcon from "icons/PytorchIcon";
import DjangoIcon from "icons/DjangoIcon";
import JupyterIcon from "icons/JupyterIcon";
import UnityIcon from "icons/UnityIcon";
import FastapiIcon from "icons/FastapiIcon";
import FirebaseIcon from "icons/FirebaseIcon";
import DockerIcon from "icons/DockerIcon";

const techTypes = [
  "TypeScript",
  "Vite",
  "Jest + RTL",
  "React",
  "React Native",
  "Tailwind CSS",
  "Svelte",
  "JavaScript",
  "Python",
  "Tensorflow",
  "Pytorch",
  "Django",
  "Docker",
  "Unity",
  "Firebase",
  "FastAPI",
  "Jupyter"
] as const;

type TechTuple = typeof techTypes;

export type ProjectTech = { tech: TechTuple[number]; icon: IconType };

export type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  githubUrl?: string;
  techs: ProjectTech[];
  isPinned?: boolean;
};

const typeScriptTech: ProjectTech = { tech: "TypeScript", icon: TypescriptIcon };
const reactTech: ProjectTech = { tech: "React", icon: ReactIcon };
const reactnativeTech: ProjectTech = { tech: "React Native", icon: ReactIcon };
const tailwindCssTech: ProjectTech = { tech: "Tailwind CSS", icon: TailwindIcon };
const pythonTech: ProjectTech = { tech: "Python", icon: PythonIcon };
const tensorflowTech: ProjectTech = { tech: "Tensorflow", icon: TensorflowIcon };
const pytorchTech: ProjectTech = { tech: "Pytorch", icon: PytorchIcon };
const djangoTech: ProjectTech = { tech: "Django", icon: DjangoIcon };
const javaScriptTech: ProjectTech = { tech: "JavaScript", icon: jsIcon };
const viteTech: ProjectTech = { tech: "Svelte", icon: ViteIcon };
const dockerTech: ProjectTech = { tech: "Docker", icon: DockerIcon };
const jupyterTech: ProjectTech = { tech: "Jupyter", icon: JupyterIcon };
const unityTech: ProjectTech = { tech: "Unity", icon: UnityIcon };
const firebaseTech: ProjectTech = { tech: "Firebase", icon: FirebaseIcon };
const fastapiTech: ProjectTech = { tech: "FastAPI", icon: FastapiIcon };

export const projects: Project[] = [
  {
    title: "MyStroke",
    description: "Tired of Stroke?. Try MyStroke.",
    image: MyStrokeUrl,
    url: "https://mystroke-game.onrender.com/",
    githubUrl: "https://github.com/MyStroke",
    techs: [
      reactnativeTech,
      unityTech,
      typeScriptTech,
      viteTech,
      pythonTech,
      tensorflowTech,
      fastapiTech,
      firebaseTech,
      dockerTech
    ],
    isPinned: true
  },
  {
    title: "AccilaNews.AI",
    description:
      "Traffy Fondue Plus feature, Accident and road detection with object detection trained with ~100k cleaned traffy fondue images in Bangkok road from BMATraffic API",
    image: AccilaNewsAIUrl,
    url: "https://github.com/AeraX-Valley",
    githubUrl: "https://github.com/AeraX-Valley",
    techs: [reactTech, typeScriptTech, viteTech, pythonTech, tensorflowTech, djangoTech],
    isPinned: true
  },
  {
    title: "Distance Learning EEG Classification",
    description: "Project of Braincode101 Camp",
    image: BraincodeCoverUrl,
    url: "https://medium.com/@guntee12123/%E0%B8%A1%E0%B8%B2%E0%B8%97%E0%B8%B3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%84%E0%B8%A5%E0%B8%B7%E0%B9%88%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%AD%E0%B8%87-eeg-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-distance-learning-eeg-classification-26231783474b",
    techs: [jupyterTech, pythonTech, pytorchTech],
    isPinned: true
  },
  {
    title: "My Portfolio",
    description: "My Portfolio",
    image: CurrentPortfolioUrl,
    url: "",
    githubUrl: "https://github.com/microhum/Portfollio",
    techs: [reactTech, typeScriptTech]
  }
];
