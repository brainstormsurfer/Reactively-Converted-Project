import {
  FaFile,
  FaDesktop,
  FaObjectUngroup,
  FaThumbsUp,
  FaUsers,
  FaAward,
  FaHourglass,
  FaCodeBranch,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export const socialLinks = [
  { id: 1, awesomeClass:'fa-twitter', icon: <FaTwitter /> },
  { id: 2, awesomeClass:'fa-twitter', icon: <FaFacebook /> },
  { id: 3, awesomeClass:'fa-twitter', icon: <FaInstagram /> },
  { id: 4, awesomeClass:'fa-twitter', icon: <FaLinkedin /> },
];

export const processItems = [
  {
    id: 1,
    title: "Discuss The Project",
    icon: <FaFile />,
    processStep: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, molestias repellat quibusdam adipisci quas sed ullam accusantium aliquam numquam quclassNameem.",
  },
  {
    id: 2,
    title: "Brainstorming ^ Concept",
    icon: <FaDesktop />,
    processStep: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, molestias repellat quibusdam adipisci quas sed ullam accusantium aliquam numquam quclassNameem.",
  },
  {
    id: 3,
    title: "UI/UX Planning",
    icon: <FaObjectUngroup />,
    processStep: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, molestias repellat quibusdam adipisci quas sed ullam accusantium aliquam numquam quclassNameem.",
  },
  {
    id: 4,
    title: "Interaction",
    icon: <FaThumbsUp />,
    processStep: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, molestias repellat quibusdam adipisci quas sed ullam accusantium aliquam numquam quclassNameem.",
  },
];

export const statsItems = [
  {
    id: 1,
    title: "Clients",
    icon: <FaUsers />,
    statsNumber: 100,
  },
  {
    id: 2,
    title: "Awards",
    icon: <FaAward />,
    statsNumber: 3,
  },
  {
    id: 3,
    title: "Hours Worked",
    icon: <FaHourglass />,
    statsNumber: 3500,
  },
  {
    id: 4,
    title: "Projects Completed",
    icon: <FaCodeBranch />,
    statsNumber: 135,
  },
];

export const specializeItems = [
  {
    id: 1,
    title: "Concepting",
    icon: <FaFile />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, molestias repellat quibusdam adipisci quas sed ullam accusantium aliquam numquam quclassNameem.",
  },
  {
    id: 2,
    title: "UI/UX",
    icon: <FaDesktop />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, molestias repellat quibusdam adipisci quas sed ullam accusantium aliquam numquam quclassNameem.",
  },
  {
    id: 3,
    title: "Visual Design",
    icon: <FaObjectUngroup />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, molestias repellat quibusdam adipisci quas sed ullam accusantium aliquam numquam quclassNameem.",
  },
  {
    id: 4,
    title: "Interaction",
    icon: <FaThumbsUp />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, molestias repellat quibusdam adipisci quas sed ullam accusantium aliquam numquam quclassNameem.",
  },
];
