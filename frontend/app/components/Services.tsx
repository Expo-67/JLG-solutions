"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Wrench,
  Dumbbell,
  Code2,
  ArrowRight,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    title: "Mobile App Development",
    description:
      "High-performance Android and iOS applications designed for scale, speed, and great user experience.",
    icon: <Smartphone size={26} />,
    slug: "mobile-app-development",
    featured: true,
  },
  {
    title: "Website & Web App Development",
    description:
      "Modern websites and web applications built with cutting-edge technologies and best practices.",
    icon: <Globe size={26} />,
    slug: "web-development",
  },
  {
    title: "Service-Moti",
    description:
      "A smart web-based garage management system for digitizing vehicle service operations end-to-end.",
    icon: <Wrench size={26} />,
    slug: "service-moti",
  },
  {
    title: "Ctride",
    description:
      "A comprehensive fitness and wellness application for tracking workouts, nutrition, and progress.",
    icon: <Dumbbell size={26} />,
    slug: "ctrid",
  },
  {
    title: "Custom Software Solutions",
    description:
      "Tailor-made software solutions designed to solve unique business challenges efficiently.",
    icon: <Code2 size={26} />,
    slug: "custom-software",
  },
];

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-[#F7F6EF] px-6 py-20 dark:bg-zinc-950">
      {/* Header */}
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Our Services
          </h1>
          <p className="mt-3 max-w-xl text-gray-600 dark:text-gray-400">
            We build digital products that help businesses operate smarter,
            scale faster, and deliver better experiences.
          </p>
        </div>

      
      </div>

      {/* Services Grid */}
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
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="block"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`group relative rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl ${
                service.featured
                  ? "bg-black text-white before:absolute before:inset-0 before:rounded-2xl before:bg-purple-400/20 before:blur-2xl before:content-['']"
                  : "bg-white text-gray-900 dark:bg-zinc-900 dark:text-white"
              }`}
            >
              {/* Icon */}
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
                  service.featured
                    ? "bg-white text-black"
                    : "bg-gray-100 text-gray-900 dark:bg-zinc-800 dark:text-white"
                }`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold">
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`mt-2 text-sm ${
                  service.featured
                    ? "text-gray-300"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {service.description}
              </p>

              {/* Learn More */}
              <div
                className={`mt-4 flex items-center gap-2 text-sm font-medium ${
                  service.featured
                    ? "text-purple-400"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                <span>Learn more</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
