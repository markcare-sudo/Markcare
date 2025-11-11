import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  ShieldCheck,
  Wrench,
  Droplets,
  Cog,
  Sun,
  Factory,
  Recycle,
  Zap,
  Building2,
  Sparkles,
} from "lucide-react";
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
      <section id="gallery" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Work Showcase</h2>
            <p className="mt-2 text-slate-600">A glimpse of our on‑site installs, maintenance and project handovers.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "/assets/Images/Markcare16.jpg",
              "/assets/Images/Markcare18.jpg",
              "/assets/Images/Markcare20.jpg",
              "/assets/Images/Markcare21.jpg",
              "/assets/Images/Markcare22.jpg",
              "/assets/Images/Markcare10.jpg",
            ].map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200"
              >
                <img src={src} alt="Mark Care project" className="h-40 md:h-56 w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="videos" className="py-16 lg:py-24 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">In Action</h2>
            <p className="mt-2 text-slate-600">Short walkthroughs of our installation standards and maintenance SOPs.</p>
          </div>
          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            <div className="aspect-video overflow-hidden rounded-3xl ring-1 ring-slate-200">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/5qap5aO4i9A?rel=0&modestbranding=1"
                title="Mark Care — Project Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="aspect-video overflow-hidden rounded-3xl ring-1 ring-slate-200">
              <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1581093588401-16ec8a8f8f17?q=80&w=1200&auto=format&fit=crop">
                <source src="https://cdn.coverr.co/videos/coverr-power-plant-4043/1080p.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Clients strip */}
      <Clients />

      {/* Footer */}
      <Footer services={services} cities={cities} />
    </div>
  );
}
