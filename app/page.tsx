import Link from "next/link";
import Countdown from "../components/Countdown";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 -mt-20 px-6">
          <p className="uppercase tracking-[0.45em] text-gray-400">Las Vegas, Nevada</p>
          <h1 className="text-7xl md:text-9xl font-black mt-6">STREET SPEC</h1>
          <h1 className="text-7xl md:text-9xl font-black">SOCIETY</h1>

          <div className="w-24 h-[2px] bg-white my-8 mx-auto"></div>

          <h2 className="text-2xl md:text-3xl font-light">
            United by Cars. Defined by Respect.
          </h2>

          <p className="mt-6 text-gray-300 max-w-3xl text-lg leading-8 mx-auto">
            Street Spec Society is a Las Vegas automotive community built around
            respect, friendship, and a shared passion for cars.
          </p>

          <div className="mt-10 flex justify-center gap-5">

            <Link
              href="/join"
              className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 hover:scale-105 transition duration-300"
            >
              Join the Team
            </Link>

            <Link
              href="/events"
              className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black hover:scale-105 transition duration-300"
            >
              Upcoming Events
            </Link>

          </div>
        </div>
      </section>

      <Countdown />

      {/* About */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-5xl font-black uppercase">About Street Spec Society</h2>
        <div className="w-24 h-[2px] bg-white my-8"></div>
        <p className="text-gray-400 text-lg leading-9">
          Street Spec Society is more than a car club. We are a community of automotive enthusiasts
          who enjoy bringing people together through meets, cruises, events, and unforgettable memories.
        </p>
      </section>

      {/* Featured Builds */}
      <section className="py-24 px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase text-center">Featured Builds</h2>
          <div className="w-24 h-[2px] bg-white mx-auto my-8"></div>
          <p className="text-center text-gray-400 mb-16">
            Meet some of the Street Spec Society family.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/jc-civic.jpeg" alt="2021 Honda Civic Sport Sedan" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2021 Honda Civic Sport</h3>
                <p className="mt-2 text-gray-400">Owner: JC</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/grems-civic.jpeg" alt="2019 Honda Civic SI" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2020 Honda Civic SI</h3>
                <p className="mt-2 text-gray-400">Owner: Gremlin</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/jay-civic.jpeg" alt="2020 Honda Accord Sport" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2022 Honda Accord Sport</h3>
                <p className="mt-2 text-gray-400">Owner: Jay</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/nathan-civic.jpeg" alt="Nathans Civic" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2021 Honda Accord Sport</h3>
                <p className="mt-2 text-gray-400">Owner: Nathan</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/hero-bg.jpeg" alt="Angels Civic" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2024 Honda Civic Type R</h3>
                <p className="mt-2 text-gray-400">Owner: Angel</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/ruby-car.jpeg" alt="Rubys Camry" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2021 Toyota Camry</h3>
                <p className="mt-2 text-gray-400">Owner: Ruby</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/frosty-bike.jpeg" alt="Frosty's Build" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2018 Ninja400</h3>
                <p className="mt-2 text-gray-400">Owner: Frosty</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/turco-car.jpeg" alt="Turco's Civic" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2022 Honda Civic SI</h3>
                <p className="mt-2 text-gray-400">Owner: Turco</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/stevens-audi.jpeg" alt="Steven's Audi" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2010 Audi A4 1999</h3>
                <p className="mt-2 text-gray-400">Owner: Steven</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/Balt-car.jpeg" alt="Adrian's Civic" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2024 Honda Civic SI</h3>
                <p className="mt-2 text-gray-400">Owner: Adrian</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/alexis-accord.jpeg" alt="Alexis's Accord" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2022 Honda Accord Sport</h3>
                <p className="mt-2 text-gray-400">Owner: Alexis</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/cj-lexus.jpeg" alt="CJ's Lexus" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">Lexus</h3>
                <p className="mt-2 text-gray-400">Owner: CJ</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/john-civic.jpeg" alt="John's Civic" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2018 Honda Civic</h3>
                <p className="mt-2 text-gray-400">Owner: John</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/dre-civic.jpeg" alt="Dre's Build" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2025 Honda Civic Sport</h3>
                <p className="mt-2 text-gray-400">Owner: Dre</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/casper-car.jpeg" alt="Casper's Build" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2017 Nissan 370z</h3>
                <p className="mt-2 text-gray-400">Owner: Joey</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/seven-civic.jpeg" alt="Seven's Build" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2020 Honda Civic Type R</h3>
                <p className="mt-2 text-gray-400">Owner: Seven</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/imprll-civic.jpeg" alt="Imprll's Build" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2024 Honda Civic Sport</h3>
                <p className="mt-2 text-gray-400">Owner: Imprll</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/jay-supra.jpeg" alt="Jay's Build" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2026 Toyota Supra</h3>
                <p className="mt-2 text-gray-400">Owner: Jay</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/jay-lexus.jpeg" alt="Jay's Build" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">1992 Lexus LS400</h3>
                <p className="mt-2 text-gray-400">Owner: Jay</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/luckii-civic.jpeg" alt="Luckii's Build" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2024 Honda Civic Sport</h3>
                <p className="mt-2 text-gray-400">Owner: Luckii</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/midnight-toyota.jpeg" alt="Midnight's Build" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2015 Toyota Camry</h3>
                <p className="mt-2 text-gray-400">Owner: Midnight</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/txny-civic.jpeg" alt="TXNY's Build" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2018 Honda Civic Sport</h3>
                <p className="mt-2 text-gray-400">Owner: TXNY</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/vanessa-wrxy.jpeg" alt="Vanessa's Build" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2024 WRX Premium</h3>
                <p className="mt-2 text-gray-400">Owner: Vanessa</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/sergio-car.jpeg" alt="Sergio's Build" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2009 BMW 135I</h3>
                <p className="mt-2 text-gray-400">Owner: Sergio</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>


            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/derek-car.jpeg" alt="Derek" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">2006 Acura TSX</h3>
                <p className="mt-2 text-gray-400">Owner: Derek</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>


            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/member3.jpeg" alt="Member 3" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">Featured Build Coming Soon</h3>
                <p className="mt-2 text-gray-400">Owner: Coming Soon</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>


            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/member4.jpeg" alt="Member 4" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">Featured Build Coming Soon</h3>
                <p className="mt-2 text-gray-400">Owner: Coming Soon</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>


            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/member5.jpeg" alt="Member 5" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">Featured Build Coming Soon</h3>
                <p className="mt-2 text-gray-400">Owner: Coming Soon</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>


            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300">
              <img src="/member6.jpeg" alt="Member 6" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">Featured Build Coming Soon</h3>
                <p className="mt-2 text-gray-400">Owner: Coming Soon</p>
                <p className="text-gray-500">Las Vegas, Nevada</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-y border-white/10 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          <div><h3 className="text-5xl font-bold">40+</h3><p className="mt-3 uppercase tracking-widest text-gray-500">Members</p></div>
          <div><h3 className="text-5xl font-bold">100+</h3><p className="mt-3 uppercase tracking-widest text-gray-500">Meets</p></div>
          <div><h3 className="text-5xl font-bold">Las Vegas</h3><p className="mt-3 uppercase tracking-widest text-gray-500">Nevada</p></div>
          <div><h3 className="text-5xl font-bold">2025</h3><p className="mt-3 uppercase tracking-widest text-gray-500">Community</p></div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-600 border-t border-white/10">
        © 2026 Street Spec Society • Las Vegas, Nevada
      </footer>

    </main>
  );
}
