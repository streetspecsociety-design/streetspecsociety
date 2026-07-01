"use client";

import { useState } from "react";
import Link from "next/link";

const photos = [
  {
    image: "/gallery/featured/1.jpeg",
    title: "Built with Passion",
    location: "Las Vegas, Nevada",
  },
  {
    image: "/gallery/featured/2.jpeg",
    title: "Vegas Street Presence",
    location: "Las Vegas, Nevada",
  },
  {
    image: "/gallery/featured/3.jpeg",
    title: "Attention to Every Detail",
    location: "Las Vegas, Nevada",
  },
  {
    image: "/gallery/featured/4.jpeg",
    title: "Clean. Low. Purposeful.",
    location: "Las Vegas, Nevada",
  },
  {
    image: "/gallery/featured/5.jpeg",
    title: "Built to Stand Out",
    location: "Las Vegas, Nevada",
  },
  {
    image: "/gallery/featured/6.jpeg",
    title: "Las Vegas Nights",
    location: "Las Vegas, Nevada",
  },
  {
    image: "/gallery/featured/7.jpeg",
    title: "Street Ready",
    location: "Las Vegas, Nevada",
  },
  {
    image: "/gallery/featured/8.jpeg",
    title: "Community Driven",
    location: "Las Vegas, Nevada",
  },
  {
    image: "/gallery/featured/9.jpeg",
    title: "One Team. One Vision.",
    location: "Las Vegas, Nevada",
  },
  {
    image: "/gallery/featured/10.jpeg",
    title: "Engineered to Impress",
    location: "Las Vegas, Nevada",
  },
  {
    image: "/gallery/featured/11.jpeg",
    title: "Where Style Meets Performance",
    location: "Las Vegas, Nevada",
  },
  {
    image: "/gallery/featured/12.jpeg",
    title: "Respect the Build",
    location: "Las Vegas, Nevada",
  },
  {
    image: "/gallery/featured/13.jpeg",
    title: "United by Cars. Defined by Respect.",
    location: "Las Vegas, Nevada",
  },
];

export default function FeaturedBuildsPage() {
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
          FEATURED BUILDS
        </h1>

        <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
          A collection of some of the finest vehicles representing Street Spec
          Society. Every build reflects dedication, craftsmanship,
          individuality, and a passion for the automotive lifestyle.
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
                <img
                  src={photo.image}
                  alt={photo.title}
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

      {/* Lightbox */}
      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-7xl w-full"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-50 text-5xl font-bold text-white hover:text-red-500"
            >
              ×
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 h-14 w-14 rounded-full bg-black/60 text-3xl hover:bg-red-600"
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 h-14 w-14 rounded-full bg-black/60 text-3xl hover:bg-red-600"
            >
              ›
            </button>

            <img
              src={photos[selected].image}
              alt={photos[selected].title}
              className="w-full max-h-[80vh] object-contain rounded-xl"
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