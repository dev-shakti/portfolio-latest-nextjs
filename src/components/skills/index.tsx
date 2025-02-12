"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const skills = [
  { title: "HTML", image: "/assets/html.png" },
  { title: "CSS", image: "/assets/css.png" },
  { title: "JavaScript", image: "/assets/javascript.png" },
  { title: "NodeJS", image: "/assets/node.png" },
  { title: "ReactJs", image: "/assets/react.png" },
  { title: "Mongo DB", image: "/assets/mongo.png" },
  { title: "Tailwind CSS", image: "/assets/tailwind.png" },
  { title: "Firebase", image: "/assets/firebase.png" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once:false, margin: "-50px" });

  return (
    <section id="skills" className="px-6 py-12 md:py-16 w-full">
      {/* Wrapper for inView detection */}
      <div ref={ref} className="w-full max-w-7xl mx-auto">
        {/* Heading Animation */}
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
          className="text-center mb-8 py-1 font-semibold text-3xl lg:text-4xl tracking-tight leading-tight relative after:content-[''] after:w-20 after:h-1 after:bg-blue-600 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:rounded-full"
        >
          Skills
        </motion.h2>

        {/* Cards Grid Animation */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <Card className="rounded-xl shadow-lg hover:shadow-2xl p-6 bg-white cursor-pointer transition-all duration-300 hover:scale-105">
                <CardContent className="">
                  <div className="flex justify-center">
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="w-20 h-20 md:w-24 md:h-24 object-cover"
                    />
                  </div>
                  <h4 className="text-lg text-center font-semibold text-gray-700 tracking-tight leading-tight mt-5">
                    {skill.title}
                  </h4>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
