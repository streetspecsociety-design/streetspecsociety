"use client";

import Link from "next/link";

export default function AwardsPage() {
  const awards = [
    {
      title: "🏆 Member of the Month",
      desc: "Recognizes the member who made the biggest positive impact on the team.",
    },
    {
      title: "🚗 Best Build",
      desc: "Awarded to the most impressive build for quality, creativity, and detail.",
    },
    {
      title: "⭐ MVP",
      desc: "For outstanding dedication, teamwork, and leadership.",
    },
    {
      title: "📸 Best Photography",
      desc: "Recognizes the member who captured the best moments of the year.",
    },
    {
      title: "🎉 Best Attendance",
      desc: "Awarded for consistently showing up and supporting the community.",
    },
    {
      title: "❤️ Community Impact",
      desc: "Given to a member who strengthens the team through positivity and encouragement.",
    },
    {
      title: "🔥 Best New Member",
      desc: "Recognizes an outstanding new member during their first year.",
    },
    {
      title: "👑 Founder's Award",
      desc: "Presented by the Founder to someone who best represents Street Spec Society.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center border-b border-white/10">
        <p className="uppercase tracking-[0.4em] text-red-500">
          Street Spec Society
        </p>

        <h1 className="text-5xl md:text-7xl font-black mt-4">
          Awards
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-gray-300">
          Honoring the members who go above and beyond for our community.
        </p>

        <Link
          href="/"
          className="inline-block mt-10 rounded-full bg-red-600 px-8 py-3 font-bold transition hover:bg-red-700"
        >
          ← Back Home
        </Link>
      </section>

      {/* Award Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-black text-center mb-10">
          Award Categories
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award) => (
            <div
              key={award.title}
              className="rounded-2xl bg-zinc-900 border border-white/10 p-6 hover:border-red-500 transition"
            >
              <h3 className="text-2xl font-bold text-red-500">
                {award.title}
              </h3>

              <p className="mt-4 text-gray-300">
                {award.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Winners */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-black text-center mb-10">
          2026 Award Winners
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Member of the Month",
            "Best Build",
            "MVP",
            "Best Photography",
            "Best Attendance",
            "Community Impact",
            "Best New Member",
            "Founder's Award",
          ].map((name) => (
            <div
              key={name}
              className="rounded-xl border border-white/10 bg-zinc-900 p-6"
            >
              <h3 className="text-xl font-bold">{name}</h3>

              <p className="mt-3 text-gray-400">
                Winner: <span className="text-white">TBD</span>
              </p>

              <p className="text-gray-400">
                Year: <span className="text-white">2026</span>
              </p>

              <p className="mt-3 text-gray-500">
                Announced at the annual Street Spec Society Awards.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500">
        © 2026 Street Spec Society • Las Vegas, Nevada
      </footer>
    </main>
  );
}