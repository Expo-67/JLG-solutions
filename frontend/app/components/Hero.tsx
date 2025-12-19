import React from "react";
import Image from "next/image";
import bgImage from "../assets/aiease_1766169226103.jpg";

export default function Hero(): React.ReactElement {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Actual Background Image */}
        <Image
          src={bgImage}
          alt="JLG Solutions background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/70" />

        {/* Extra color glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-dark/20" />

        {/* Animated shimmer lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" />
          <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-shimmer animation-delay-1000" />
          <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-dark to-transparent animate-shimmer animation-delay-2000" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-8">
            <span className="block">Building Digital</span>
            <span className="block mt-2 bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent">
              Solutions That Scale
            </span>
          </h1>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8" />

          {/* Mission */}
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light mb-12">
            JLG Solutions bridges the gap between business challenges and
            technological innovation — delivering scalable, future-ready
            digital products.
          </p>

          {/* CTA */}
          <div className="flex justify-center mb-16">
            <button className="group relative bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <span className="relative z-10 flex items-center gap-3">
                Contact Us
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            <Stat value="5+" label="Startups & Companies" />
           
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="p-3 rounded-full bg-white/10 backdrop-blur border border-white/20">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Decorative Code */}
      <div className="absolute top-20 left-10 opacity-20 text-white font-mono text-sm hidden lg:block">
        {`function innovate() {
  return <Success />;
}`}
      </div>

      <div className="absolute bottom-20 right-10 opacity-20 text-white font-mono text-sm hidden lg:block">
        {`const JLG solutions = {
  innovation: "Cutting-edge solutions",
  scalability: "Built to grow with you"
};`}
      </div>
    </section>
  );
}

/* Small Component */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white mb-2">{value}</div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
}
