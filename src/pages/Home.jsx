import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  MapPin,
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
  CheckCircle2,
  Badge,
} from "lucide-react";
/** Minimal UI primitives (no external imports) */
const Card = ({ className = "", children }) => (
  <div className={`rounded-3xl bg-white ring-1 ring-slate-200 shadow-sm ${className}`}>{children}</div>
);
const CardHeader = ({ className = "", children }) => <div className={`p-4 pb-0 ${className}`}>{children}</div>;
const CardTitle = ({ className = "", children }) => <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
const CardContent = ({ className = "", children }) => <div className={`p-4 pt-3 ${className}`}>{children}</div>;

const Button = ({ variant = "solid", className = "", children, ...props }) => {
  const base =
    "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 disabled:opacity-50";
  const styles =
    variant === "outline"
      ? "bg-white ring-1 ring-red-300 text-red-700 hover:bg-red-50"
      : variant === "ghost"
        ? "bg-transparent text-red-700 hover:bg-red-50"
        : "bg-red-700 text-white hover:bg-red-800";
  return (
    <button {...props} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeader = ({ kicker, title, subtitle }) => (
  <div className="max-w-2xl">
    {kicker && <Badge>{kicker}</Badge>}
    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
    {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
  </div>
);

const cities = ["Chennai", "Bangalore", "Delhi", "Hyderabad", "Mumbai"];

const services = [
  {
    title: "AC Services",
    icon: Wrench,
    short:
      "End-to-end AC repair, servicing & maintenance across India with quick turnaround and standardized quality.",
    bullets: [
      "Evaporator & condenser coil cleaning",
      "Refrigerant checks & leak fix",
      "Annual Maintenance Contracts (AMC)",
    ],
  },
  {
    title: "Commercial AC Services",
    icon: Building2,
    short:
      "Design, install, and maintain high-performance cooling for offices, hotels, hospitals, factories & data centers.",
    bullets: ["VRF/VRV expertise", "Energy optimization", "Breakdown & preventive care"],
  },
  {
    title: "RO Plants",
    icon: Droplets,
    short:
      "Reverse Osmosis plants for drinking & process water — design, install, and upkeep for reliable purity.",
    bullets: ["Membrane descaling", "Biofouling removal", "Flow & purity restoration"],
  },
  {
    title: "Water Treatment Plants (WTP)",
    icon: Recycle,
    short:
      "Convert contaminated water into usable water for safe consumption & utility applications.",
    bullets: ["Kitchen, bath & utility reuse", "Quality compliance", "Operations support"],
  },
  {
    title: "Effluent Treatment Plants (ETP)",
    icon: Factory,
    short:
      "Turnkey ETP projects: design, supply, erection, commissioning, upgrades & maintenance.",
    bullets: ["Process engineering", "AMC & troubleshooting", "PLC/automation upgrades"],
  },
  {
    title: "Sewage Treatment Plants (STP)",
    icon: Recycle,
    short:
      "End-to-end STP solutions for residential, commercial & industrial clients with compliance assurance.",
    bullets: ["Operator training", "Performance optimization", "SCADA integration"],
  },
  {
    title: "Lift & Escalator",
    icon: Cog,
    short:
      "Installation, modernization & maintenance for elevators and escalators tailored to your building.",
    bullets: ["High-speed lifts", "Freight elevators", "Safety inspection & AMCs"],
  },
  {
    title: "Inverter & Generator",
    icon: Zap,
    short:
      "Installation, repair & AMC for inverters and DG sets (5–1000 kVA) with complete electrical integration.",
    bullets: ["Load testing", "Overhauling & spares", "Emergency breakdown service"],
  },
  {
    title: "Solar Systems",
    icon: Sun,
    short:
      "End-to-end solar solutions: survey, design, installation, net-metering, and proactive maintenance.",
    bullets: ["Performance monitoring", "Battery & hybrid options", "Upgrades & expansion"],
  },
  {
    title: "Chemical Washing",
    icon: Sparkles,
    short:
      "Specialized chemical cleaning for HVAC coils, RO systems & industrial equipment to restore efficiency.",
    bullets: ["Scale & rust removal", "Bio-growth control", "Energy cost reduction"],
  },
];

const features = [
  { icon: ShieldCheck, title: "Vetted Experts", text: "Hand-picked partners, trained & insured for safety and reliability." },
  { icon: Wrench, title: "Standardized Quality", text: "Documented SOPs & QA checks for consistent service delivery." },
  { icon: Phone, title: "Pan‑India Support", text: "Quick-response teams across major metros and beyond." },
];

const installs = 5000;
const citiesCount = 15;

function classNames(...cls) {
  return cls.filter(Boolean).join(" ");
}

export default function MarkCareSite() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Top Bar */}
      <div className="bg-red-700 text-white text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4" />
            <a href="tel:+919092844355" className="hover:underline">+91 90928 44355</a>
            <span className="opacity-60">|</span>
            <a href="tel:+917010421860" className="hover:underline">+91 70104 21860</a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <div className="hidden sm:flex gap-2 flex-wrap">
              {cities.map((c) => (
                <span key={c} className="px-2 py-0.5 rounded-full bg-white/10 text-white/90">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* <div className="w-9 h-9 rounded-2xl bg-red-700 text-white grid place-items-center font-bold">M</div> */}
            <img src="/assets/Markcare Logo2.png" alt="Mark Care Logo" className="w-12 h-auto rounded-md" />
            <div className="leading-tight">
              <div className="font-semibold text-slate-900">Mark Care Pvt. Ltd.</div>
              <div className="text-xs text-slate-500">Services at Home • Industrial Solutions</div>
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            {[
              ["Services", "#services"],
              ["About", "#about"],
              ["Why Us", "#why-us"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="text-slate-600 hover:text-slate-900">
                {label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact"><Button className="rounded-2xl">Get Quote</Button></a>
          </div>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col">
              <a href="#services" className="py-2" onClick={() => setOpen(false)}>Services</a>
              <a href="#about" className="py-2" onClick={() => setOpen(false)}>About</a>
              <a href="#why-us" className="py-2" onClick={() => setOpen(false)}>Why Us</a>
              <a href="#contact" className="py-2" onClick={() => setOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Banner (video background) */}
      <section id="banner" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/Images/Markcare16.jpg"
          >
            {/* <source src="/assets/Videos/Markcare Banglore Video.mp4" type="video/mp4" /> */}
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white/0" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-black ring-1 ring-white/20">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> ISO‑grade SOPs
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-black drop-shadow">Mark Care — Reliable Home & Industrial Services</h1>
            <p className="mt-3 text-lg text-black/90 max-w-2xl drop-shadow">
              AC, RO/ETP/STP, Solar, Lifts, Power Systems and more. Pan‑India engineers. On‑time delivery.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#services"><Button>Explore Services</Button></a>
              <a href="#contact"><Button variant="outline" className="backdrop-blur">Get Quote</Button></a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="hidden lg:block">
            <div className="rounded-3xl overflow-hidden ring-1 ring-white/30 shadow-2xl">
              <img src="/assets/Images/Markcare20.jpg" alt="Technician at work" className="w-full h-[420px] object-cover" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(15,23,42,0.08),rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              High‑Quality Services at Home & Industrial Solutions
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              Book reliable, standardized services — AC, RO & Water Treatment, Lifts, Solar, Power Systems and more —
              delivered by certified professionals at your convenience.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+919092844355"><Button className="rounded-2xl">Call Now</Button></a>
              <a href="#services"><Button variant="outline" className="rounded-2xl">Explore Services</Button></a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Trained & Insured</div>
              <div className="flex items-center gap-2"><Wrench className="w-4 h-4" /> Standardized SOPs</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> Quick Support</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative bg-white rounded-3xl p-4 md:p-6 shadow-xl ring-1 ring-slate-200">
              <div className="grid grid-cols-2 gap-4">
                {services.slice(0, 6).map((s, idx) => (
                  <div key={s.title} className={classNames("rounded-2xl p-4 ring-1 ring-slate-200", idx % 2 === 0 ? "bg-red-50" : "bg-white")}>
                    <s.icon className="w-6 h-6" />
                    <div className="mt-2 font-semibold text-slate-900 text-sm">{s.title}</div>
                    <div className="text-xs text-slate-600 line-clamp-3">{s.short}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-slate-500">and more…</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            kicker="What we do"
            title="Our Services"
            subtitle="Comprehensive, standardized, and reliable — tailored for homes, businesses, and industry."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Card key={s.title} className="hover:shadow-md transition">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-red-100 grid place-items-center">
                    <s.icon className="w-6 h-6 text-red-700" />
                  </div>
                  <CardTitle className="mt-3">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">{s.short}</p>
                  <ul className="mt-3 space-y-1 text-sm text-slate-700">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <CheckCircle2 className="mt-0.5 w-4 h-4 text-red-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">About Mark Care</h2>
            <p className="mt-3 text-slate-600">
              Mark Care is a technology platform offering a variety of services at home and for enterprises. Customers
              use our platform to book services like beauty, haircuts, massage therapy, cleaning, plumbing, carpentry,
              appliance repair, painting and more — delivered at their preferred time, with a reliable, standardized
              experience.
            </p>
            <p className="mt-3 text-slate-600">
              We work closely with hand‑picked service partners and enable them with technology, training, products,
              tools, financing, insurance and brand support — helping them succeed and deliver quality every time.
            </p>
            <div className="mt-4 p-4 rounded-2xl bg-red-50 border border-slate-200">
              <div className="font-semibold">Our Vision</div>
              <p className="text-slate-600 text-sm mt-1">
                Empower millions of professionals worldwide to deliver services at home like never experienced before.
              </p>
            </div>
          </div>
          <div>
            <div className="rounded-3xl p-6 bg-white ring-1 ring-slate-200 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((f) => (
                  <div key={f.title} className="rounded-2xl p-4 bg-red-50 ring-1 ring-slate-200">
                    <f.icon className="w-6 h-6" />
                    <div className="mt-2 font-semibold">{f.title}</div>
                    <div className="text-sm text-slate-600">{f.text}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <div className="text-xs uppercase tracking-wide text-slate-500">We operate in</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {cities.map((c) => (
                    <span key={c} className="px-3 py-1 rounded-full bg-red-100 text-slate-700 text-sm">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-16 lg:py-24 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Why Choose Us</h2>
            <p className="mt-2 text-slate-600">Built on trust, safety, and measurable quality — with transparent pricing and responsive support.</p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
              title: "Standardized SOPs",
              text: "Checklist-driven service delivery and QA at each step.",
            }, {
              title: "Certified Engineers",
              text: "Experienced technicians for critical systems and utilities.",
            }, {
              title: "Compliance-Ready",
              text: "Environmental & safety norms met for ETP/STP/RO projects.",
            }, {
              title: "End-to-End",
              text: "From site survey to commissioning, AMC & retrofits.",
            }].map((item) => (
              <div key={item.title} className="rounded-3xl p-6 bg-white ring-1 ring-slate-200 shadow-sm">
                <div className="text-lg font-semibold">{item.title}</div>
                <div className="mt-2 text-sm text-slate-600">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Simple animated stats */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 text-center ring-1 ring-slate-200">
              <div className="text-3xl font-bold">{installs}+ </div>
              <div className="text-sm text-slate-600">Successful Installs</div>
            </div>
            <div className="rounded-3xl bg-white p-6 text-center ring-1 ring-slate-200">
              <div className="text-3xl font-bold">{citiesCount}</div>
              <div className="text-sm text-slate-600">Cities Covered</div>
            </div>
            <div className="rounded-3xl bg-white p-6 text-center ring-1 ring-slate-200">
              <div className="text-3xl font-bold">24x7</div>
              <div className="text-sm text-slate-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Get a Free Quote</h2>
            <p className="mt-2 text-slate-600">Tell us your requirement and our team will get back within business hours.</p>
            <div className="mt-6 rounded-3xl p-6 bg-red-50 ring-1 ring-slate-200">
              <div className="text-sm text-slate-700">Call us directly</div>
              <div className="mt-2 flex flex-wrap gap-3">
                <a href="tel:+919092844355" className="px-4 py-2 rounded-2xl bg-white ring-1 ring-slate-200 hover:ring-slate-300">+91 90928 44355</a>
                <a href="tel:+917010421860" className="px-4 py-2 rounded-2xl bg-white ring-1 ring-slate-200 hover:ring-slate-300">+91 70104 21860</a>
              </div>
              <div className="mt-4 text-sm">
                <span className="text-slate-600">Website:</span>{" "}
                <a href="https://www.markcare.in" target="_blank" rel="noreferrer" className="text-slate-900 underline">www.markcare.in</a>
              </div>
            </div>
          </div>

          {/* Simple contact form (no backend) */}
          <div className="rounded-3xl p-6 bg-white ring-1 ring-slate-200 shadow-sm">
            <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input className="mt-1 w-full rounded-2xl border-slate-300 focus:border-slate-400 focus:ring-slate-400" placeholder="Your full name" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Phone</label>
                  <input className="mt-1 w-full rounded-2xl border-slate-300 focus:border-slate-400 focus:ring-slate-400" placeholder="+91…" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-2xl border-slate-300 focus:border-slate-400 focus:ring-slate-400" placeholder="name@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Service</label>
                <select className="mt-1 w-full rounded-2xl border-slate-300 focus:border-slate-400 focus:ring-slate-400">
                  <option>AC Services</option>
                  <option>Commercial AC Services</option>
                  <option>RO Plants</option>
                  <option>Water Treatment Plants (WTP)</option>
                  <option>Effluent Treatment Plants (ETP)</option>
                  <option>Sewage Treatment Plants (STP)</option>
                  <option>Lift & Escalator</option>
                  <option>Inverter & Generator</option>
                  <option>Solar Systems</option>
                  <option>Chemical Washing</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-2xl border-slate-300 focus:border-slate-400 focus:ring-slate-400" placeholder="Tell us about your requirement…" />
              </div>
              <Button type="submit" className="rounded-2xl">Submit</Button>
              <p className="text-xs text-slate-500">By submitting, you agree to be contacted by Mark Care regarding your request.</p>
            </form>
          </div>
        </div>
      </section>

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
      <section className="py-10 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-xs uppercase tracking-[0.2em] text-slate-500">Trusted by teams across India</div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-6 opacity-70">
            {[
              "https://dummyimage.com/200x60/eeeeee/000000&text=Client+A",
              "https://dummyimage.com/200x60/eeeeee/000000&text=Client+B",
              "https://dummyimage.com/200x60/eeeeee/000000&text=Client+C",
              "https://dummyimage.com/200x60/eeeeee/000000&text=Client+D",
              "https://dummyimage.com/200x60/eeeeee/000000&text=Client+E",
            ].map((logo) => (
              <div key={logo} className="flex items-center justify-center">
                <img src={logo} alt="Client logo" className="h-10 w-auto" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3">
              {/* <div className="w-9 h-9 rounded-2xl bg-red-700 text-white grid place-items-center font-bold">M</div> */}
              <img src="/assets/Markcare Logo2.png" alt="Mark Care Logo" className="w-24 rounded-md h-auto" />
              {/* <div className="font-bold text-[16px]">Mark Care Pvt. Ltd.</div> */}
              <div className="leading-tight">
                <div className="font-bold text-slate-900 text-[18px]">Mark Care Pvt. Ltd.</div>
                <div className="text-xs text-slate-500 text-[14px] mt-2">Services at Home • Industrial Solutions</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600">High-quality, standardized & reliable services at your door and for your facilities.</p>
          </div>
          <div>
            <div className="font-semibold">Services</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}><a href="#services" className="hover:underline">{s.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold">Reach Us</div>
            <div className="mt-3 text-sm text-slate-600">Pan‑India presence:</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {cities.map((c) => (
                <span key={c} className="px-2 py-1 rounded-full bg-red-100 text-slate-700 text-xs">{c}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <div className="mt-3 text-sm text-slate-700 space-y-1">
              <a href="tel:+919092844355" className="block hover:underline">+91 90928 44355</a>
              <a href="tel:+917010421860" className="block hover:underline">+91 70104 21860</a>
              <a href="https://www.markcare.in" target="_blank" rel="noreferrer" className="block hover:underline">www.markcare.in</a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 py-6 border-t">© {new Date().getFullYear()} Mark Care Pvt. Ltd. All rights reserved.</div>
      </footer>
    </div>
  );
}
