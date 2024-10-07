import { RiExternalLinkLine } from "react-icons/ri";
import type { TimelineEntry } from "../ui/timeline";

export const sectionHeading = {
  title: "What I'm working on",
  subTitle: "Let's dive into what I've been up to.",
};

export const timelineData: TimelineEntry[] = [
  {
    title: "React-Speech-To-Text-Transcriber",
    projectUrls: {
      repo: {
        owner: "RSimmons2021",
        name: "React-Speech-To-Text-Transcriber",
        showStarCount: false,
      },
    },
    imageUrl: "/images/My_Profile_Screen.png",
    description: `A sleek, modern React application that enables users to easily record voice notes and securely send them to an encrypted backend transcription service. By providing a streamlined interface with Material UI, this app ensures a smooth user experience, offering a reliable tool for converting voice recordings into text while maintaining data privacy and security.`,
    tech: [
      "TypeScript",
      "Javascript",
      "ReactJS",
      "Node.js",
      "TailwindCSS",
      "Material UI",
      "Postgres",
    ],
    cards: {
      a: {
        title: "Comprehensive Audio Tool",
        text: `Built with TypeScript and React, this app offers a powerful platform for recording and transcribing voice notes through a secure backend service. It's open-sourced to provide a practical tool and valuable resource for developers, enabling seamless voice-to-text conversion while fostering learning and collaboration across all skill levels.`,
      },
      b: {
        title: "Easy Integration",
        text: `Effortlessly integrate with your preferred database, including PostgreSQL for secure and scalable data management. Leveraging modern tools, this app provides a flexible and robust backend setup, ensuring smooth handling of your voice recordings and transcriptions as your project grows`,
      },
    },
  },
  {
    title: "Music Generator using diffusion models",
    projectUrls: {
      site: {
        url: "music-generation-audio-diffusion/tree/main/Desktop/New folder/music-generation-audio-diffusion",
        icon: <RiExternalLinkLine size={20} />,
      },
      repo: {
        name: "https://github.com/RSimmons2021/music-generation-audio-diffusion",
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
