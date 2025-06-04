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
    "Front End Developer focused on creating user-centered web experiences. I specialize in designing intuitive and attractive interfaces, applying UX/UI principles to optimize the user experience and translating them into scalable and reusable code. Additionally, I possess knowledge in backend development, which allows me to offer complete and functional web solutions.",
  avatarUrl: "/me.jpeg",
  skills: [
    "HTML",
    "CSS",
    "SASS/SCSS",
    "TailwindCSS",
    "Liquid",
    "Astro",
    "React",
    "Redux",
    "Zustand",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "Sanity.io",
    "Stripe",
    "Mercadopago",
    "Shopify",
    "Supabase",
    "N8N.io",
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
      title: "Software Architect & Team Mentor",
      logoUrl: "/viola-creative.png",
      start: "Sep 2023",
      end: "Current",
      description:
        "Responsible for developing and styling responsive graphical interfaces using React, Next.js, and Astro, with Figma for design and mockups. Maintained and improved codebases while working on Back End development with REST APIs, MongoDB databases, and Headless CMS solutions like Sanity.IO. Managed development tasks and timelines, handled integrations of online payment methods and authentication systems (credentials and OAuth), implemented SEO optimization, and led technical teams through mentoring and code reviews.",
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
        "Responsible for developing and styling SaaS applications using React and Redux for state management. Handled REST API connections and integrations while designing graphical interfaces with Figma. Maintained and improved existing codebases to ensure optimal performance and scalability.",
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
      school: "University of Alberta",
      href: "https://www.coursera.org/specializations/software-design-architecture?action=enroll",
      degree: "Specialized Program: Software Design and Architecture",
      logoUrl: "/ualberta-logo.png",
      start: "July 2025",
      end: "November 2025 (expected)",
    },
    {
      school: "Henry Bootcamp",
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
      title: "SaaS Automation Builder",
      href: "",
      dates: "May 2025 - Present",
      active: true,
      description:
        "SaaS Automation Builder is a platform for building and managing automation workflows for your business. It allows you to create, edit, and delete automation workflows, and to view the status of your workflows.",
      technologies: [
        "Clerk Authentication",
        "Neon Tech",
        "Uploadcare",
        "Ngrok",
        "Nextjs 14",
        "Stripe",
        "Bun",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://qualitrack.vercel.app",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image:
        "https://images.unsplash.com/photo-1663517768994-a65e6ab3a40a?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "",
    },
    {
      title: "Lautaro Rodriguez Filmmaker Portfolio",
      href: "https://lautaro-rodriguez.vercel.app",
      dates: "May 2025 - Present",
      active: true,
      description:
        "Lautaro Rodriguez Filmmaker Portfolio is a website that showcases the work of a talented filmmaker, highlighting his projects and services. The site features a clean and modern design, with a focus on visual storytelling to engage visitors and showcase the filmmaker's unique style and capabilities.",
      technologies: [
        "React 18",
        "Next 14",
        "GSAP",
        "Framer Motion",
        "TailwindCSS",
        "Sanity CMS",
      ],
      links: [
        {
          type: "Website",
          href: "https://lautaro-rodriguez.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1679417220247-f3f5e32b1844?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "",
    },
    {
      title: "Qualitrack Platform",
      href: "https://qualitrack.vercel.app",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "Qualitrack Platform is a SaaS for managing inventory, sales, and repairs, with customizable user roles and a dashboard for key metrics. It streamlines business operations and includes future integrations for billing and customer notifications.",
      technologies: [
        "React 18",
        "Typescript",
        "Supabase",
        "Shadcn UI",
        "SCSS Modules",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://qualitrack.vercel.app",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image:
        "https://images.unsplash.com/photo-1663517768994-a65e6ab3a40a?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "",
    },
    {
      title: "Qualitrack Landing Page",
      href: "https://qualitrack.vercel.app",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "The Qualitrack Platform landing page showcases the key features of the SaaS solution, designed to effectively highlight its inventory, sales, and repair management capabilities. The page focuses on providing clear, visually appealing content to engage visitors and encourage conversions, with prominent calls to action for user sign-up and further exploration of the platform's functionalities.",
      technologies: ["Astro", "Typescript", "Sanity CMS", "TailwindCSS"],
      links: [
        // {
        //   type: "Website",
        //   href: "https://qualitrack.vercel.app",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image:
        "https://images.unsplash.com/photo-1678366633407-7f49da199a42?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "",
    },
    {
      title: "Hüga Design Studio",
      href: "",
      dates: "Jun 2024 - Dec 2024",
      active: false,
      description:
        "Hüga Design Studio is a graphic design studio offering a website that sells courses, services, and work plans to boost your brand development.",
      technologies: ["React 18", "TailwindCSS", "Sanity CMS"],
      links: [],
      image:
        "https://images.unsplash.com/photo-1679417220247-f3f5e32b1844?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "",
    },
  ],
} as const;
