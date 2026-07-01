"use client";

import Link from "next/link";
import Image from "next/image";

const members = [
  { name: "Chinkz", instagram: "@cutzbychinkz" },
  { name: "Brandon", instagram: "@lv.civic.hatch_1.5" },
  { name: "Zi", instagram: "@sheluvvzi" },
  { name: "Arlen", instagram: "@702.lvparadise" },
  { name: "Ari", instagram: "@asapari25" },
  { name: "Cam", instagram: "@f56_grandma" },
];

export default function BlacklistPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-red-900">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-black" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">

          <Image
            src="/SSLV_transparent_square.png"
            alt="Street Spec Society"
            width={130}
            height={130}
            className="mx-auto mb-8"
            priority
          />

          <h1 className="text-6xl md:text-7xl font-black tracking-widest text-red-600">
            BLACKLIST
          </h1>

          <div className="w-32 h-[3px] bg-red-600 mx-auto my-8 rounded-full" />

          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-8">
            This page identifies individuals who are no longer affiliated with
            Street Spec Society and are not authorized to represent the
            organization, attend members-only events, or represent the team as
            active members.
          </p>

          <Link
            href="/"
            className="inline-block mt-10 rounded-full bg-red-600 px-8 py-4 font-bold transition hover:bg-red-700"
          >
            ← Return Home
          </Link>

        </div>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {members.map((member) => (

            <div
              key={member.name}
              className="group rounded-3xl border border-zinc-800 bg-zinc-900 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-red-600 hover:shadow-[0_0_40px_rgba(220,38,38,.35)]"
            >

              <div className="h-2 bg-gradient-to-r from-red-700 via-red-500 to-red-700" />

              <div className="p-8 text-center">

                {/* Logo */}
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-red-600 bg-black shadow-[0_0_30px_rgba(220,38,38,.35)]">

                  <Image
                    src="/SSLV_transparent_square.png"
                    alt="Street Spec Society"
                    fill
                    priority
                    className="object-contain p-1 transition duration-300 group-hover:scale-105"
                  />

                </div>

                <span className="inline-block mt-6 rounded-full bg-red-600 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                  Membership Revoked
                </span>

                <h2 className="mt-8 text-3xl font-black">
                  {member.name}
                </h2>

                <p className="mt-6 uppercase tracking-widest text-xs text-gray-500">
                  Instagram
                </p>

                <a
                  href={`https://instagram.com/${member.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-lg font-semibold text-red-400 transition hover:text-red-300"
                >
                  {member.instagram}
                </a>

                <div className="mt-8 border-t border-zinc-800 pt-6">

                  <p className="uppercase tracking-widest text-xs text-gray-500">
                    Status
                  </p>

                  <p className="mt-2 font-semibold text-red-500">
                    No Longer Affiliated with Street Spec Society
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Footer */}
      <section className="border-t border-zinc-800">

        <div className="max-w-5xl mx-auto px-6 py-14 text-center">

          <Image
            src="/SSLV_transparent_square.png"
            alt="Street Spec Society"
            width={70}
            height={70}
            className="mx-auto mb-6"
          />

          <h3 className="text-2xl font-bold">
            Official Membership Notice
          </h3>

          <p className="mt-6 text-gray-500 leading-8">
            This page reflects the current membership status maintained by
            Street Spec Society. Individuals listed above are not recognized as
            active members or representatives of the organization.
          </p>

        </div>

      </section>

    </main>
  );
}