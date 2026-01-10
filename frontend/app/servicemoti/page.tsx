"use client";

import Image from "next/image";
import logo from "../assets/logo.jpeg";

export default function CtridePage() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
  
        <div className="flex justify-center mb-8">
          
        </div>

        {/* Badge */}
        <span className="inline-block mb-6 rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-700">
          Coming Soon
        </span>

        {/* Title */}
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">
          Service-moti        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 leading-relaxed">
          In development.
          <br />
          Stay tuned.
        </p>
      </div>
    </section>
  );
}
