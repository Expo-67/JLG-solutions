"use client";

import Image from "next/image";
import { Target, Rocket, Users, ShieldCheck } from "lucide-react";
import about from "../assets/logo.jpeg";

export default function AboutPage() {
  return (
    <section id="#" className="bg-white">
      

      {/* HOW WE WORK */}
      <div className="px-6 py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-gray-900">
            How We Work
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Step
              number="01"
              title="Understand the Problem"
              text="We take time to understand real challenges, users and day-to-day workflows before building solutions."
            />
            <Step
              number="02"
              title="Design & Build Practical Solutions"
              text="We design simple, intuitive experiences and build scalable solutions that are easy to use and maintain."
            />
            <Step
              number="03"
              title="Launch, Learn & Improve"
              text="We launch thoughtfully, gather real feedback and continuously improve to ensure lasting impact."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* COMPONENTS */

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <span className="text-sm font-semibold text-violet-600">
        {number}
      </span>
      <h3 className="mt-2 text-lg font-semibold text-gray-900">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
