import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import WhyUs from "@/components/WhyUs";
import AboutUs from "@/components/AboutUs";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
// import Hero from "@/components/Hero";
// import Banner from "@/components/Banner";
import { cities, features, services } from "@/utils/data";
import WorkShowcase from "@/components/WorkShowcase";
import InAction from "@/components/VideosSection";
import Banner from "@/components/LandingPageComponents/Banner";
import Hero from "@/components/LandingPageComponents/Hero";
import QualityServices from "@/components/LandingPageComponents/QualityServices";


const installs = 5000;
const citiesCount = 15;

function classNames(...cls) {
  return cls.filter(Boolean).join(" ");
}

export default function MarkCareSite() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">

      {/* Navbar */}
      <Header open={open} setOpen={setOpen} cities={cities}/>

      {/* Banner (video background) */}
      <Banner />

      {/* Hero */}
      <Hero services={services} classNames={classNames} />

      {/* Services */}
      <QualityServices services={services} />

      {/* About */}
      <AboutUs features={features} cities={cities} />

      {/* Why Us */}
      <WhyUs installs={installs} citiesCount={citiesCount} />

      {/* Gallery / Media */}
      <WorkShowcase />

      {/* Video Section */}
      <InAction />

      {/* Clients strip */}
      <Clients />

    </div>
  );
}
