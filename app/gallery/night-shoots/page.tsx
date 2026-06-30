import Image from "next/image";
import Link from "next/link";

const photos = [
  "/gallery/PG1.jpeg",
  "/gallery/PG2.jpeg",
  "/gallery/PG3.jpeg",
  "/gallery/PG4.jpeg",
  "/gallery/PG5.jpeg",
  "/gallery/PG6.jpeg",
  "/gallery/PG7.jpeg",
];

export default function NightShootsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="border-b border-zinc-800 py-16 text-center">
        <h1 className="text-5xl font-extrabold tracking-wide">
          NIGHT SHOOTS
        </h1>

        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
          Explore some of Street Spec Society's favorite night photography from
          around Las Vegas.
        </p>

        <Link
          href="/gallery"
          className="inline-block mt-8 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 transition font-semibold"
        >
          ← Back to Gallery
        </Link>
      </section>

      {/* Photo Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <a
              key={index}
              href={photo}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photo}
                  alt={`Night Shoot ${index + 1}`}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h2 className="font-bold text-lg">
                  Night Shoot #{index + 1}
                </h2>

                <p className="text-zinc-400 text-sm mt-1">
                  Street Spec Society • Las Vegas, Nevada
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}