import React from "react";
import { motion } from "framer-motion"

import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./ui/glowing-stars";

export function Formation() {
    return (
                <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">

             <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
            >
          <h2 className="text-3xl font-bold">Formation</h2>
        
    <div className="flex py-24 items-center justify-center antialiased w-full">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Formation Intégrateur Web – OpenClassrooms </GlowingStarsTitle>
                        <div className="flex justify-between items-end">
                            <div className="overflow-y-auto">
          <GlowingStarsDescription>
            Programme bac+2  pour maîtriser le développement front-end (HTML, CSS, JS, React, Redux).
12 projets professionnels, mentorat personnalisé, certification RNCP niveau 5.
                                </GlowingStarsDescription>
                                </div>
          <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            <Icon />
          </div>
        </div>
      </GlowingStarsBackgroundCard>
            </div>
                </motion.div>
        </section>
  );
}

const Icon = () => {
    return (
        <>
      <a href="https://openclassrooms.com/fr/paths/900-integrateur-web" target="_blank" rel="lien open class room ">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
    </a >
    </>
  );
};
