"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/join", label: "Join" },
  { href: "/rules", label: "Rules" },
  { href: "/awards", label: "Awards" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Street Spec Society"
            width={64}
            height={64}
            className="rounded-full"
          />

          <div>
            <p className="text-white font-black tracking-wider leading-none text-lg">
              STREET SPEC
            </p>

            <p className="text-red-500 text-sm tracking-[0.3em]">
              SOCIETY
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 uppercase text-sm tracking-widest">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? "text-red-500 font-bold"
                  : "text-white hover:text-red-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="md:hidden bg-zinc-950 border-t border-white/10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 border-b border-white/10 transition ${
                pathname === link.href
                  ? "text-red-500 font-bold"
                  : "text-white hover:text-red-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}