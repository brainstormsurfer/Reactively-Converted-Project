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

import image1 from "../../src/assets/img/items/item1.png";
import image2 from "../../src/assets/img/items/item2.png";
import image3 from "../../src/assets/img/items/item3.png";
import image4 from "../../src/assets/img/items/item4.png";
import image5 from "../../src/assets/img/items/item5.png";
import image6 from "../../src/assets/img/items/item6.png";
import image7 from "../../src/assets/img/items/item7.png";
import image8 from "../../src/assets/img/items/item8.png";
import image9 from "../../src/assets/img/items/item9.png";

import aboutLogo1 from "../assets/img/about-logos/logo-envato.png";
import aboutLogo2 from "../assets/img/about-logos/logo-wordpress.png";
import aboutLogo3 from "../assets/img/about-logos/logo-woocommerce.png";
import aboutLogo4 from "../assets/img/about-logos/logo-magento.png";
// ====================================
//!            Home Page
// ====================================
// ====================================
//? used at Process (Home page)
// ====================================
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

// ====================================
//? used at Stats (Home page)
// ====================================
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

// ====================================
//? used at Specialize (Home page)
// ====================================
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

// ====================================
//!            Work Page
// ====================================
// ====================================
//? used at Gallery (Work Page)
// ====================================
export const galleryItems = [
  { id: 1, source: image1, category: "Design", title: "Great Gradients" },
  { id: 2, source: image2, category: ">UI/UX", title: "World Experience" },
  {
    id: 3,
    source: image3,
    category: "Photography & Design",
    title: "Vanishing",
  },
  { id: 4, source: image4, category: "Design", title: "Gap INC" },
  {
    id: 5,
    source: image5,
    category: "Mobile UI Design",
    title: "Face THe Experience",
  },
  { id: 6, source: image6, category: "Design Concept", title: "Bezier Curves" },
  { id: 7, source: image7, category: "Photography", title: "Dock Ponder<" },
  {
    id: 8,
    source: image8,
    category: "Web Applications",
    title: "Restaurant App",
  },
  {
    id: 9,
    source: image9,
    category: "Social Network Concept",
    title: "FriendFeed",
  },
];

// ====================================
//!             About
// ====================================
export const testimonials = [
  {
    id: 1,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis quia nostrum nam ab vel laudantium, ea, corrupti culpa illum soluta ipsam eos, eius ad error voluptate sint? Non, fugit!",
    person: "Sam Smith, New York",
    imageSrc: "../../src/assets/img/testimonials/person1.jpg",
  },
  {
    id: 2,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis quia nostrum nam ab vel laudantium, ea, corrupti culpa illum soluta ipsam eos, eius ad error voluptate sint? Non, fugit!",
    person: "Sara Williams, Michigan",
    imageSrc: "../../src/assets/img/testimonials/person2.jpg",
  },
  {
    id: 3,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis quia nostrum nam ab vel laudantium, ea, corrupti culpa illum soluta ipsam eos, eius ad error voluptate sint? Non, fugit!",
    person: "Jill Johnson, London",
    imageSrc: "../../src/assets/img/testimonials/person3.jpg",
  },
  {
    id: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis quia nostrum nam ab vel laudantium, ea, corrupti culpa illum soluta ipsam eos, eius ad error voluptate sint? Non,",
    person: "Steve Thompson, Boston",
    imageSrc: "../../src/assets/img/testimonials/person4.jpg",

  },
];

export const aboutLogos = [
  { id: 1, source: aboutLogo1, title: "envato logo" },
  { id: 2, source: aboutLogo2, title: "wordpress logo" },
  { id: 3, source: aboutLogo3, title: "woocommerce logo" },
  { id: 4, source: aboutLogo4, title: "magneto logo" },
];

export const awards = [
  {
    id: "award-1",
    title: "Award One",
    icon: <FaAward />,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, magni!",
  },
  {
    id: "award-2",
    title: "Award Two",
    icon: <FaAward />,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, magni!",
  },
  {
    id: "award-3",
    title: "Award Three",
    icon: <FaAward />,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, magni!",
  },
];

export const skillsProgression = [
  { skill: "Photography", progress: "100" },
  { skill: "Adobe Photoshop", progress: "80" },
  { skill: "Adobe Illustrator", progress: "70" },
  { skill: "HTML", progress: "100" },
  { skill: "Wordpress", progress: "80" },
  { skill: "Magento", progress: "70" },
];

// ====================================
//!              Footer
// ====================================

export const socialLinks = [
  { id: 1, awesomeClass: "fa-twitter", icon: <FaTwitter /> },
  { id: 2, awesomeClass: "fa-twitter", icon: <FaFacebook /> },
  { id: 3, awesomeClass: "fa-twitter", icon: <FaInstagram /> },
  { id: 4, awesomeClass: "fa-twitter", icon: <FaLinkedin /> },
];
