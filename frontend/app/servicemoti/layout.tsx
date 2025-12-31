"use client";
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
