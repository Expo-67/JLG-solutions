"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Mail } from "lucide-react";

import Lily from "../assets/lily6.jpeg";
import James from "../assets/compressed.jpg";
import Godson from "../assets/godson2.jpeg";

type Founder = {
  name: string;
  role: string;
  description: string;
  image: StaticImageData;
  social: {
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
};

const founders: Founder[] = [
  {
    name: "Lillian Mshai Kalela",
    role: "Co-founder & Global Growth Lead (Partnerships & Development)",
    description:
      "Lillian leads partnerships, fundraising and global development initiatives, focusing on building relationships that expand impact and unlock long-term growth opportunities.",
    image: Lily,
    social: {
      linkedin: "https://www.linkedin.com/in/lillian-kalela-84927543/",
      instagram: "https://www.instagram.com/lilliankalela/",
      email: "mailto:mshaikalela@gmail.com",
    },
  },
  {
    name: "James Kinungi Ndungu",
    role: "Co-founder & Global Tech Lead",
    description:
      "James leads product architecture and engineering, translating real world problems into scalable, reliable technology that works in everyday environments.",
    image: James,
    social: {
      linkedin: "https://www.linkedin.com/in/james-ndungu-b406ab248/",
      instagram: "https://www.instagram.com/james_expo4/",
      email: "mailto:jamiendungu38@gmail.com",
    },
  },
  {
    name: "Godson Cirhuza Katoto",
    role: "Co-founder & Global Growth Lead (Strategy & Operations)",
    description:
      "Godson drives strategy and operations, ensuring ideas move from concept to execution while aligning products with real user and business needs.",
    image: Godson,
    social: {
      instagram: "https://www.instagram.com/mrkatoto/",
      email: "mailto:godsonkatoto@gmail.com",
      linkedin: "https://www.linkedin.com/mwlite/profile/me?trk=p_mwlite_profile_view-secondary_nav",
    },
  },
];

export default function TeamPage() {
  return (
    <section
      id="team"
      className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 py-20"
    >
      {/* Header */}
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Our Team
        </h1>
      </div>

      {/* FOUNDERS */}
      <div className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="group overflow-hidden rounded-3xl bg-black"
              >
                {/* Image */}
                <Image
                  src={founder.image}
                  alt={founder.name}
                  className="h-[380px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-gray-300">{founder.role}</p>

                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {founder.description}
                  </p>

                  {/* Social Icons */}
                  <div className="mt-4 flex gap-4 text-gray-300">
                    {founder.social.linkedin && (
                      <Link
                        href={founder.social.linkedin}
                        target="_blank"
                        aria-label={`${founder.name} LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5 hover:text-white transition" />
                      </Link>
                    )}

                    {founder.social.instagram && (
                      <Link
                        href={founder.social.instagram}
                        target="_blank"
                        aria-label={`${founder.name} Instagram`}
                      >
                        <Instagram className="h-5 w-5 hover:text-white transition" />
                      </Link>
                    )}

                    {founder.social.email && (
                      <Link
                        href={founder.social.email}
                        aria-label={`Email ${founder.name}`}
                      >
                        <Mail className="h-5 w-5 hover:text-white transition" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learn More Button */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/about-us"
          className="inline-block rounded-full bg-gray-600 px-8 py-3 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Learn More About the Team
        </Link>
      </div>
    </section>
  );
}
