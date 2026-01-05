
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Service-Moti | JLG Solutions",
  description:
    "Learn more about Service-Moti and its impact.",
};
const ServicemotiLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default ServicemotiLayout;
