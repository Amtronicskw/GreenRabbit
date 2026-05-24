"use client";
import React from "react";
// lucide-react brand icons are removed, using SVGs instead
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative flex w-full flex-col items-center justify-center border-t border-white/5 bg-bg py-8 px-6">
      <div className="mx-auto flex max-w-7xl w-full flex-col items-center justify-between gap-6 sm:flex-row">
        
        {/* Brand / Copyright */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <Link href="/" className="flex items-center gap-2.5 group mb-2">
            <div className="relative h-6 w-6 overflow-hidden rounded-[4px] border border-[#2c2c35] bg-card p-[1px] transition-colors group-hover:border-accent">
              <Image
                src="/logo.png"
                alt="Green Rabbit Logo"
                width={24}
                height={24}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-serif text-sm font-bold tracking-wider text-text uppercase transition-colors group-hover:text-accent">
              Green Rabbit
            </span>
          </Link>
          <span className="text-xs text-muted">
            &copy; {currentYear} Green Rabbit. All rights reserved.
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <Link
            href="https://www.instagram.com/greenrabbitai/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-card text-muted transition-all hover:border-accent/50 hover:text-accent hover:bg-card/80 active:scale-95 shadow-sm"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </Link>
          <Link
            href="https://www.facebook.com/people/Green-Rabbit-Ai/61590006963552/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-card text-muted transition-all hover:border-accent/50 hover:text-accent hover:bg-card/80 active:scale-95 shadow-sm"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Link>
          <Link
            href="https://x.com/GreenRabbitAi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-card text-muted transition-all hover:border-accent/50 hover:text-accent hover:bg-card/80 active:scale-95 shadow-sm"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </Link>
        </div>

      </div>
    </footer>
  );
}
