"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const menuItems = [
  { path: "#", menu: "Home" },
  { path: "#skills", menu: "Skills" },
  { path: "#works", menu: "Works" },
  { path: "#contact", menu: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      console.log("Scroll Y:", window.scrollY);
      setShow(window.scrollY > 150); // 🔼 Increased threshold
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        show ? "bg-white shadow-xl z-50" : "z-50"
      } fixed top-0  w-full min-h-14 p-4 md:p-6 bg-transparent`}
    >
      <motion.div
        className="w-full max-w-7xl mx-auto flex justify-between items-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeIn" }}
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-blue-600">
          Portfolio
        </h2>
        {/* menu items */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((menuItem) => (
            <li
              key={menuItem.menu}
              className="text-slate-800 hover:scale-105 hover:text-blue-600 transition-all ease-in-out duration-300"
            >
              <a href={menuItem.path}>{menuItem.menu}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">

          <Button asChild className="hidden md:inline-flex px-4 py-2 rounded-lg  bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all ease-in-out duration-300">
           <a href="#works">Hire Me</a> 
          </Button>
        </div>

        {/* mobile menu */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <div className="md:hidden">
              <Button
                variant="outline"
                size="sm"
                className="rounded-md bg-transparent border border-gray-400 p-2 hover:bg-gray-200 transition-all duration-300"
              >
                <MenuIcon className="w-6 h-6 text-gray-800" />
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <SheetHeader>
              <SheetTitle className="p-2 text-2xl font-semibold">
                Portfolio
              </SheetTitle>
            </SheetHeader>
            <ul className="mt-4 space-y-4 flex-1">
              {menuItems.map((menuItem) => (
                <li key={menuItem.menu} className="text-lg">
                  <a
                    href={menuItem.path}
                    onClick={() => setMenuOpen(false)}
                    className="block p-2 hover:bg-gray-100 hover:pl-1 rounded-md transition-all ease-in-out duration-300"
                  >
                    {menuItem.menu}
                  </a>
                </li>
              ))}
            </ul>
            <SheetFooter>
              <Button className="w-full px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all ease-in-out duration-300">
                Hire Me
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </motion.div>
    </header>
  );
}
