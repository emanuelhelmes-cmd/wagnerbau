"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { NAV_LINKS, CONTACT } from "@/lib/constants";

/**
 * Header component with responsive navigation
 * Features: sticky header, mobile menu, scroll-aware background, CTA button
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll position for header background change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-18 md:h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex shrink-0 items-center">
            <Image
              src="/images/logo.png"
              alt="Wagner Bau & Immobilien"
              width={477}
              height={253}
              className="h-12 w-auto sm:h-14 md:h-16"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-accent relative",
                  pathname === link.href
                    ? "text-accent"
                    : "text-primary/80"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/kontakt"
              className={buttonVariants({ variant: "primary", size: "sm" })}
            >
              Jetzt kontaktieren
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="relative z-10 md:hidden p-2 -mr-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 transition-all duration-300 md:hidden",
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
        aria-hidden={!mobileMenuOpen}
        role="dialog"
        aria-label="Navigation"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-2xl font-medium transition-colors",
                pathname === link.href ? "text-accent" : "text-primary"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 mt-4 w-full max-w-xs">
            <Link
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className={buttonVariants({ variant: "outline", size: "lg", className: "w-full gap-2" })}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="h-5 w-5" />
              {CONTACT.phone}
            </Link>
            <Link
              href="/kontakt"
              className={buttonVariants({ variant: "primary", size: "lg", className: "w-full" })}
              onClick={() => setMobileMenuOpen(false)}
            >
              Jetzt kontaktieren
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
