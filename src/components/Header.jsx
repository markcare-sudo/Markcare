import { Mail, MapPin, Menu, Phone, Rocket, X } from "lucide-react";
import Button from "./Button";

const Header = ({ open, setOpen, cities }) => {

  return (
    <>
      <div className="bg-red-700 text-white text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4" />
            <a href="tel:+919884927676" className="hover:underline">+91 98849 27676</a>
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

      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
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
    </>

  )

}

export default Header;