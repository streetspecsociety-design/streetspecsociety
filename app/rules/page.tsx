
"use client";

import Link from "next/link";

const values = [
  { title: "Respect", text: "Treat every member and every build with respect." },
  { title: "Integrity", text: "Represent Street Spec Society honestly on and off the road." },
  { title: "Community", text: "Support each other and build lasting friendships." },
  { title: "Passion", text: "Share your love for cars while protecting the community." },
];

const ranks = [
  "Founder / President",
  "Vice President",
  "Veteran",
  "Member",
  "Prospect (30 Days)"
];

const enforcement = [
  "🟢 Verbal Warning",
  "🟡 Written Warning",
  "🟠 Suspension",
  "🔴 Removal",
];

export default function RulesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-20 px-6 text-center border-b border-white/10">
        <p className="uppercase tracking-[0.4em] text-red-500">Street Spec Society</p>
        <h1 className="text-5xl md:text-7xl font-black mt-4">Community Handbook</h1>
        <p className="max-w-3xl mx-auto mt-6 text-gray-300">
          These standards exist to protect our members, our events, and the reputation of Street Spec Society.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/join" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-bold">Apply to Join</Link>
          <Link href="/" className="border border-white/20 hover:border-red-500 px-6 py-3 rounded-full">Back Home</Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-black text-center mb-10">Our Core Values</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {values.map(v=>(
            <div key={v.title} className="rounded-2xl bg-zinc-900 border border-white/10 p-6 hover:border-red-500 transition">
              <h3 className="text-2xl font-bold text-red-500">{v.title}</h3>
              <p className="mt-4 text-gray-300">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-black mb-8">Community Rules</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Respect everyone.",
            "Zero tolerance for racism or hate.",
            "Protect private team information.",
            "Represent the team with pride.",
            "Welcome new members.",
            "Respect photographers and other vehicles."
          ].map(rule=>(
            <div key={rule} className="rounded-xl border border-white/10 p-5 bg-zinc-900">{rule}</div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-black mb-8">Meet & Safety</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "No burnouts, donuts, or street racing.",
            "Respect businesses, residents, and the venue.",
            "Clean up after every meet.",
            "Follow local laws.",
            "Protect pedestrians and families.",
            "Safety comes before social media."
          ].map(item=>(
            <div key={item} className="rounded-xl border border-red-500/30 p-5">{item}</div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-black mb-8">Member Ranks</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {ranks.map(r=>(
            <div key={r} className="rounded-xl bg-zinc-900 p-6 text-center border border-white/10">{r}</div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-black mb-8">Enforcement Process</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {enforcement.map(step=>(
            <div key={step} className="rounded-xl bg-zinc-900 border border-white/10 p-6 text-center font-bold">{step}</div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-black mb-8">Leadership Responsibilities</h2>
        <div className="rounded-2xl bg-zinc-900 border border-white/10 p-8">
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>Lead by example.</li>
            <li>Apply rules fairly and consistently.</li>
            <li>Protect the community and its reputation.</li>
            <li>Handle conflicts professionally.</li>
            <li>Keep members informed.</li>
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-black">Member Agreement</h2>
        <p className="mt-6 text-gray-300">
          By joining Street Spec Society, you agree to uphold these standards and help create a safe,
          respectful, and welcoming community.
        </p>
        <Link href="/join" className="inline-block mt-8 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-bold">
          Apply to Join
        </Link>
      </section>
    </main>
  );
}
