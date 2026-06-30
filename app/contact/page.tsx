export default function ContactPage() {
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
            CONTACT US
          </h1>

          <p className="text-gray-300 mt-4 max-w-xl text-center px-6">
            Questions about the team? Interested in joining? We'd love to hear from you.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>

            <h2 className="text-4xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="bg-zinc-900 rounded-2xl p-6">
                <h3 className="text-xl font-bold">📍 Location</h3>
                <p className="text-gray-400 mt-2">
                  Las Vegas, Nevada
                </p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6">
                <h3 className="text-xl font-bold">📸 Instagram</h3>
                <a
                  href="https://instagram.com/streetspecsociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline"
                >
                  @streetspecsociety
                </a>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6">
                <h3 className="text-xl font-bold">📧 Email</h3>
                <a
                  href="mailto:streetspecsociety@gmail.com"
                  className="text-red-500 hover:underline"
                >
                  streetspecsociety@gmail.com
                </a>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900 rounded-2xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl bg-zinc-800 outline-none focus:ring-2 focus:ring-red-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl bg-zinc-800 outline-none focus:ring-2 focus:ring-red-600"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-xl bg-zinc-800 outline-none focus:ring-2 focus:ring-red-600"
              />

              <textarea
                rows={6}
                placeholder="Your Message..."
                className="w-full p-4 rounded-xl bg-zinc-800 outline-none focus:ring-2 focus:ring-red-600"
              />

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-bold transition"
              >
                Send Message
              </button>

            </form>

            <a
              href="https://forms.gle/MCyAiNQE1FnmVkPSA"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-6 border border-red-600 hover:bg-red-600 rounded-xl py-4 font-bold transition"
            >
              🚗 Apply to Join Street Spec Society
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}