"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // روابط التنقل المأخوذة من أقسام الموقع المقترحة
  const navLinks = [
    { name: "الرئيسية", href: "#" },
    { name: "خدماتنا ", href: "#features" },
    { name: "التكامل والربط", href: "#integrations" },
    { name: "كيف نعمل", href: "#process" },
  ];

  return (
    <nav
      className="fixed top-0 right-0 left-0 z-50 w-full border-b border-brand-navy/40 bg-brand-dark/70 backdrop-blur-md"
      style={{ direction: "rtl" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 1. اللوجو في اليمين (RTL) */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/logoMini.png"
                alt="شعار نخب الثراء"
                width={45}
                height={45}
                className="object-contain transition-transform duration-300 rounded-xl"
                priority
              />
              <span className="text-white font-black text-xl tracking-tight hidden sm:block">
                نخب <span className="text-brand-gold">الثراء</span>
              </span>
            </Link>
          </div>

          {/* 2. الروابط الأساسية في المنتصف لشاشات الديسكتوب */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-brand-gold text-sm font-medium transition-colors duration-300 relative group py-2"
              >
                {link.name}
                {/* تأثير الـ Underline الذهبي الذكي عند الـ Hover */}
                <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* 3. زر الحجز السريع أو اتصل بنا في اليسار ليحل محل الـ Actions القديمة */}
          <div className="hidden md:flex items-center">
            <Link
              href="#cta"
              className="px-5 py-2.5 rounded-lg bg-brand-navy border border-brand-gold/30 text-brand-gold text-sm font-bold transition-all duration-300 hover:bg-brand-gold hover:text-brand-dark hover:shadow-[0_0_15px_rgba(204,164,59,0.2)]"
            >
              استشارة مجانية
            </Link>
          </div>

          {/* 4. زر القائمة للموبايل (Hamburger Menu) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-brand-navy focus:outline-none cursor-pointer"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">فتح القائمة الرئيسية</span>
              {isOpen ? (
                // أيقونة الإغلاق (X)
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // أيقونة الهامبرجر (≡)
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 5. القائمة المنسدلة المخصصة للموبايل (Mobile Menu) */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "block opacity-100" : "hidden opacity-0"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-brand-dark/95 border-b border-brand-navy/50 backdrop-blur-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-brand-gold hover:bg-brand-navy/40 block px-3 py-3 rounded-md text-base font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 pb-2 px-3">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center block px-4 py-3 rounded-md bg-brand-gold text-brand-dark font-bold text-sm shadow-xs"
            >
              استشارة مجانية
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
