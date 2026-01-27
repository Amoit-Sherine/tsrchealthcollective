"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Service Platform", href: "/services" },
  { label: "Regulation & Governance", href: "/governance" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-muted/10 bg-white lg:bg-white/95 lg:backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link
              href="/"
              className="flex items-center text-lg font-semibold tracking-tight text-olive no-underline"
            >
              <img
                src="/brand/logo-full.svg"
                alt="TSRC logo"
                className="h-8 w-auto lg:h-10"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-xl px-3 py-2 text-sm font-semibold no-underline transition-colors ${
                      isActive
                        ? "bg-bone/70 text-olive"
                        : "text-muted hover:bg-bone/50 hover:text-olive"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-controls="mobile-navigation"
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
              className="rounded-xl border border-sand/60 px-3 py-2 text-sm font-semibold text-olive transition-colors hover:bg-bone/60 lg:hidden"
            >
              Menu
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile navigation */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Slide-in panel */}
          <div
            id="mobile-navigation"
            className="fixed right-0 top-0 z-[70] h-full w-72 transform shadow-2xl transition-transform sm:w-80"
          >
            <div className="flex h-full flex-col bg-olive/95 text-white backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                  Navigation
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Close
                </button>
              </div>

              <nav
                className="flex flex-1 flex-col gap-2 overflow-y-auto px-6 py-6"
                aria-label="Mobile"
              >
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`min-h-[44px] rounded-xl px-4 py-3 text-base font-semibold leading-relaxed no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-olive ${
                        isActive
                          ? "bg-white/15 text-white"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
