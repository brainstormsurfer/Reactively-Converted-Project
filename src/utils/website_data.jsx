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

import image1 from '../../src/assets/img/items/item1.png'
import image2 from '../../src/assets/img/items/item2.png'
import image3 from '../../src/assets/img/items/item3.png'
import image4 from '../../src/assets/img/items/item4.png'
import image5 from '../../src/assets/img/items/item5.png'
import image6 from '../../src/assets/img/items/item6.png'
import image7 from '../../src/assets/img/items/item7.png'
import image8 from '../../src/assets/img/items/item8.png'
import image9 from '../../src/assets/img/items/item9.png'

export const galleryItems = [
  {id: 1, source: image1, category: "Design" , title: "Great Gradients"},
  {id: 2, source: image2, category: ">UI/UX" , title: "World Experience"},
  {id: 3, source: image3, category: "Photography & Design" , title: "Vanishing"},
  {id: 4, source: image4, category: "Design" , title: "Gap INC"},
  {id: 5, source: image5, category: "Mobile UI Design" , title: "Face THe Experience"},
  {id: 6, source: image6, category: "Design Concept" , title: "Bezier Curves"},
  {id: 7, source: image7, category: "Photography" , title: "Dock Ponder<"},
  {id: 8, source: image8, category: "Web Applications" , title: "Restaurant App"},
  {id: 9, source: image9, category: "Social Network Concept" , title: "FriendFeed"},
]

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
