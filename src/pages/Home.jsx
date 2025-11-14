import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import WhyUs from "@/components/WhyUs";
import AboutUs from "@/components/AboutUs";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import { cities, features, services } from "@/utils/data";
import WorkShowcase from "@/components/WorkShowcase";
import InAction from "@/components/VideosSection";
/** Minimal UI primitives (no external imports) */




const installs = 5000;
const citiesCount = 15;

function classNames(...cls) {
  return cls.filter(Boolean).join(" ");
}

export default function MarkCareSite() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
    {/* <div className="min-h-screen bg-white text-slate-900"> */}

      {/* Navbar */}
      <Header open={open} setOpen={setOpen} cities={cities}/>

      {/* Banner (video background) */}
      <Banner />

      {/* Hero */}
      <Hero services={services} classNames={classNames} />

      {/* Services */}
      <Services services={services} />

      {/* About */}
      <AboutUs features={features} cities={cities} />

      {/* Why Us */}
      <WhyUs installs={installs} citiesCount={citiesCount} />

      {/* Contact */}
      <Contact />

      {/* Gallery / Media */}
      <WorkShowcase />

      {/* Video Section */}
      <InAction />

      {/* Clients strip */}
      <Clients />

      {/* Footer */}
      {/* <Footer services={services} cities={cities} /> */}
    </div>
  );
}
