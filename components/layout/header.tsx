"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  {
    label: "Products",
    href: "/#products",
    subItems: [
      { label: "ServiceOS", href: "/products/serviceos" },
      { label: "MarketOS", href: "/products/marketos" },
    ],
  },
  { label: "Technology", href: "/#technology" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/#about" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-[#233C5A]/20 bg-white/95 backdrop-blur-md">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/horizon_full_logo_cropped.svg"
              alt="Horizon"
              width={140}
              height={47}
              priority
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#233C5A]/20 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
          <Image
            src="/horizon_full_logo_cropped.svg"
            alt="Horizon"
            width={140}
            height={47}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            if (item.subItems) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-[#233C5A]/80 transition-colors hover:text-[#233C5A] hover:bg-[#233C5A]/5">
                    {item.label}
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === item.label && (
                    <div className="absolute left-0 top-full mt-2 w-48 rounded-lg border border-[#233C5A]/20 bg-white shadow-lg z-50">
                      <div className="py-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-[#233C5A]/80 transition-colors hover:bg-[#233C5A]/5 hover:text-[#233C5A]"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-[#233C5A]/80 transition-colors hover:text-[#233C5A] hover:bg-[#233C5A]/5"
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 rounded-full border-2 border-[#233C5A] bg-[#233C5A] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#1a2d45] hover:border-[#1a2d45] hover:shadow-md"
          >
            Talk to us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-[#233C5A] transition-colors hover:bg-[#233C5A]/10 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#233C5A]/20 bg-white md:hidden">
          <nav className="container py-4">
            <div className="space-y-1">
              {navItems.map((item) => {
                if (item.subItems) {
                  const isExpanded = activeDropdown === item.label;
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            isExpanded ? null : item.label
                          )
                        }
                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-[#233C5A]/80 transition-colors hover:bg-[#233C5A]/5 hover:text-[#233C5A]"
                      >
                        {item.label}
                        <svg
                          className={`h-4 w-4 transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isExpanded && (
                        <div className="ml-4 space-y-1 border-l border-[#233C5A]/20 pl-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block rounded-lg px-4 py-2 text-sm text-[#233C5A]/80 transition-colors hover:bg-[#233C5A]/5 hover:text-[#233C5A]"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-[#233C5A]/80 transition-colors hover:bg-[#233C5A]/5 hover:text-[#233C5A]"
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 block rounded-full border-2 border-[#233C5A] bg-[#233C5A] px-5 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-[#1a2d45] hover:border-[#1a2d45] hover:shadow-md"
              >
                Talk to us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
