import React from 'react';
import Image from 'next/image';
import logo from "../assets/logo.jpeg"
import Link from 'next/link';

export default function Header(): React.ReactElement {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Line/Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      
      {/* Header Content */}
      <div className="bg-gradient-to-b from-black/40 via-black/30 to-transparent backdrop-blur-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Far left aligned */}
            <div className="flex items-center ml-0">
              <Link href="/" className="flex items-center space-x-3">
                {/* Logo Image Container */}
                <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/20">
                  <Image
                    src={logo}
                    alt="JLG Solutions Logo"
                    fill
                    className="object-cover"
                    priority
                    sizes="48px"
                  />
                </div>
                
                {/* Logo Text - Stacked */}
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white leading-tight tracking-wide">
                    JLG
                  </span>
                  <span className="text-lg font-semibold text-accent leading-tight tracking-wider">
                    SOLUTIONS
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Far right aligned */}
            <nav className="hidden md:flex items-center space-x-8 mr-0">
              <div className="flex items-center space-x-12">
                <Link 
                  href="#" 
                  className="text-white/80 hover:text-white font-medium transition-colors duration-200"
                >
                  Services
                </Link>
                <Link 
                  href="#" 
                  className="text-white/80 hover:text-white font-medium transition-colors duration-200"
                >
                  About
                </Link>
                <Link 
                  href="#" 
                  className="text-white/80 hover:text-white font-medium transition-colors duration-200"
                >
                  Team
                </Link>
                <Link 
                  href="#" 
                  className="text-white/80 hover:text-white font-medium transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
              
              {/* Separator line */}
              <div className="h-6 w-px bg-white/30" />
              
             
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white p-2 rounded-lg hover:bg-white/10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}