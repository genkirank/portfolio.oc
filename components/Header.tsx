"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ChevronDown, ExternalLink } from "lucide-react";
import Link from "next/link";


export default function Header() {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative w-48 h-48 md:w-64 md:h-64"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/0 animate-pulse" />
                <img
                  src="/image.png"
                  alt="Raphael Luis"
                  className="relative rounded-3xl  object-cover w-full h-full shadow-xl"
                />
              </motion.div>

              <div className="text-center md:text-left flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="text-xl text-primary/80 font-medium mb-4">Welcome to my portfolio</h2>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">Raphael Luis</h1>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-8">Front-end Developer</p>
                  <p className="text-lg text-muted-foreground max-w-2xl mb-8">
                    Crafting beautiful and intuitive web experiences with modern technologies.
                    Specialized in React, Next.js, and responsive design.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex gap-6 justify-center md:justify-start mb-8"
                >
                  <Link
                    href="https://github.com/genkirank"
                    className="hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                  >
                    <Github size={24} />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    className="hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                  >
                    <Linkedin size={24} />
                  </Link>
                  <Link
                    href="mailto:raphluis11@gmail.com"
                    className="hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                  >
                    <Mail size={24} />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                  >
                    Let&apos;s work together
                    <ChevronDown className="animate-bounce" size={20} />
                  </Link>
                </motion.div>
              </div>
            </div>
    )
}