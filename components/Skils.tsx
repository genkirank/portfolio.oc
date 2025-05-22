import React from "react"
import { motion } from "framer-motion";
export default function Skills() {
    return (
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
    )
}