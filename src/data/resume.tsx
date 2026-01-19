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
    "MercadoPago",
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
      company: "Finaer",
      href: "https://www.finaersa.com.ar",
      badges: [],
      location: "Hybrid",
      title: "Front End Developer",
      logoUrl: "/finaer-logo.jpeg",
      start: "Aug 2025",
      end: "Current",
      description:
        "Responsible for developing and styling responsive graphical interfaces using React, Next.js, with Figma for design and mockups. Maintained and improved codebases.",
    },
    {
      company: "Viola Creative",
      href: "https://www.violacreative.com",
      badges: [],
      location: "Remote",
      title: "Front End Developer - Team Lead",
      logoUrl: "/viola-creative.png",
      start: "Sep 2023",
      end: "Jul 2025",
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
      title: "Functional Systems Analyst",
      logoUrl: "/gestion-aguas.jpeg",
      start: "Apr 2021",
      end: "Jun 2022",
      description:
        "Provided remote technical support for a SaaS platform, assisting clients with troubleshooting and issue resolution. Responsible for training new users on specific system modules, ensuring effective use of all features. Utilized SQL Server for data analysis and resolved technical issues through the development and execution of custom scripts.",
    },
  ],
  education: [
    {
      school: "UTN E-Learning Center",
      href: "https://sceu.frba.utn.edu.ar/e-learning/detalle/diplomatura/3346/diplomatura-en-blockchain-y-finanzas-digitales",
      degree: "Professional Diploma in Blockchain and Digital Finance",
      logoUrl: "/utn-logo.jpeg",
      start: "March 2026",
      end: "November 2026 (expected)",
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
      title: "The Mindful Network",
      href: "https://themindfulnetwork.com/",
      dates: "Feb 2025 - Jul 2025",
      active: true,
      description:
        "The Mindful Network is your comprehensive guide to finding and connecting with mental health resources in South Florida. Explore therapy options, medication management, outpatient and inpatient programs, and innovative therapies tailored for individuals aged 40 and above.",
      technologies: [
        "React 18",
        "Next 14",
        "Typescript",
        "Framer Motion",
        "TailwindCSS",
        "Sanity CMS",
        "Figma Design",
      ],
      links: [
        {
          type: "Website",
          href: "https://themindfulnetwork.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/the-mindful-network.png",
      video: "",
    },
    {
      title: "Por El Deporte",
      href: "https://poreldeporte.com/",
      dates: "Oct 2024 - Dec 2024",
      active: true,
      description:
        "Por El Deporte is a lifestyle and sports-inspired online brand that offers a curated shop of athletic apparel and accessories. The site features jerseys, tees, hoodies, caps, and other gear with original designs tied to a community ethos and cultural identity rooted in sport. It includes a mission section and gallery alongside social media links, emphasizing community engagement and supporting its brand culture through merchandise sales.",
      technologies: ["Liquid", "Shopify"],
      links: [
        {
          type: "Website",
          href: "https://poreldeporte.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/por-el-deporte.png",
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
        "Figma Design",
      ],
      links: [
        {
          type: "Website",
          href: "https://lautaro-rodriguez.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/lautaro-rodriguez.png",
      // image:
      //   "https://images.unsplash.com/photo-1679417220247-f3f5e32b1844?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "",
    },
    {
      title: "Qualitrack Platform",
      href: "",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "Qualitrack Platform is a SaaS for managing inventory, sales, and repairs, with customizable user roles and a dashboard for key metrics. It streamlines business operations and includes future integrations for billing and customer notifications.",
      technologies: [
        "React 18",
        "Typescript",
        "Supabase",
        "Shadcn UI",
        "TailwindCSS",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/mrtfog/qualitrack-mono",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1663517768994-a65e6ab3a40a?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      video: "",
    },
  ],
} as const;
