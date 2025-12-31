"use client";

import Image from "next/image";

/* =======================
   ASSETS – REPLACE FREELY
   ======================= */
import logo from "../assets/brand2.png";
import blockImage1 from "../assets/servicecards.jpeg";
import blockImage2 from "../assets/20250131_125936.jpg";
import blockImage3 from "../assets/brand2.png";
import blockImage4 from "../assets/servicemoti.png";




/* =======================
   TIMELINE DATA
   ======================= */
const timeline = [
  {
    date: "November 2024",
    title: "The Idea Begins",
    description:
      "James and Lilian brainstormed project ideas for a school project and identified the widespread use of manual service cards in garages as a key problem worth solving.",
  },
  {
    date: "January 31, 2025",
    title: "Demo Day Recognition",
    description:
      "Service-Moti was presented at GoMyCode Demo Day and voted the most unique and creative project among all student submissions.",
  },
  {
    date: "February – July 2025",
    title: "Research & MVP Development",
    description:
      "James, Lilian, and Godson collaborated closely—conducting weekly garage visits, surveys, and building Phase 1 of the MVP based on real-world feedback.",
  },
  {
    date: "August 2025",
    title: "Launch & Trial Phase",
    description:
      "Service-Moti was deployed and tested by two garages, receiving positive feedback and organic promotion from early users.",
  },
  {
    date: "September 2025 – Present",
    title: " Protection",
    description:
      "The app was temporarily pulled down to focus on copyright protection.",
  },
];

export default function ServiceMotipage() {
  return (
    
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">
        {/* ================= LEFT CONTENT ================= */}
        <div>
         

          {/* Title */}
          <h1 className="text-4xl font-semibold text-gray-900 mb-6">
            Service-Moti
          </h1>

          {/* Intro */}
          <p className="text-lg text-gray-600 max-w-2xl mb-20">
            Service-Moti is a garage management platform built to eliminate
            manual service cards and improve how garages track services,
            communicate with customers, and operate efficiently. The product
            is founder-led and shaped directly by real garage workflows.
          </p>

          {/* CONTENT BLOCKS */}
          <div className="space-y-28">
            {/* Block 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Where It All Started
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Service-Moti originated in November 2024 when James and Lilian
                  were exploring ideas for a school project. After identifying
                  several problems, James chose to focus on digitizing garage
                  service records—a problem deeply rooted in everyday garage
                  operations.
                </p>
              </div>

              <Image
                src={blockImage1}
                alt="Early idea and manual service cards"
                className="rounded-xl shadow-md"
              />
            </div>

            {/* Block 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Image
                src={blockImage2}
                alt="Demo day presentation"
                className="rounded-xl shadow-md"
              />

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  From Concept to Recognition
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  James began development in December 2024, preparing for Demo
                  Day. On January 31, 2025, Service-Moti stood out among all
                  projects and was voted the most creative and unique solution,
                  validating the vision behind the app.
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Building 
                </h3>
     <p className="text-gray-600 leading-relaxed">

  After Demo Day, Godson joined the project marking a new phase of collaboration.
   Between February and July 2025, James spent time on the ground—visiting garages weekly,
    conducting surveys and observing daily workflows while holding regular strategy and progress 
    meetings with Godson. Lilian was also part of the team, providing a valuable perspective we 
    could bounce ideas off during development. During this period, we spent significant time 
    expanding the app's scope beyond simply digitizing service cards; we added features like 
    client reminders,assigning particular services to specific mechanics, having all mechanics in the app, 
     and explored ways to integrate AI to enhance functionality. Insights
     gathered directly from garage owners and mechanics informed every decision, 
     ensuring the app met real-world needs. Phase 1 was intentionally focused on building 
     a reliable, easy-to-use MVP, with weekly team check-ins keeping the product aligned with 
     both user needs and our development goals.
</p>



              </div>

              <Image
                src={blockImage3}
                alt="Garage visits and MVP development"
                className="rounded-xl shadow-md"
              />
            </div>

            {/* Block 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Image
                src={blockImage4}
                alt="Service-Moti growth and future"
                className="rounded-xl shadow-md"
              />

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Launch , Trial & Protection 
                </h3>
                <p className="text-gray-600 leading-relaxed">
  Service-Moti was launched in August 2025 and piloted by two garages during the 
  trial phase. Feedback from early users was highly positive: they loved the clean, 
  intuitive user interface, found the app easy to use, and appreciated how it brought all 
  their garage information into one place. Users also highlighted the convenience of managing 
  multiple garages within a single app. Following this early success, the product was temporarily paused to secure copyright protection.
</p>

              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT TIMELINE ================= */}
        <aside className="relative">
          <div className="sticky top-32">
            <h3 className="text-lg font-semibold text-gray-900 mb-8">
              Project Timeline
            </h3>

            <div className="relative border-l border-gray-300 pl-6 space-y-10">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-purple-500" />
                  <p className="text-sm text-purple-600 font-medium">
                    {item.date}
                  </p>
                  <h4 className="text-base font-semibold text-gray-900 mt-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
