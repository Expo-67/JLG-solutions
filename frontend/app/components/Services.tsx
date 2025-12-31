"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Smartphone, Globe, Code2 } from "lucide-react";

type Solution = {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  featured?: boolean;
};

const solutions: Solution[] = [
  {
    title: "Practical & Scalable Technology",
    description:
      "We develop practical and scalable technology that addresses everyday challenges. Our people centered solutions are built for real world impact, creating opportunities for growth and sustainable returns.",
    icon: <Smartphone size={26} />,
    slug: "practical-scalable-technology",
    featured: true,
  },
  {
    title: "Smart Solutions for Everyday Work",
    description:
      "We provide smart, practical technology designed to solve real everyday problems. Our solutions make work easier, faster and more reliable helping you succeed every day.",
    icon: <Globe size={26} />,
    slug: "smart-everyday-solutions",
  },
  {
    title: "People Centered Impact Solutions",
    description:
      "We build technology that serves real people and meets everyday needs. Our solutions are simple, impactful and designed to improve lives in meaningful ways.",
    icon: <Code2 size={26} />,
    slug: "people-centered-solutions",
  },
];

export default function ServicesPage() {
  return (
    <section
      id="services"
      className="min-h-screen bg-[#F7F6EF] px-6 py-20 dark:bg-zinc-950"
    >
      {/* Header */}
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Explore Our Solutions
        </h1>
        <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
          We design and build people-centered technology that solves real
          problems, supports growth and delivers meaningful impact.
        </p>
      </div>

      {/* Solutions Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3"
      >
        {solutions.map((solution) => (
          <Link
            key={solution.slug}
            href={`/services/${solution.slug}`}
            className="block"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className={`relative rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl ${
                solution.featured
                  ? "bg-black text-white ring-1 ring-purple-500/20"
                  : "bg-white text-gray-900 dark:bg-zinc-900 dark:text-white"
              }`}
            >
              {/* Icon */}
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
                  solution.featured
                    ? "bg-white text-black"
                    : "bg-gray-100 text-gray-900 dark:bg-zinc-800 dark:text-white"
                }`}
              >
                {solution.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold">
                {solution.title}
              </h3>

              {/* Description */}
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  solution.featured
                    ? "text-gray-300"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {solution.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
