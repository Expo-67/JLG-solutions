"use client";

import Image from "next/image";
import { Target, Rocket, Users, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <section  className="bg-white">
      

      {/* STORY */}
      <div className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              About-us
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              We started with a simple belief: technology should solve real
              problems, not just look good. From our very first product, we’ve
              focused on building systems that are scalable, intuitive, and
              impactful.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Today, we partner with founders, teams, and organizations to
              design, build, and grow digital products — from MVPs to
              production-ready platforms.
            </p>
          </div>

          {/* Image */}
         
        </div>
      </div>

      

      {/* HOW WE WORK */}
      <div className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-gray-900">
            How We Work
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Step
              number="01"
              title="Discover"
              text="We understand your vision, users, and business goals."
            />
            <Step
              number="02"
              title="Design & Build"
              text="We design intuitive experiences and engineer scalable systems."
            />
            <Step
              number="03"
              title="Launch & Grow"
              text="We ship, iterate, and optimize for long-term success."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* COMPONENTS */

function ValueCard({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 p-6 backdrop-blur">
      <Icon className="h-6 w-6 text-violet-400" />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-300">{text}</p>
    </div>
  );
}

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
      <p className="mt-2 text-sm text-gray-600">{text}</p>
    </div>
  );
}
