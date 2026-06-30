export default function Gallery() {
  const categories = [
    {
      title: "Featured Builds",
      description: "Showcasing some of the cleanest builds in Street Spec Society.",
      image: "/logo.png",
    },
    {
      title: "Team Meets",
      description: "Photos from our monthly meets and community events.",
      image: "/logo.png",
    },
    {
      title: "Night Shoots",
      description: "Vegas nights with the Street Spec Society family.",
      image: "/logo.png",
    },
    {
      title: "Rollers",
      description: "Rolling shots captured around Las Vegas.",
      image: "/logo.png",
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

          <h1 className="text-6xl md:text-8xl font-black mt-4 uppercase">
            Gallery
          </h1>

          <div className="w-24 h-[2px] bg-white mx-auto my-8"></div>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Explore our builds, meets, cruises, night shoots and unforgettable
            moments with the Street Spec Society family.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto py-20 px-8">
        <div className="grid md:grid-cols-2 gap-10">
          {categories.map((category) => (
            <a
              key={category.title}
              href="#"
              className="group rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-white/30 transition"
            >
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold">
                  {category.title}
                </h2>

                <p className="mt-4 text-gray-400">
                  {category.description}
                </p>

                <div className="mt-6 uppercase tracking-widest text-sm text-white">
                  View Gallery →
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}