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
      "Heavyweight hoodie designed for meets, cruises, and cool Vegas nights.",
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
      "Complete your look with official Street Spec Society headwear.",
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
          Official Street Spec Society apparel designed exclusively for active
          members who proudly represent the team on and off the road.
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

        <div className="grid gap-10 md:grid-cols-2">

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
                  Members Only
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
                  className="mt-8 w-full cursor-default rounded-xl border border-red-600 bg-black py-3 font-bold uppercase tracking-[0.25em] text-red-500"
                >
                  🔒 Active Members Only
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Information */}
      <section className="border-t border-zinc-800 py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-black uppercase">
            Represent the Society
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Official Street Spec Society merchandise is reserved exclusively for
            active members in good standing. Our apparel represents the values,
            dedication, and community that define Street Spec Society both on
            and off the road.
          </p>

          <div className="mt-10 inline-block rounded-2xl border border-red-600 bg-red-600/10 px-8 py-5">

            <h3 className="text-2xl font-bold text-red-500">
              Want Official Merch?
            </h3>

            <p className="mt-3 text-gray-300">
              Become an active member of Street Spec Society to gain access to
              exclusive apparel, merchandise, events, and member benefits.
            </p>

            <Link
              href="/join"
              className="mt-6 inline-block rounded-full bg-red-600 px-8 py-3 font-bold transition hover:bg-red-700"
            >
              Apply to Join →
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}