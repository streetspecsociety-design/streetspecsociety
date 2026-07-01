"use client";

import Link from "next/link";
import Image from "next/image";

const leaders = [
  {
    role: "Founder",
    name: "JC",
    instagram: "@shotbycivic",
    description:
      "Founded Street Spec Society with the vision of building a respectful and welcoming automotive community.",
  },
  {
    role: "President",
    name: "Gremlin",
    instagram: "@ayygremlin",
    description:
      "Leads the organization, oversees club operations, and helps guide the future of Street Spec Society.",
  },
  {
    role: "Vice President",
    name: "Jay",
    instagram: "@statichondaz",
    description:
      "Supports leadership, assists with member engagement, and helps coordinate club activities.",
  },
  {
    role: "Events Manager",
    name: "Nathan",
    instagram: "@hotrod.honda",
    description:
      "Plans and organizes meets, cruises, and community events for Street Spec Society.",
  },
];

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-red-900">

        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-black" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">

          <Image
            src="/logo.png"
            alt="Street Spec Society"
            width={130}
            height={130}
            className="mx-auto mb-8"
          />

          <h1 className="text-6xl md:text-7xl font-black tracking-widest">
            LEADERSHIP
          </h1>

          <div className="w-32 h-[3px] bg-red-600 mx-auto my-8 rounded-full"></div>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-8">
            Meet the leadership team responsible for guiding Street Spec Society,
            organizing events, supporting members, and helping the community continue to grow.
          </p>

          <Link
            href="/"
            className="inline-block mt-10 rounded-full bg-red-600 px-8 py-4 font-bold transition hover:bg-red-700"
          >
            ← Return Home
          </Link>

        </div>

      </section>

      {/* Leadership Cards */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-8 md:grid-cols-2">

          {leaders.map((leader) => (

            <div
              key={leader.name}
              className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-red-600 hover:shadow-[0_0_40px_rgba(220,38,38,.35)]"
            >

              <div className="h-2 bg-gradient-to-r from-red-700 via-red-500 to-red-700"></div>

              <div className="p-8">

                <div className="flex items-center justify-between">

                  <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-red-600 bg-black p-2">
                    <Image
                      src="/logo.png"
                      alt="Street Spec Society"
                      width={64}
                      height={64}
                    />
                  </div>

                  <span className="rounded-full bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
                    {leader.role}
                  </span>

                </div>

                <h2 className="mt-8 text-4xl font-black">
                  {leader.name}
                </h2>

                <p className="mt-6 uppercase tracking-widest text-xs text-gray-500">
                  Instagram
                </p>

                <a
                  href={`https://instagram.com/${leader.instagram.replace("@","")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-lg font-semibold text-red-400 hover:text-red-300"
                >
                  {leader.instagram}
                </a>

                <div className="mt-6 border-t border-zinc-800 pt-6">

                  <p className="uppercase tracking-widest text-xs text-gray-500">
                    Role
                  </p>

                  <p className="mt-2 text-gray-300 leading-7">
                    {leader.description}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Footer */}

      <section className="border-t border-zinc-800">

        <div className="max-w-4xl mx-auto px-6 py-16 text-center">

          <Image
            src="/logo.png"
            alt="Street Spec Society"
            width={70}
            height={70}
            className="mx-auto mb-6"
          />

          <h3 className="text-3xl font-bold">
            Leading by Example
          </h3>

          <p className="mt-6 text-gray-500 leading-8">
            The Street Spec Society leadership team is committed to creating a respectful,
            welcoming, and passionate automotive community where members can build friendships,
            showcase their vehicles, and grow together.
          </p>

        </div>

      </section>

    </main>
  );
}