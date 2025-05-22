import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
    return (
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
    )
}