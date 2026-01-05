
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "C-tride | JLG Solutions",
  description:
    "Learn more about Ctride and its impact.",
};
const CtrideLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default CtrideLayout;
