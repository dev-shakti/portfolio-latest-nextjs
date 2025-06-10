"use client";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex-1 px-6 py-12 w-full h-full overflow-hidden bg-background">
      <motion.div
        className="w-full h-full max-w-7xl mx-auto flex flex-col justify-end md:justify-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
          Hello, I'm Sakti Sumant Das
        </h1>
        {/* Typing Effect */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-blue-600 mt-2">
          <Typewriter
            words={[
              "Full Stack Developer",
              "MERN Stack Developer",
              "Frontend Developer",
              "ReactJS Developer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p className="mt-3 text-base md:text-lg text-muted-foreground tracking-tight leading-relaxed max-w-2xl">
          Passionate Full stack developer with expertise in building scalable
          and modern web applications. Experienced in working with front-end and
          back-end technologies, ensuring seamless user experiences and
          high-performance solutions.
        </p>

        {/* button groups */}
        <div className="flex items-center space-x-6 mt-6">
          <Button
            className="px-5 py-3 text-lg bg-blue-600 hover:bg-blue-500 text-foreground hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="#works">Hire Me</a>
          </Button>
          <Button
          asChild
            variant="outline"
            className="px-5 py-3 text-lg flex items-center gap-2 group hover:text-blue-500 hover:border hover:border-blue-500 hover:scale-105 transition-all duration-300"
          >
            <a
               href="/SAKTI_SUMANT_DAS_RESUME.pdf"
               download="SAKTI_SUMANT_DAS_RESUME.pdf"
              className="flex items-center gap-2" 
            >
              Resume
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
            </a>
          </Button>
        </div>

        {/* Social Icons with Next.js Link */}
        <div className="flex items-center space-x-6 mt-10">
          <a
            href="https://www.linkedin.com/in/sakti-sumant-das"
            target="_blank"
            rel="noopener noreferrer"
             className="rounded-full p-2 flex justify-center items-center bg-muted/70 hover:bg-muted transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-muted-foreground hover:text-blue-600 hover:scale-110 transition-all duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm4 16h3v-7h-3v7zm1.5-8.25a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zM14 19h3v-4.5c0-1.5-.5-2.5-2-2.5s-2 .96-2 2.5V19z" />
            </svg>
          </a>

          <a
            href="https://github.com/dev-shakti"
            target="_blank"
            rel="noopener noreferrer"
             className="rounded-full p-2 flex justify-center items-center bg-muted/70 hover:bg-muted transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-muted-foreground hover:text-black hover:scale-110 transition-all duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.478 2 12c0 4.418 2.865 8.167 6.839 9.49.5.09.682-.216.682-.48 0-.24-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.455-1.155-1.11-1.462-1.11-1.462-.908-.62.07-.607.07-.607 1.004.071 1.533 1.032 1.533 1.032.892 1.529 2.341 1.088 2.91.832.092-.646.35-1.088.636-1.34-2.22-.254-4.555-1.11-4.555-4.945 0-1.092.39-1.985 1.03-2.683-.103-.253-.447-1.274.097-2.654 0 0 .84-.27 2.75 1.024A9.564 9.564 0 0 1 12 6.78c.85.004 1.705.115 2.504.338 1.91-1.294 2.75-1.024 2.75-1.024.545 1.38.2 2.4.097 2.654.64.698 1.03 1.591 1.03 2.683 0 3.845-2.34 4.69-4.566 4.938.36.308.68.918.68 1.852 0 1.336-.012 2.42-.012 2.75 0 .267.18.575.688.476A10.003 10.003 0 0 0 22 12c0-5.522-4.477-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            href="mailto:mailto:shakti.20k@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 flex justify-center items-center bg-muted/70 hover:bg-muted transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-muted-foreground hover:text-red-600 hover:scale-110 transition-all duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm3.5 1.5v9l6.5-4.5-6.5-4.5zm7.5 4.5 6.5 4.5v-9l-6.5 4.5zm-1 1.5-6.5 4.5h13l-6.5-4.5z" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
