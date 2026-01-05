"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import logoService from "../assets/brand2.png";
import backgroundService from "../assets/servicemoti.png";
import logoHealth from "../assets/brand2.png";
import backgroundHealth from "../assets/come_up_with_a_backg-225172.png";

export default function Products() {
  return (
    <section id="products" className="bg-gray-50 py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section title */}
       <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
  Our Products
</h2>
<p className="mt-4 max-w-2xl text-gray-600 text-lg">
  Here are some of the applications we have built to help businesses
  streamline operations, improve efficiency and deliver better customer
  experiences.
</p>


        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProductCard
            title="Service Moti"
            description="Service-Moti is an application that helps garage owners digitally manage their operations. It enables garage registration, client and mechanic management, digital service records, and automated service reminders—improving efficiency, customer communication, and service reliability."
            background={backgroundService}
            logo={logoService}
            href="/servicemoti"
          />

   
          <ProductCard
            title="Ctirde"
            description="A wellness platform responsible for employee wellbeing programs, benefits, and engagement.

 A wellness solution that improves participation and morale, and is easy to roll out."
            background={backgroundHealth}
            logo={logoHealth}
            href="/ctride"
          />
          
        </div>
      </div>
    </section>
  );
}

/* =======================
   Product Card Component
   ======================= */

function ProductCard({
  title,
  description,
  background,
  logo,
  href,
}: {
  title: string;
  description: string;
  background: StaticImageData;
  logo: StaticImageData;
  href: string;
}) {
  return (
    <div className="relative h-[440px] rounded-2xl overflow-hidden group">
      {/* Background image */}
      <Image
        src={background}
        alt={`${title} background`}
        fill
        priority
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />

      {/* Overlay (lighter so UI shows through) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full p-8 flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 shadow-md">
            <Image
              src={logo}
              alt={`${title} logo`}
              height={32}
              className="w-auto h-8 object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-semibold text-white mb-4">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white/85 leading-relaxed max-w-md">
            {description}
          </p>
        </div>

        {/* CTA */}
{/* CTA */}
<Link
  href={href}
  className="
    inline-flex items-center gap-2
    rounded-full
    bg-gradient-to-r from-white-500 to-purple-400
    px-4 py-2.5
    text-sm font-semibold
    text-white
    shadow-md shadow-purple-500/30
    transition-all duration-300
    hover:shadow-lg hover:shadow-purple-500/40
    hover:scale-[1.03]
    group
  "
>
  Learn more
  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
</Link>


      </div>
    </div>
  );
}
