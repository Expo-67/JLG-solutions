"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.jpeg";

export default function Header(): React.ReactElement {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="bg-gradient-to-b from-black/40 via-black/30 to-transparent backdrop-blur-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/20">
                <Image src={logo} alt="Logo" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">JLG</span>
                <span className="text-lg font-semibold text-accent">
                  SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-16">
            <Link href="/" className="text-white/80 hover:text-white">
                Home
              </Link>
              <Link href="/#products" className="text-white/80 hover:text-white">
                 Products
              </Link>
              
              <Link href="/#services" className="text-white/80 hover:text-white">
                 Our Solutions
              </Link>

              <Link href="/Impact" className="text-white/80 hover:text-white">
                Learn About Our Impact
              </Link>

              <Link href="/about-us" className="text-white/80 hover:text-white">
                Our Story
              </Link>
              
              <Link href="/#team" className="text-white/80 hover:text-white">
                Our Team
              </Link>

              <Link href="/#contact" className="text-white/80 hover:text-white">
                Reach Out
              </Link>
            </nav>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden mt-4 rounded-xl bg-black/80 backdrop-blur p-4 space-y-4">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block text-white"
              >
                Home
              </Link>
              <Link
                href="/#products"
                onClick={() => setOpen(false)}
                className="block text-white"
              >
                Our Products
              </Link>
      
              <Link
                href="/#services"
                onClick={() => setOpen(false)}
                className="block text-white"
              >
                Explore Our Solutions
              </Link>
              <Link
                href="/Impact"
                onClick={() => setOpen(false)}
                className="block text-white"
              >
                Learn About Our Impact
              </Link>
              <Link
                href="/about-us"
                onClick={() => setOpen(false)}
                className="block text-white"
              >
                Our Story
              </Link>
              <Link
                href="/#team"
                onClick={() => setOpen(false)}
                className="block text-white"
              >
                Our Team
              </Link>
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block text-white"
              >
                Reach Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
