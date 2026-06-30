"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Countdown() {
  const eventDate = new Date("2026-07-18T19:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) return;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <section className="bg-black py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[6px] text-red-500">
          Next Event
        </p>

        <h2 className="text-5xl font-black mt-3">
          Monthly Team Meet
        </h2>

        <p className="text-gray-400 mt-4">
          July 18, 2026 • 7:00 PM
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

          {[
            ["Days", timeLeft.days],
            ["Hours", timeLeft.hours],
            ["Minutes", timeLeft.minutes],
            ["Seconds", timeLeft.seconds],
          ].map(([label, value]) => (
            <div
              key={label}
              className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800"
            >
              <h3 className="text-5xl font-black text-red-500">
                {value}
              </h3>

              <p className="uppercase tracking-widest text-gray-400 mt-2">
                {label}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-10">
          <Link
            href="/events"
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold transition"
          >
            View Event Details
          </Link>
        </div>

      </div>
    </section>
  );
}