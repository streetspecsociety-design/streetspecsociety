import Link from "next/link";

const faqs = [
  {
    question: "How do I join Street Spec Society?",
    answer:
      "Simply visit our Join page and complete the membership application. Once your application is submitted, our leadership team will review it and contact you if you're approved.",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "No. Street Spec Society does not charge a membership fee. Membership is completely free.",
  },
  {
    question: "Do I need a modified vehicle to join?",
    answer:
      "Yes. Members are expected to own a modified vehicle that reflects the passion and culture of the automotive community. We welcome everything from tasteful modifications to fully built projects.",
  },
  {
    question: "Can trucks join?",
    answer:
      "Yes. We welcome trucks, cars, SUVs, and other modified vehicles that fit the values and standards of Street Spec Society.",
  },
  {
    question: "Can motorcycles join?",
    answer:
      "Yes. Motorcycle enthusiasts are welcome to apply as long as they share our passion for the automotive community and represent Street Spec Society respectfully.",
  },
  {
    question: "How old do I have to be?",
    answer:
      "Applicants must be at least 18 years old to become a member of Street Spec Society.",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "Most applications are reviewed within a few days. Processing time may vary depending on application volume, but our leadership team works to respond as quickly as possible.",
  },
  {
    question: "What are you looking for in new members?",
    answer:
      "We look for respectful, active individuals who are passionate about the automotive community. We value good character, teamwork, reliability, and members who positively represent Street Spec Society both online and at events.",
  },
  {
    question: "Can my membership be revoked?",
    answer:
      "Yes. Members who repeatedly violate team rules, create unnecessary drama, disrespect other members, or fail to uphold the values of Street Spec Society may have their membership revoked at the discretion of the leadership team.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative text-center px-6">

          <p className="uppercase tracking-[0.4em] text-gray-400">
            Street Spec Society
          </p>

          <h1 className="mt-4 text-6xl md:text-8xl font-black uppercase">
            FAQ
          </h1>

          <div className="mx-auto my-8 h-[2px] w-24 bg-white"></div>

          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Everything you need to know about joining Street Spec Society and becoming part of our automotive community.
          </p>

          <Link
            href="/"
            className="inline-block mt-10 rounded-full bg-red-600 px-8 py-3 font-bold transition hover:bg-red-700"
          >
            ← Back Home
          </Link>

        </div>
      </section>

      {/* FAQ Cards */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-center text-5xl font-black uppercase">
          Frequently Asked Questions
        </h2>

        <div className="mt-16 space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition duration-300 hover:border-red-600 hover:shadow-[0_0_25px_rgba(220,38,38,.25)]"
            >
              <h3 className="text-2xl font-bold text-red-500">
                {faq.question}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* Contact CTA */}
      <section className="border-t border-zinc-800 py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-black uppercase">
            Still Have Questions?
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            If you couldn't find the answer you're looking for, we'd be happy to help.
            Reach out to us and a member of our leadership team will get back to you.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 rounded-full bg-red-600 px-10 py-4 font-bold transition hover:bg-red-700"
          >
            Contact Us
          </Link>

        </div>

      </section>

    </main>
  );
}