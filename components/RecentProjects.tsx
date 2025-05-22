import React from "react"
import { motion } from "framer-motion"
import { Projects } from "@/const/const"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
export function RecentProjects() {
    return (
        <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12">Recent Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center justify-items-center">
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
                <Link href={project.link ?? "#"} className="block">
                  <div className="relative aspect-video mb-4 overflow-hidden rounded-xl  ">
                    <img
                      src={project.image}
                      alt={project.title}
                      className=" md:object-fill  object-top rounded-xl w-full h-full group-hover:scale-110 transition-transform duration-500 "
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
    )
}
