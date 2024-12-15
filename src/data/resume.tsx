import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Martín Fogliacco",
  initials: "MF",
  url: "https://martinfogliacco.vercel.app",
  location: "Florencio Varela, Buenos Aires",
  locationLink: "https://www.google.com/maps/place/florenciovarela",
  description:
    "Crafting Intuitive and Visually Engaging Web Experiences with a Full-Stack Approach.",
  summary:
    "Front End Developer specialized in creating innovative, user-centered web experiences. With a strong background as an IT Technician, I excel at designing intuitive and visually appealing interfaces, applying UX/UI principles to enhance the end-user experience. I also bring backend development knowledge, allowing me to provide comprehensive web solutions.",
  avatarUrl: "/me.jpeg",
  skills: [
    "HTML",
    "CSS",
    "SASS/SCSS",
    "Liquid",
    "Astro",
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
        "Responsible for developing and styling graphical interfaces using Figma for design. Maintained and improved code while working on Back End and Headless CMS development. Managed tasks and timelines, and handled the integration of online payment methods and authentication systems (credentials and OAuth).",
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
        "Designed and developed graphical interfaces using Figma, with a focus on creating visually appealing and functional user experiences. Responsible for developing and styling the interfaces, ensuring accurate implementation of the designs. Additionally, handled the integration of the interfaces with external APIs to ensure seamless connectivity and data flow.",
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
        "Provided remote technical support for a SaaS platform, assisting clients with troubleshooting and issue resolution. Responsible for training new users on specific system modules, ensuring effective use of all features. Utilized SQL Server for data analysis and resolved technical issues through the development and execution of custom scripts.",
    },
  ],
  education: [
    {
      school: "Udacity",
      href: "https://www.udacity.com/course/software-design-patterns--ud821",
      degree: "Software Architecture & Design",
      logoUrl: "/udacity.png",
      start: "Dec 2024",
      end: "In Progress",
    },
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
        "Qualitrack Platform is a SaaS for managing inventory, sales, and repairs, with customizable user roles and a dashboard for key metrics. It streamlines business operations and includes future integrations for billing and customer notifications.",
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
          href: "https://qualitrack.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1663517768994-a65e6ab3a40a?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "",
    },
    {
      title: "Qualitrack Landing Page",
      href: "https://magicui.design",
      dates: "Dec 2024 - Development",
      active: true,
      description:
        "The Qualitrack Platform landing page showcases the key features of the SaaS solution, designed to effectively highlight its inventory, sales, and repair management capabilities. The page focuses on providing clear, visually appealing content to engage visitors and encourage conversions, with prominent calls to action for user sign-up and further exploration of the platform's functionalities.",
      technologies: ["Astro", "Typescript", "Sanity CMS", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://qualitrack.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1678366633407-7f49da199a42?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "",
    },
    {
      title: "Hüga Design Studio",
      href: "https://www.hugadesignstudio.com",
      dates: "Jun 2024 - Dec 2024",
      active: true,
      description:
        "Hüga Design Studio is a graphic design studio offering a website that sells courses, services, and work plans to boost your brand development.",
      technologies: ["React 18", "TailwindCSS", "Sanity CMS"],
      links: [
        {
          type: "Website",
          href: "https://www.hugadesignstudio.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1679417220247-f3f5e32b1844?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "",
    },
  ],
} as const;
