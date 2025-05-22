import React from "react"
import { motion } from "framer-motion";


export function AboutMe() {
    return (
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
                  src="/image.png"
                  alt="Raphael Luis"
                  className="rounded-2xl object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

    )
}