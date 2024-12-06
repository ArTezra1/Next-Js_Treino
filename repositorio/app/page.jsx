"use client"

import { navItems } from "@/data/items";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Client from "@/components/Client";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <FloatingNav
      navItems={navItems}
      ></FloatingNav>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Client></Client>
    </div>
  );
}
