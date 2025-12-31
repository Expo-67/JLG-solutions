"use client";

import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import Lily from "../assets/lily6.jpeg";
import James from "../assets/compressed.jpg";
import Godson from "../assets/godson3.jpeg";

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: StaticImageData;
};

const team: TeamMember[] = [
  {
    name: "Lillian Mshai Kalela",
    role: "Co-founder & Global Growth Lead (Partnerships & Development)",
    description:
      "Lillian leads partnerships, fundraising and global growth, ensuring JLG’s solutions reach the right communities and organizations.",
    image: Lily,
  },
  {
    name: "James Kinungi Ndungu",
    role: "Co-founder & Global Tech Lead",
    description:
      "James leads product architecture and engineering, turning real-world problems into scalable, reliable technology.",
    image: James,
  },
  {
    name: "Godson Cirhuza Katoto",
    role: "Co-founder & Global Growth Lead (Strategy & Operations)",
    description:
      "Godson drives strategy and operations, aligning products with user needs and ensuring smooth execution.",
    image: Godson,
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

      {/* Team Grid */}
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.name}
            className="group relative overflow-hidden rounded-3xl bg-black shadow-lg"
          >
            {/* Founder Image */}
            <Image
              src={member.image}
              alt={member.name}
              className="h-[480px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-x-4 bottom-6 rounded-2xl bg-black/40 p-4 backdrop-blur-md">
              <h3 className="text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-sm text-gray-200">{member.role}</p>
              <div className="mt-2 max-h-20 overflow-y-auto text-xs text-gray-300">
                {member.description}
              </div>
              <ArrowUpRight className="mt-2 h-5 w-5 text-white opacity-80 float-right" />
            </div>
          </div>
        ))}
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
