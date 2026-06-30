"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const photos = [
  {
    image: "/gallery/PG1.jpeg",
    title: "Team Meet Trunk or Treat",
    location: "Las Vegas, Nevada",
  },
  {
    image: "/gallery/PG2.jpeg",
    title: "Thank You From the Community",
    location: "Las Vegas, Nevada",
  },
  {
    image: "/gallery/PG3.jpeg",
    title: "Street Spec Brothers",
    location: "Las Vegas, Nevada",
  },
  {
    image: "/gallery/PG4.jpeg",
    title: "Street Spec Family",
    location: "Las Vegas, Nevada",
  },
  {
    image: "/gallery/PG5.jpeg",
    title: "Late Night Conversations",
    location: "Las Vegas, Nevada",
  },
  {
    image: "/gallery/PG6.jpeg",
    title: "Community Meet",
    location: "Las Vegas, Nevada",
  },
  {
    image: "/gallery/PG7.jpeg",
    title: "Ghost Face Sergio 😂",
    location: "Las Vegas, Nevada",
  },
];

export default function NightShootsPage() {
  const [selected, setSelected] = useState<number | null>(null);

  const nextImage = () => {
    if (selected === null) return;
    setSelected((selected + 1) % photos.length);
  };

  const prevImage = () => {
    if (selected === null) return;
    setSelected((selected - 1 + photos.length) % photos.length);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="border-b border-zinc-800 py-16 text-center">
        <h1 className="text-5xl font-extrabold tracking-widest">
          NIGHT SHOOTS
        </h1>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Explore some of Street Spec Society's favorite night photography from
          around Las Vegas.
        </p>

        <Link
          href="/gallery"
          className="inline-block mt-8 rounded-full bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
        >
          ← Back to Gallery
        </Link>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 transition-all duration-300 hover:-translate-y-2 hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.45)]"
            >
              <div className="overflow-hidden">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  width={700}
                  height={500}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold">{photo.title}</h3>

                <p className="mt-2 text-sm text-gray-400">
                  Street Spec Society • {photo.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Lightbox */}
      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full"
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-50 text-5xl font-bold text-white hover:text-red-500 transition"
            >
              ×
            </button>

            {/* Previous */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 h-14 w-14 rounded-full bg-black/60 text-3xl hover:bg-red-600 transition"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 h-14 w-14 rounded-full bg-black/60 text-3xl hover:bg-red-600 transition"
            >
              ›
            </button>

            <Image
              src={photos[selected].image}
              alt={photos[selected].title}
              width={1600}
              height={1000}
              className="w-full max-h-[80vh] rounded-xl object-contain"
            />

            <div className="mt-6 text-center">
              <h2 className="text-3xl font-bold">
                {photos[selected].title}
              </h2>

              <p className="mt-2 text-gray-400">
                Street Spec Society • {photos[selected].location}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}