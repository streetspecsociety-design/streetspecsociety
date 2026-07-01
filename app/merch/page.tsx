import Link from "next/link";

const merch = [
  {
    image: "/merch/shirt.png",
    title: "Street Spec Society Tee",
    description:
      "Premium everyday t-shirt featuring our signature Las Vegas logo.",
  },
  {
    image: "/merch/hoodie.png",
    title: "Street Spec Society Sweater",
    description:
      "Heavyweight hoodie designed for meets, cruises and cool Vegas nights.",
  },
  {
    image: "/merch/jacket.png",
    title: "Street Spec Society Jacket",
    description:
      "Premium zip-up jacket built for comfort and style wherever you drive.",
  },
  {
    image: "/merch/hat-beanie.png",
    title: "Snapback & Beanie",
    description:
      "Finish the look with official Street Spec Society headwear.",
  },
];

export default function MerchPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="border-b border-zinc-800 py-20 text-center">

        <h1 className="text-6xl font-black tracking-widest uppercase">
          Merchandise
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg">
          Official Street Spec Society apparel designed for members who
          represent the culture both on and off the road.
        </p>

        <Link
          href="/"
          className="inline-block mt-10 rounded-full bg-red-600 px-8 py-3 font-semibold transition hover:bg-red-700"
        >
          ← Back Home
        </Link>

      </section>

      {/* Products */}

      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="grid md:grid-cols-2 gap-10">

          {merch.map((item) => (

            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition duration-500 hover:-translate-y-2 hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.35)]"
            >

              <div className="relative">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute top-4 right-4 rounded-full bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                  Coming Soon
                </div>

              </div>

              <div className="p-8">

                <h2 className="text-3xl font-bold">
                  {item.title}
                </h2>

                <p className="mt-4 text-gray-400">
                  {item.description}
                </p>

                <button
                  disabled
                  className="mt-8 w-full rounded-xl border border-red-600 bg-black py-3 font-bold uppercase tracking-[0.25em] text-red-500 transition duration-300 hover:bg-red-600 hover:text-white"
                >
                  Coming Soon
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Lifestyle Section */}

      <section className="border-t border-zinc-800 py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-black uppercase">
            Represent the Society
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Street Spec Society isn't just a car club—it's a community.
            Our merchandise is designed for meets, cruises, charity events,
            and everyday wear. More lifestyle photos featuring our members
            will be coming soon.
          </p>

        </div>

      </section>

    </main>
  );
}