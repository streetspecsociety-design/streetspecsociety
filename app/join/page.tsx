import Link from "next/link";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* Hero */}
      <section
        className="h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/hero-bg.jpeg')",
        }}
      >
        <div className="bg-black/60 w-full h-full flex flex-col items-center justify-center">
          <p className="uppercase tracking-[6px] text-sm">
            Street Spec Society
          </p>

          <h1 className="text-6xl font-black mt-2">
            JOIN THE TEAM
          </h1>

          <p className="text-gray-300 mt-4 max-w-xl text-center px-6">
            Become part of one of Las Vegas' fastest growing automotive
            communities.
          </p>

          <Link
            href="/"
            className="inline-block mt-8 rounded-full bg-red-600 px-8 py-3 font-bold transition hover:bg-red-700"
          >
            ← Back Home
          </Link>

        </div>
      </section>

      {/* Requirements */}
      <section className="max-w-5xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold text-center">
          Membership Requirements
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-zinc-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Requirements
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>✅ Respect all members</li>
              <li>✅ Positive attitude</li>
              <li>✅ Reliable attendance</li>
              <li>✅ Passion for cars</li>
              <li>✅ Follow team rules</li>
            </ul>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              What You Get
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>🔥 Team Meets</li>
              <li>🔥 Cruises</li>
              <li>🔥 Rolling Shots</li>
              <li>🔥 Merch Access</li>
              <li>🔥 Community Events</li>
            </ul>
          </div>

        </div>

        {/* Ready to Join */}
        <div className="mt-20">

          <div className="bg-zinc-900 rounded-3xl p-10 text-center">

            <h2 className="text-4xl font-bold">
              Ready to Join?
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Street Spec Society is more than just a car team.
              We're a community built on respect, friendship,
              clean builds, and representing Las Vegas the right way.
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto mt-10 text-left">

              <div>✅ Respect Everyone</div>
              <div>✅ Stay Active</div>
              <div>✅ Passion for Cars</div>
              <div>✅ Team Mentality</div>

            </div>

            <a
              href="https://forms.gle/MCyAiNQE1FnmVkPSA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-red-600 hover:bg-red-700 px-12 py-4 rounded-xl text-lg font-bold transition"
            >
              Apply Now
            </a>

          </div>

        </div>

        {/* Why Join */}
        <div className="mt-24">

          <h2 className="text-4xl font-bold text-center">
            Why Join Street Spec Society?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            <div className="bg-zinc-900 rounded-2xl p-6 text-center">
              <div className="text-4xl">🚗</div>
              <h3 className="font-bold mt-4">Monthly Meets</h3>
              <p className="text-gray-400 mt-2">
                Meet fellow enthusiasts from all over Las Vegas.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 text-center">
              <div className="text-4xl">📸</div>
              <h3 className="font-bold mt-4">Photo Shoots</h3>
              <p className="text-gray-400 mt-2">
                Professional rolling shots and media opportunities.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 text-center">
              <div className="text-4xl">🏔️</div>
              <h3 className="font-bold mt-4">Cruises</h3>
              <p className="text-gray-400 mt-2">
                Enjoy mountain drives, night cruises, and road trips.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 text-center">
              <div className="text-4xl">🤝</div>
              <h3 className="font-bold mt-4">Family</h3>
              <p className="text-gray-400 mt-2">
                Become part of a respectful and welcoming community.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}