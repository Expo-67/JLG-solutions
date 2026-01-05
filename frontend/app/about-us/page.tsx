"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Mail } from "lucide-react";

import about from "../assets/logo.jpeg";
import teamPhoto from "../assets/build.jpeg";

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

export default function AboutUsPage() {
  return (
    <section id="about-us" className="bg-white">
      {/* ABOUT JLG */}
      <div className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">About Us</h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              At <span className="font-semibold">JLG Solutions Ltd</span>, we
              create smart, practical technology that solves everyday challenges
              and makes a real difference in people’s lives.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our solutions are simple, scalable, and easy to adopt—empowering
              businesses to grow while delivering measurable, lasting impact.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              JLG Solutions Ltd is committed to building technology that works
              for people, every day.
            </p>
          </div>

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
          <h2 className="text-3xl font-semibold text-gray-900">Our Team</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We are a multidisciplinary team combining technology, strategy and
            partnerships to build solutions that create real-world impact.
          </p>

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
                <Image
                  src={founder.image}
                  alt={founder.name}
                  className="h-[380px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

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
    </section>
  );
}
