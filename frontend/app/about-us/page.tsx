"use client";

import Image, { StaticImageData } from "next/image";
import { Linkedin, Instagram, Mail } from "lucide-react";

import about from "../assets/logo.jpeg"; // team at work image
import teamPhoto from "../assets/build.jpeg"; // full team image

import Lily from "../assets/lily6.jpeg";
import James from "../assets/compressed.jpg";
import Godson from "../assets/godson2.jpeg";

type Founder = {
  name: string;
  role: string;
  description: string;
  image: StaticImageData;
};

const founders: Founder[] = [
  {
    name: "Lillian Mshai Kalela",
    role: "Co-founder & Global Growth Lead (Partnerships & Development)",
    description:
      "Lillian leads partnerships, fundraising and global development initiatives, focusing on building relationships that expand impact and unlock long-term growth opportunities.",
    image: Lily,
  },
  {
    name: "James Kinungi Ndungu",
    role: "Co-founder & Global Tech Lead",
    description:
      "James leads product architecture and engineering, translating real world problems into scalable, reliable technology that works in everyday environments.",
    image: James,
  },
  {
    name: "Godson Cirhuza Katoto",
    role: "Co-founder & Global Growth Lead (Strategy & Operations)",
    description:
      "Godson drives strategy and operations, ensuring ideas move from concept to execution while aligning products with real user and business needs.",
    image: Godson,
  },
];

export default function AboutUsPage() {
  return (
    <section id="about-us" className="bg-white">
      {/* ABOUT JLG */}
      <div className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              About Us
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              At <span className="font-semibold">JLG Solutions Ltd</span>, we
              create smart, practical technology that solves everyday challenges
              and makes a real difference in people’s lives. Our work is guided
              by a simple principle: technology should be useful, reliable, and
              built to work in the real world.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our solutions are designed to be simple, scalable, and easy to
              adopt—empowering businesses to grow, supporting communities, and
              delivering measurable, lasting impact. We focus on building tools
              that fit naturally into daily operations, not systems that add
              complexity.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether you are looking for innovative technology to grow your
              organization, practical solutions for everyday workflows, or
              products that drive social change, JLG Solutions Ltd is committed
              to building technology that works for people, every day.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-96 w-full overflow-hidden rounded-2xl">
            <Image
              src={about}
              alt="JLG Solutions team at work"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* OUR TEAM */}
      <div className="px-6 py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Our Team
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We are a multidisciplinary team combining technology, strategy and
            partnerships to build solutions that create real-world impact.
          </p>
    {/* OUR TEAM IMAGE */}
<div className="mt-12 w-full flex justify-center">
  <div className="w-full max-w-6xl max-h-[500px]">
    <Image
      src={teamPhoto}
      alt="JLG Solutions full team"
      className="w-full h-full object-contain"
      priority
    />
  </div>
</div>


         
        </div>
      </div>

      {/* FOUNDERS */}
      <div className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">
            Founders
          </h2>

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

                {/* Overlay */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {founder.role}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {founder.description}
                  </p>

                  {/* Social Icons */}
                  <div className="mt-4 flex gap-4 text-gray-300">
                    <Linkedin className="h-5 w-5 cursor-pointer hover:text-white" />
                    <Instagram className="h-5 w-5 cursor-pointer hover:text-white" />
                    <Mail className="h-5 w-5 cursor-pointer hover:text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
