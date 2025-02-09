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
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { path: "#", menu: "Home" },
  { path: "#about", menu: "About us" },
  { path: "#skills", menu: "Skills" },
  { path: "#works", menu: "Works" },
  { path: "#contact", menu: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full min-h-14 border-b p-4 md:p-6">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
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

        <Button className="hidden md:inline-flex px-5 py-3 text-lg bg-blue-600 hover:bg-blue-500 hover:scale-105 transition-all ease-in-out duration-300">Hire Me</Button>
         
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
            <Button className="w-full px-5 py-3 text-lg bg-blue-600 hover:bg-blue-500 transition-all ease-in-out duration-300">Hire Me</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
