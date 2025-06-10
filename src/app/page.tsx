import Header from "@/components/header";
import Hero from "@/components/hero";
import Image from "next/image";
import Skills from "../components/skills";
import Works from "@/components/works";
import Contact from "@/components/contact";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <Header />
        <Hero />
      </div>
      <Skills />
      <Works/>
      <Contact/>
      <FooterSection/>
    </>
  );
}
