"use client";

import { Bento } from "@/components/Bento";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, ExternalLink } from "lucide-react";
import { Projects } from "../const/const"
import Link from "next/link";
import Header from "@/components/Header";
import { AboutMe } from "@/components/AboutMe";
import { RecentProjects } from "@/components/RecentProjects";
import Skills from "@/components/Skils";
import Footer from "@/components/Footer";
import { Formation } from "@/components/Formation";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(30deg,var(--primary)_12%,transparent_12.5%,transparent_87%,var(--primary)_87.5%,var(--primary))] opacity-[0.03]" />

        <div className="relative container mx-auto px-4 py-20 min-h-screen flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <Header/>
            <Bento />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutMe />
      {/*Formation*/}
      <Formation/>
      {/* Projects Section */}
        <RecentProjects/>
      {/* Skills Section */}
        <Skills/>
      {/* Contact Section */}
      <Footer/>
    </main>
  );
}