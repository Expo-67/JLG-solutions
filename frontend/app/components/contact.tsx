"use client";

import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <section id="contact" className="min-h-screen bg-[#EEF4FF] px-6 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
        {/* LEFT: CONTACT INFO */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Contact Us
          </h1>

          <p className="mt-4 max-w-md text-gray-600">
            Email, call, or complete the form to learn how our solutions
            can help your business grow.
          </p>

          {/* Contact Details */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3 text-gray-800">
              <Mail size={18} />
              <span>jlgsolutions@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-gray-800">
              <Phone size={18} />
              <span>+254 728 774 289</span>
            </div>
          </div>

          
          
        </div>

        {/* RIGHT: FORM */}
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900">
            Get in touch
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            You can reach us anytime
          </p>

          <form className="mt-6 space-y-4">
            {/* Name */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="First name"
                className="rounded-full border px-4 py-3 text-sm outline-none focus:border-purple-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="rounded-full border px-4 py-3 text-sm outline-none focus:border-purple-500"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-full border px-4 py-3 text-sm outline-none focus:border-purple-500"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full rounded-full border px-4 py-3 text-sm outline-none focus:border-purple-500"
            />

            {/* Message */}
            <textarea
              placeholder="How can we help?"
              rows={4}
              className="w-full resize-none rounded-2xl border px-4 py-3 text-sm outline-none focus:border-purple-500"
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-full bg-purple-600 py-3 text-sm font-medium text-white transition hover:bg-purple-700"
            >
              Submit
            </button>

            
          </form>
        </div>
      </div>
    </section>
  );
}
