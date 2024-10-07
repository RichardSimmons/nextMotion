import { RiExternalLinkLine } from "react-icons/ri";
import type { TimelineEntry } from "../ui/timeline";

export const sectionHeading = {
  title: "What I'm working on",
  subTitle: "Let's dive into what I've been up to.",
};

export const timelineData: TimelineEntry[] = [
  {
    title: "cs-flashcards",
    projectUrls: {
      repo: {
        owner: "yoyocharlie",
        name: "cs-flashcards-open",
        showStarCount: false,
      },
    },
    imageUrl: "/images/cs-flashcards.png",
    description: `A fullstack flashcards web app that I maintain as a valuable learning resource for both myself and the developer community. By open-sourcing this project, I aim to share knowledge and provide a practical tool for others to learn and grow in their development journey.`,
    tech: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "shadcn/ui",
      "tRPC",
      "Prisma",
      "Docker",
      "Vercel Postgres",
    ],
    cards: {
      a: {
        title: "Comprehensive Learning Tool",
        text: `Built with TypeScript and Next.js, this app offers a robust
              platform to enhance your development skills. It's
              open-sourced to provide a practical tool and valuable knowledge to
              developers at any stage.`,
      },
      b: {
        title: "Easy Integration with Your DB of Choice",
        text: `Effortlessly integrate with your preferred database, including
              SQLite for local use. Utilizing Prisma and tRPC, this app offers a
              flexible and scalable backend setup, making it easy to adapt and
              manage your data needs as you develop and expand your project.`,
      },
    },
  },
  {
    title: "Music Generator using diffusion models",
    projectUrls: {
      site: {
        url: "https://github.com/RSimmons2021/music-generation-audio-diffusion/tree/main/Desktop/New%20folder/music-generation-audio-diffusion",
        icon: <RiExternalLinkLine size={20} />,
      },
      repo: {
        name: "music-generation-audio-diffusion/tree/main/Desktop/New folder/music-generation-audio-diffusion",
        owner: "RSimmons2021",
        showStarCount: false,
      },
    },
    imageUrl: "/images/AudioDiffusion.png",
    description: `Apply diffusion models to synthesize music instead of images using the Hugging Face diffusers package`,
    tech: [
      "Python",
      "AI",
      "Machine Learning",
      "Flask"
      
    ],
    cards: {
      a: {
        title: "Modern UI, Powerful Music",
        text: `This music AI generator utilizes a state-of-the-art diffusion model to produce high-quality, dynamic audio. Built with Python, it leverages cutting-edge machine learning techniques to ensure smooth and creative music generation, perfect for experimenting with soundscapes and producing unique compositions.`,
      },
      b: {
        title: "Easy Music Generation with AI",
        text: `Effortlessly fine-tune the music AI generator to suit your creative needs and preferences. With seamless integration into various audio datasets, this powerful Python-based model simplifies the process of generating high-quality, original music compositions, providing a flexible platform for audio experimentation.`,
      },
    },
  }
];
