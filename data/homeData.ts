import { BiPaperPlane } from "react-icons/bi";
import { FaPrayingHands } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { MdOutlineArticle } from "react-icons/md";
import { BsFolder } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export const DataLeftHome = {
  one: {
    Icon: FaPrayingHands,
    button: {
      text: "Let`s Explore",
      ButtonIcon: BiPaperPlane,
    },
    title: "Welcome Ji",
    path: "/tools",
    dec: "Welcome to my site! Get technical solutions to boost your skills and solve problems effortlessly.",
  },
  two: {
    Icon: VscTools,
    button: {
      text: "Explore All Tools",
      ButtonIcon: BiPaperPlane,
    },
    path: "/tools",
    title: "Awesome Tools",
    dec: "Boost productivity with my technical tools - faster fixes, easier tasks.",
  },
  three: {
    Icon: MdOutlineArticle,
    button: {
      text: "Explore All Blgos",
      ButtonIcon: BiPaperPlane,
    },
    path: "/blogs",
    title: "Knowledgeble Blogs",
    dec: "Stay informed on tech trends with insightful blogs.",
  },
  four: {
    Icon: BsFolder,
    button: {
      text: "Explore All Projects",
      ButtonIcon: BiPaperPlane,
    },
    path: "/projects",
    title: "Usefull Projects",
    dec: "Innovative projects using Node.js, React, and more.",
  },
};

export const DataRightHome = [
  {
    Icon: VscTools,
    title: "Awesome Tools",
    path: "/tools",
    dec: "Boost productivity with my technical tools - faster fixes, easier tasks.",
    button: {
      text: "Go to Tools",
      ButtonIcon: BsFillArrowRightCircleFill,
    },
  },
  {
    Icon: MdOutlineArticle,
    path: "/blogs",
    title: "Knowledgeble Blogs",
    dec: "Stay informed on tech trends with insightful blogs.",
    button: {
      text: "Go to Blogs",
      ButtonIcon: BsFillArrowRightCircleFill,
    },
  },
  {
    Icon: BsFolder,
    path: "projects",
    title: "Usefull Projects",
    dec: "Innovative projects using Node.js, React, and more.",
    button: {
      text: "Go to Projects",
      ButtonIcon: BsFillArrowRightCircleFill,
    },
  },
];
