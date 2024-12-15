import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Martín Fogliacco",
  initials: "MF",
  url: "https://martinfogliacco.vercel.app",
  location: "Florencio Varela, Buenos Aires",
  locationLink: "https://www.google.com/maps/place/florenciovarela",
  description: "Front End Developer with Back end knowledge.",
  summary:
    "Front End Developer specialized in creating innovative, user-centered web experiences. With a strong background as an IT Technician, I excel at designing intuitive and visually appealing interfaces, applying UX/UI principles to enhance the end-user experience. I also bring backend development knowledge, allowing me to provide comprehensive web solutions.",
  avatarUrl: "/me.jpeg",
  skills: [
    "HTML",
    "CSS",
    "SASS/SCSS",
    "Liquid",
    "React",
    "Redux",
    "Zustand",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "Nest.js",
    "Sanity.io",
    "Figma",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "fogliaccomartin3@gmail.com",
    tel: "+54 9 11 58370267",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mrtfog",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://ar.linkedin.com/in/martin-fogliacco/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Viola Creative",
      href: "https://www.violacreative.com",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/viola-creative.png",
      start: "Sep 2023",
      end: "Current",
      description:
        "I developed and styled graphical interfaces, using Figma for design. I maintained and improved code, and worked on Back End and Headless CMS development. I managed tasks and timelines, as well as integrated online payment methods and authentication systems (credentials and OAuth).",
    },
    {
      company: "Airtech SA",
      href: "https://www.gestionaguas.com.ar/",
      badges: [],
      location: "Presential",
      title: "Front End Developer",
      logoUrl: "/gestion-aguas.jpeg",
      start: "Jan 2023",
      end: "Sep 2023",
      description:
        "I designed and developed graphical interfaces using Figma, focusing on creating visually appealing and functional user experiences. I was responsible for developing and styling these interfaces, ensuring accurate implementation of the designs. Additionally, I handled the integration of the interfaces with external APIs to ensure connectivity and data flow.",
    },
    {
      company: "Airtech SA",
      href: "https://www.violacreative.com",
      badges: [],
      location: "Remote",
      title: "Technical Support",
      logoUrl: "/gestion-aguas.jpeg",
      start: "Apr 2021",
      end: "Jun 2022",
      description:
        "I provided remote technical support for a SaaS platform, assisting clients in troubleshooting and resolving issues. I was responsible for training new users on specific system modules, ensuring they could fully utilize its features. I used SQL Server to perform data analysis and resolve technical issues by developing and executing custom scripts.",
    },
  ],
  education: [
    {
      school: "SoyHenry Bootcamp",
      href: "https://www.soyhenry.com",
      degree: "Full Stack Developer",
      logoUrl: "/soy-henry.png",
      start: "Jul 2022",
      end: "Dec 2022",
    },
    {
      school: "E.E.S.T. N°4 'Ricardo A. López'",
      href: "https://eetn4begui.wordpress.com/",
      degree: "Informatic Technician",
      logoUrl: "/ricardo-lopez.jpg",
      start: "Feb 2016",
      end: "Dec 2020",
    },
  ],
  projects: [
    {
      title: "Qualitrack Platform",
      href: "https://chatcollect.com",
      dates: "Dec 2024 - Development",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "React 18",
        "Typescript",
        "Nest.JS",
        "Prisma",
        "MongoDB",
        "NextUI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Qualitrack Landing Page",
      href: "https://magicui.design",
      dates: "Dec 2024 - Development",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: ["Astro", "Typescript", "Sanity CMS", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://qualitrack.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Huga Design Studio",
      href: "https://www.hugadesignstudio.com",
      dates: "Jun 2024 - Dec 2024",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: ["React 18", "TailwindCSS", "Sanity CMS"],
      links: [
        {
          type: "Website",
          href: "https://www.hugadesignstudio.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
} as const;
