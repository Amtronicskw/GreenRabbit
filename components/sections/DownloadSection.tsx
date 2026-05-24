"use client";
import React from "react";
import { Smartphone, Download } from "lucide-react";
import Link from "next/link";
import { MotionDiv, MotionH2, MotionP } from "@/components/ui/motion";

export function DownloadSection() {
  return (
    <section id="download" className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-bg py-24 px-6 border-t border-white/5">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center text-center">
        
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex w-fit items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 backdrop-blur-md"
        >
          <Smartphone className="h-4 w-4 text-accent" />
          <span className="text-xs font-bold tracking-widest text-accent uppercase">
            Available on iOS & Android
          </span>
        </MotionDiv>

        <MotionH2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-3xl font-extrabold leading-tight tracking-wider text-text sm:text-4xl md:text-5xl uppercase"
        >
          Take the market <br className="sm:hidden" />
          <span className="text-accent">with you.</span>
        </MotionH2>

        <MotionP
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Download the Green Rabbit app to get real-time price action, AI-powered insights, and personalized watchlists anywhere you go.
        </MotionP>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* iOS Download Button */}
          <Link
            href="#"
            className="group relative flex w-full sm:w-auto min-w-[200px] items-center justify-center gap-3 rounded-2xl border border-white/10 bg-card p-4 transition-all hover:border-accent/50 hover:bg-card/80 active:scale-95 shadow-lg"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors">
              <Download className="h-5 w-5 text-text group-hover:text-accent transition-colors" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted group-hover:text-text/70 transition-colors">Download on the</span>
              <span className="text-sm font-bold text-text">App Store</span>
            </div>
          </Link>

          {/* Android Download Button */}
          <Link
            href="#"
            className="group relative flex w-full sm:w-auto min-w-[200px] items-center justify-center gap-3 rounded-2xl border border-white/10 bg-card p-4 transition-all hover:border-accent/50 hover:bg-card/80 active:scale-95 shadow-lg"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors">
              <Download className="h-5 w-5 text-text group-hover:text-accent transition-colors" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted group-hover:text-text/70 transition-colors">Get it on</span>
              <span className="text-sm font-bold text-text">Google Play</span>
            </div>
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}
