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
import { ModeToggle } from "../mode-toggle";

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
        show ? "bg-muted" : "bg-transparent"
      } fixed top-0  w-full min-h-14 p-4 md:p-6 z-50 transition-all duration-300`}
    >
      <motion.div
        className="w-full max-w-7xl mx-auto flex justify-between items-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeIn" }}
      >
        <h2 className="text-2xl lg:text-3xl font-bold flex items-center gap-1">
          <span className="bg-blue-600 text-background px-2 py-1 rounded">
            Dev
          </span>
          <span className="hover:text-blue-600 text-foreground transition-colors">
            Sakti
          </span>
        </h2>

        {/* menu items */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((menuItem) => (
            <li
              key={menuItem.menu}
              className="text-foreground hover:scale-105 hover:text-blue-600 transition-all ease-in-out duration-300"
            >
              <a href={menuItem.path}>{menuItem.menu}</a>
            </li>
          ))}
        </ul>
        <ModeToggle />

        {/* mobile menu */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <div className="md:hidden">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent border border-boder  hover:bg-muted transition-all duration-300"
              >
                <MenuIcon className="w-6 h-6 text-foreground" />
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <SheetHeader>
              <SheetTitle className="text-xl font-semibold flex items-center gap-1">
                <span className="bg-blue-600 text-background px-2 py-1 rounded">
                  Dev
                </span>
                <span className="hover:text-blue-600 text-foreground transition-colors">
                  Sakti
                </span>
              </SheetTitle>
            </SheetHeader>
            <ul className="mt-4 space-y-4 flex-1">
              {menuItems.map((menuItem) => (
                <li key={menuItem.menu} className="text-medium">
                  <a
                    href={menuItem.path}
                    onClick={() => setMenuOpen(false)}
                    className="block p-2 text-foreground hover:bg-muted/30 hover:pl-3 rounded-md transition-all ease-in-out duration-300"
                  >
                    {menuItem.menu}
                  </a>
                </li>
              ))}
            </ul>
            <SheetFooter>
              <Button className="w-full px-4 py-2 rounded-lg text-foreground bg-blue-600 hover:bg-blue-700 transition-all ease-in-out duration-300">
                Hire Me
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </motion.div>
    </header>
  );
}
