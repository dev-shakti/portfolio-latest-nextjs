"use client";
import React, { useRef, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { motion, useInView } from "framer-motion";

interface FormType {
  name: string;
  email: string;
  message: string;
}

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormType>(initialFormData);
    const ref = useRef<null>(null);
    const isInView = useInView(ref, { once: false, margin: "-50px" });

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="bg-background px-6 py-12 md:py-16 lg:pb-24  w-full overflow-x-hidden">
      <div ref={ref} className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Contact Info */}
        <motion.div 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
            hidden: { opacity: 0, x: -100 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
        }}
       >
          <h2 className="text-3xl font-semibold text-foreground">Contact Us</h2>
          <p className="text-muted-foreground mt-3">
            Feel free to reach out for collaborations or any inquiries.
          </p>
          <div className="space-y-4 mt-6">
            <p className="text-muted-foreground">
              <strong>Email: </strong> shakti.20k@gmail.com
            </p>
            <p className="text-muted-foreground">
              <strong>Phone: </strong> +91-9326856937
            </p>
            <p className="text-muted-foreground">
              <strong>Address: </strong> Dadabadi, Puri, Odisha
            </p>
          </div>
        </motion.div>
        {/* Right Section - Contact Form */}
        <motion.form
         initial="hidden"
         animate={isInView ? "visible" : "hidden"}
         variants={{
             hidden: { opacity: 0, x: 100 },
             visible: {
               opacity: 1,
               x: 0,
               transition: { duration: 0.7, ease: "easeOut" },
             },
         }}
          onSubmit={handleFormSubmit}
          className=" bg-muted/10 p-6 shadow-lg rounded-xl"
        >
          <div className="space-y-4">
            <div>
              <Label className="block  font-medium">Name</Label>
              <Input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border border-border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <Label className="block font-medium">Email</Label>
              <Input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border border-border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <Label className="block font-medium">Message</Label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border resize-none border-border rounded-lg focus:ring-2 focus:ring-blue-500 bg-transparent"
              />
            </div>
            <Button
              type="submit"
              className="w-full px-4 py-2 text-foreground rounded-lg bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all ease-in-out duration-300"
            >
              Submit
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
