import Link from "next/link";

export default function Events() {
  const events = [
    {
      title: "Monthly Team Meet",
      date: "July 18, 2026",
      time: "7:00 PM",
      location: "TBD",
      description:
        "Join the Street Spec Society family for our monthly meet featuring great cars, good conversations, and community.",
    },
    {
      title: "Night Cruise",
      date: "Coming Soon",
      time: "Evening",
      location: "Las Vegas Strip",
      description:
        "A relaxed cruise through Las Vegas with rolling shots and photo stops.",
    },
    {
      title: "Mountain Cruise",
      date: "Coming Soon",
      time: "Morning",
      location: "Mount Charleston",
      description:
        "Escape the city and enjoy a scenic drive through the mountains.",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">

      {/* Hero */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative text-center px-6">
          <p className="uppercase tracking-[0.4em] text-gray-400">
            Street Spec Society
          </p>

          <h1 className="text-6xl md:text-8xl font-black mt-4 uppercase">
            Events
          </h1>

          <div className="w-24 h-[2px] bg-white mx-auto my-8"></div>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Stay up to date with upcoming meets, cruises, and community events.
          </p>

          <Link
            href="/"
            className="inline-block mt-8 rounded-full bg-red-600 px-8 py-3 font-bold transition hover:bg-red-700"
          >
            ← Back Home
          </Link>

        </div>
      </section>

      {/* Upcoming Events */}
      <section className="max-w-6xl mx-auto py-20 px-8">

        <h2 className="text-5xl font-black uppercase text-center">
          Upcoming Events
        </h2>

        <div className="w-24 h-[2px] bg-white mx-auto my-8"></div>

        <div className="space-y-8 mt-16">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-red-600 transition duration-300 hover:shadow-[0_0_25px_rgba(220,38,38,0.25)]"
            >
              <h3 className="text-3xl font-bold">
                {event.title}
              </h3>

              <div className="mt-4 text-gray-400 space-y-1">
                <p>📅 {event.date}</p>
                <p>🕒 {event.time}</p>
                <p>📍 {event.location}</p>
              </div>

              <p className="mt-6 text-gray-300 leading-8">
                {event.description}
              </p>
            </div>
          ))}
        </div>

      </section>

    </main>
  );
}