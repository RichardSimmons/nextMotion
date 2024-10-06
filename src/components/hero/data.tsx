import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export const title = {
  plainText: "",
  glowText: "nextMotion",
  subTitle: "Sleek UI, unforgettable design",
  highlight: ["unforgettable"],
};

export const profileCard = {
  title: "Richard Simmons",
  subTitle: "Fullstack Software Developer",
  body: `Passionate about building scalable, user-friendly web applications. Always exploring new technologies and best practices to improve development processes. And I like cats.`,
  socialUrls: [
    {
      url: "https://www.linkedin.com/in/richard-simmons-a3916958/",
      icon: <FaLinkedinIn size={20} />,
    },
    // Removed GitHub button
  ],
  tooltip: {
    imagePath: "https://avatars.githubusercontent.com/u/106707326?v=4",
    title: "Hey...",
    subTitle: "That's me!",
  },
};
