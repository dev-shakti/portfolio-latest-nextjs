"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "../ui/button";
import { div } from "motion/react-client";

type WorkType = {
  title: string;
  desc: string;
  stacks: string[];
  image: string;
  GitHubLink: string;
  demoLink: string;
};

const works: WorkType[] = [
  {
    title: "Social App",
    desc: "Developed a secure Full stack app with role-based auth, user interactions (likes/comments), profile updates, and story sharing. Styled with SASS for responsiveness and dark mode support.",
    stacks: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Context API",
      "JWT",
      "SASS",
      "React Query",
    ],
    image: "/assets/social-app.png",
    GitHubLink: "https://github.com/dev-shakti/social-app",
    demoLink: "https://social-app-6cl3.vercel.app",
  },
  {
    title: "Blog App",
    desc: "Built a role-based blog app with post interactions (like/comment), search/filters, and admin can manage users and categories. Used React, Tailwind, ShadCN, and dark mode.",
    stacks: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "ShadCN",
      "Tailwind CSS",
      "Redux",
      "Zod",
    ],
    image: "/assets/blog-app.png",
    GitHubLink: "https://github.com/dev-shakti/mern-blog-app",
    demoLink: "https://mern-blog-app-ywm4.vercel.app",
  },
  {
    title: "Job Portal App",
    desc: "Developed a MERN-based job portal with role-based access. Job seekers can browse, search, filter, and apply for jobs while tracking applications. Admins manage companies and job postings. Built with responsive design and secure authentication.",
    stacks: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Redux",
      "Tailwind CSS",
      "ShadCn UI",
    ],
    image: "/assets/job-portal.png",
    GitHubLink: "https://github.com/dev-shakti/job-portal-mern",
    demoLink: "",
  },
  {
    title: "Notes App",
    desc: "Built a notes app with HTML, CSS, and JavaScript, enabling users to create, read, update, and delete notes. Features include filtering by category/status, title search, and persistent storage using LocalStorage.",
    stacks: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&w=600",
    GitHubLink: "https://github.com/dev-shakti/note-app-js",
    demoLink: "https://note-app-js-seven.vercel.app",
  },
  {
    title: "Hulu UI Clone",
    desc: "Developed a Hulu-inspired responsive website with Flexbox and CSS Grid for fluid layouts. Includes dynamic UI elements and mobile-friendly design.",
    stacks: ["HTML5", "CSS3", "JavaScript"],
    image: "/assets/hulu-clone.png",
    GitHubLink: "https://github.com/dev-shakti/Hulu-clone",
    demoLink: "https://hulu-clone-theta-azure.vercel.app",
  },
];

export default function Works() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <section id="works" className="px-6 py-12 md:py-16 w-full">
      <div ref={ref} className="w-full max-w-7xl mx-auto">
        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          className="text-center mb-4 py-2 font-semibold text-3xl lg:text-4xl tracking-tight leading-tight relative after:content-[''] after:w-20 after:h-1 after:bg-blue-600 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:rounded-full"
        >
          Projects
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          className="text-center mb-8 text-lg font-semibold text-gray-700 tracking-tight leading-tight"
        >
          Some of my latest projects
        </motion.p>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.4 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 mt-8"
        >
          {works.map((work, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6 },
                },
              }}
            >
              <Card className="rounded-xl group shadow-lg hover:shadow-2xl bg-white cursor-pointer overflow-hidden h-[320px] w-full">
                <CardContent className="p-0 h-full relative">
                  {/* Scrollable Image Container (no visible scrollbar) */}
                  <div className="absolute inset-0 overflow-y-auto no-scrollbar">
                    <Image
                      src={work.image}
                      fill
                      alt={work.title}
                      className="object-cover object-top"
                      unoptimized={true}
                    />
                  </div>

                  {/* Overlay - Fixed position with hidden scroll */}
                  <div className="absolute inset-0 bg-slate-900/90 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-y-auto no-scrollbar p-6 flex flex-col">
                    {/* Content remains the same */}
                    <h4 className="text-lg font-semibold text-gray-100 mb-2">
                      {work.title}
                    </h4>
                    <p className="text-sm text-gray-300 mb-4">{work.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {work.stacks.map((stack, i) => (
                        <div
                          key={i}
                          className="text-xs px-2 py-1 rounded-md bg-gray-700 text-gray-200"
                        >
                          {stack}
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto flex gap-3">
                      <Button asChild>
                        <a
                          href={work.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo of ${work.title} (opens in new tab)`}
                        >
                          View Demo
                        </a>
                      </Button>
                      <Button variant="secondary" asChild>
                        <a
                          href={work.GitHubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${work.title} source code on GitHub (opens in new tab)`}
                        >
                          View GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
