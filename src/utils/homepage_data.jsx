import {
  FaFile,
  FaDesktop,
  FaObjectUngroup,
  FaThumbsUp,
  FaUsers,
  FaAward,
  FaHourglass,
  FaCodeBranch,
} from "react-icons/fa";

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
