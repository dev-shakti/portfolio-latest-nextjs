"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const works = [
  { image: "https://via.placeholder.com/300x200.png?text=Project+1" },
  { image: "https://via.placeholder.com/300x200.png?text=Project+2" },
  { image: "https://via.placeholder.com/300x200.png?text=Project+3" },
  { image: "https://via.placeholder.com/300x200.png?text=Project+4" },
  { image: "https://via.placeholder.com/300x200.png?text=Project+5" },
  { image: "https://via.placeholder.com/300x200.png?text=Project+6" },
  { image: "https://via.placeholder.com/300x200.png?text=Project+7" },
  { image: "https://via.placeholder.com/300x200.png?text=Project+8" },
];

export default function Works() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <section className="px-6 py-12 md:py-16 w-full">
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
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"
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
                  transition: { duration: 0.5 },
                },
              }}
            >
              <Card className="rounded-xl shadow-lg hover:shadow-2xl p-6 bg-white cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden">
                <CardContent className="p-0">
                  <div className="w-full h-48 relative">
                    <Image
                      src="https://picsum.photos/300/200"
                      fill
                      alt="Project Image"
                      className="object-cover"
                      unoptimized={true} // ⬅️ Disable optimization
                    />
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
