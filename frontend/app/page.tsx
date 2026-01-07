import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services"
import Team from "./components/Team"
import Contact from "./components/contact"
import About from "./components/About"
import Products from "./components/Products";

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      {/* Header section */}
      <Header />
      
      {/* Full-page hero / landing section */}
      <Hero />
      {/* Products Section */}
      <Products />
      
      {/* Services Section */}
      <Services />
      {/* Success Stories Section */}
      <About />
      {/* Team Section */}
      <Team />
      <Contact />
      

    </main>
  );
}