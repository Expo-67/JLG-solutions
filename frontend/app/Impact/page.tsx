"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Import logos
import StramcoLogo from "../assets/stramco - Copy.png";
import RaponiLogo from "../assets/raponi.jpg";
 import AccountabilityBuddiesLogo from "../assets/Accountabilty.jpg";
// import GenCodeLogo from "../assets/newgen.jpeg"; // Make sure you have this logo in assets

type ImpactItem = {
  name: string;
  logo: StaticImageData;
  description: string;
  impact?: string;
  link?: string;
  inDevelopment?: boolean;
};

const impacts: ImpactItem[] = [
  {
  name: "Stramco solutions limited",
  logo: StramcoLogo,
  description:
    "A web application for an HR consultancy that publishes job openings and allows candidates to apply online, with a dedicated admin dashboard for managing listings.",
  impact:
    "Simplified the recruitment process, improved job visibility, and enabled efficient management of job postings and applications.",
  link: "https://stramcolimited.com",
},

  {
    name: "Raponi Gardens",
    logo: RaponiLogo,
    description:
      "A landscape architecture portfolio website showcasing clients worked with and completed projects.",
    impact:
      "Enhanced online presence, attracted new clients, and displayed completed projects beautifully.",
    link: "https://raponigardens.com",
  },
  {
    name: "Accountability Buddies",
    logo: AccountabilityBuddiesLogo,
    description:
      "A web app for posting scholarship opportunities and connecting students to funding options.",
    inDevelopment: true,
  },
//   {
//     name: "Gen Code",
//     logo: GenCodeLogo,
//     description:
//       "A school platform for teaching kids AI and programming, introducing them to digital skills early.",
//     inDevelopment: true,
//   },
];

export default function ImpactPage() {
  return (
    <section id="impact" className="bg-gray-50 px-6 py-20 min-h-screen">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          Our Impact
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We build technology that creates real change. Here are some businesses
          we've empowered with our solutions.
        </p>
      </div>

      {/* Impact Cards */}
      <div className="mt-16 mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {impacts.map((item) => (
          <div
            key={item.name}
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Logo */}
            <div className="flex justify-center">
              <Image
                src={item.logo}
                alt={`${item.name} logo`}
                className="h-24 w-auto object-contain"
                priority
              />
            </div>

            {/* Name */}
            <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
              {item.name}
            </h3>

            {/* Description */}
            <p className="mt-3 text-gray-600 text-sm text-center">
              {item.description}
            </p>

            {/* Impact */}
            {item.impact && !item.inDevelopment && (
              <p className="mt-4 text-gray-700 font-medium text-center">
                Impact: {item.impact}
              </p>
            )}

            {/* Link / Coming Soon */}
            <div className="mt-6 flex justify-center">
              {item.inDevelopment ? (
                <span className="rounded-full bg-yellow-400 px-6 py-2 text-white font-semibold shadow-md">
                  In Development
                </span>
              ) : (
                <Link
                  href={item.link!}
                  target="_blank"
                  className="rounded-full bg-gradient-to-r from-purple-200 to-purple-400 px-6 py-2 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300"
                >
                  Explore Project
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
