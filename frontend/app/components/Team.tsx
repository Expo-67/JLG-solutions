"use client";

import Image, { StaticImageData } from "next/image";
import { Linkedin, Twitter, ArrowUpRight } from "lucide-react";

import Lily from "../assets/lily6.jpeg";
import James from "../assets/compressed.jpg";
import Godson from "../assets/godson2.jpeg";

type TeamMember = {
  name: string;
  role: string;
  image: StaticImageData;
};

const team: TeamMember[] = [

    {
    name: "Lillian Mshai Kalela",
    role: "Global Co-founder & Growth Lead-Partnerships and Development",
    image: Lily,
  },
  {
    name: "James Kinungi Ndungu",
    role: "Global Co-founder & Tech Lead",
    image: James,
  },
  
  {
    name: "Godson Cirhuza Katoto",
    role: "Global Co-founder & Growth Lead -Strategy and Operations",
    image: Godson,
  },
];

export default function TeamPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 py-20">
      {/* Header */}
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Team Behind Our Vision
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Meet the founders building meaningful digital products.
        </p>
      </div>

      {/* Team Grid */}
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.name}
            className="group relative overflow-hidden rounded-3xl bg-black"
          >
            {/* Image */}
            <Image
              src={member.image}
              alt={member.name}
              className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />

            {/* Glass Overlay */}
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/10 p-5 backdrop-blur-xl">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-200">{member.role}</p>
                </div>

                <ArrowUpRight className="h-5 w-5 text-white opacity-70" />
              </div>
              
            </div>
          </div>
        ))}
      </div>

    
      
    </section>
  );
}
