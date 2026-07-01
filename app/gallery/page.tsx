import Link from "next/link";

export default function Gallery() {
  const categories = [
    {
      title: "Featured Builds",
      description: "Showcasing some of the cleanest builds in Street Spec Society.",
      image: "/logo.png",
      href: "/gallery/featured",
    },
    {
      title: "Team Meets",
      description: "Photos from our monthly meets and community events.",
      image: "/logo.png",
      href: "/gallery/meets",
    },
    {
      title: "Night Shoots",
      description: "Vegas nights with the Street Spec Society family.",
      image: "/logo.png",
      href: "/gallery/night-shoots",
    },
    {
      title: "Rollers",
      description: "Rolling shots captured around Las Vegas.",
      image: "/logo.png",
      href: "/gallery/rollers",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-center px-6">
          <p className="uppercase tracking-[0.4em] text-gray-400">
            Street Spec Society
          </p>

          <h1 className="mt-4 text-6xl font-black uppercase md:text-8xl">
            Gallery
          </h1>

          <div className="mx-auto my-8 h-[2px] w-24 bg-white"></div>

          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Explore our builds, meets, cruises, night shoots and unforgettable
            moments with the Street Spec Society family.
          </p>

          <Link
            href="/"
            className="inline-block mt-8 rounded-full bg-red-600 px-8 py-3 font-bold transition hover:bg-red-700"
          >
            ← Back Home
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-red-600 hover:shadow-[0_0_35px_rgba(220,38,38,0.45)]"
            >
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold">
                  {category.title}
                </h2>

                <p className="mt-4 text-gray-400">
                  {category.description}
                </p>

                <div className="mt-6 text-sm uppercase tracking-widest text-red-500 transition group-hover:text-white">
                  View Gallery →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}