// Footer.jsx
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Our Services", href: "/#services" },
  { label: "Our Clients", href: "/#clients" },
  { label: "Contact us", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#3b8f94] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand + tagline */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3">
              {/* Replace with your white/on-teal logo */}
              <img
                src="/assets/SLR.webp"
                alt="SLR Infracon Engineers"
                className="h-20 w-auto"
              />
            </div>
            <p className="mt-4 text-sm text-white/90">Stay updated with us.</p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/80">
              Quick Links
            </div>
            <ul className="mt-3 space-y-2">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/90 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/80">
              Contact Info
            </div>

            <div className="mt-3 space-y-3 text-sm">
              <div>
                <div className="flex items-center gap-2 font-medium text-white/95">
                  <Phone className="h-4 w-4" /> Call
                </div>
                <div className="mt-1 text-white/90">
                  General enquiries:{" "}
                  <a href="tel:+919663715363" className="hover:underline">
                    96637 15363
                  </a>
                  ,{" "}
                  <a href="tel:+918660359064" className="hover:underline">
                    86603 59064
                  </a>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 font-medium text-white/95">
                  <Mail className="h-4 w-4" /> Email
                </div>
                <a
                  href="mailto:slrinfraengg@gmail.com"
                  className="mt-1 inline-block text-white/90 hover:underline"
                >
                  slrinfraengg@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80">
              <MapPin className="h-4 w-4" /> Location
            </div>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-semibold text-white/95">
                  Bengaluru (Regd. Office)
                </div>
                <address className="not-italic text-white/90 leading-6">
                  124, Ganga Complex, TC Palya Main Road,
                  <br />
                  Ramamurthy Nagar, Bengaluru – 560016
                </address>
              </div>

              <div>
                <div className="font-semibold text-white/95">Mumbai (Office)</div>
                <address className="not-italic text-white/90 leading-6">
                  124, Ganga Complex, TC Palya Main Road,
                  <br />
                  Ramamurthy Nagar, Bengaluru – 560016
                </address>
              </div>
            </div>

            <div className="mt-3 text-sm text-white/90">
              <span className="font-semibold">Branch office</span>
              <br />
              Hubli, Kolhapur, Sirsi.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
