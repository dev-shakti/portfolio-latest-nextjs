import Header from "@/components/header";
import Hero from "@/components/hero";
import Image from "next/image";
import Skills from "../components/skills";
import Works from "@/components/works";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col bg-gradient-to-r from-slate-100 to-blue-100">
        <Header />
        <Hero />
      </div>
      <Skills />
      <Works/>
    </>
  );
}
