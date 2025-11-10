import { Mail, Rocket } from "lucide-react";

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-900/70 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
      <a href="#home" className="group inline-flex items-center gap-2">
        <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-tr from-indigo-500 to-sky-400 text-white shadow">
          <Rocket className="h-4 w-4" />
        </div>
        <span className="text-lg font-semibold tracking-wide text-white group-hover:text-sky-200">
          Revisit
        </span>
      </a>
      <nav className="hidden gap-6 text-sm text-white/80 md:flex">
        <a href="#services" className="hover:text-white">Services</a>
        <a href="#work" className="hover:text-white">Work</a>
        <a href="#about" className="hover:text-white">About</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </nav>
      <div className="flex items-center gap-2">
        <a
          href="mailto:bk3604073@gmail.com?subject=Project%20Collaboration%20with%20Revisit"
          className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-sm font-medium text-neutral-900 shadow hover:shadow-lg active:scale-[.99]"
        >
          <Mail className="h-4 w-4" />
          Let’s Talk
        </a>
      </div>
    </div>
  </header>
);

export default Header;