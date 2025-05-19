"use client";

import { Bento } from "@/components/Bento";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, ExternalLink } from "lucide-react";
import { Projects } from "../const/const"
import Link from "next/link";
import Header from "@/components/Header";

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
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a passionate front-end developer with a keen eye for design and a love for creating beautiful, responsive web applications. I specialize in React, Next.js, and modern web technologies to build exceptional user experiences.
              </p>
            </div>
            <div className="relative aspect-square">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
                  alt="Raphael Luis"
                  className="rounded-2xl object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12">Recent Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={project.link} className="block">
                  <div className="relative aspect-video mb-4 overflow-hidden rounded-xl  ">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-contain  rounded-xl w-full h-full group-hover:scale-110 transition-transform duration-500 "
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    {project.title}
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto bg-secondary/30 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "React", "Next.js", "TypeScript", "Tailwind CSS",
              "JavaScript", "HTML/CSS", "Git", "Responsive Design"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="p-4 bg-background rounded-xl text-center"
              >
                <p className="font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Let&apos;s Connect</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I&apos;m always open to new opportunities and collaborations.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="mailto:raphluis11@gmail.com"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}