export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-purple-500">
          STREET SPEC SOCIETY
        </h1>

        <p className="mt-6 text-gray-300 max-w-xl mx-auto">
          A Las Vegas based automotive community built around respect,
          friendship, and a shared passion for cars.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl">
            Join the Team
          </button>

          <button className="border border-purple-500 px-6 py-3 rounded-xl">
            Upcoming Events
          </button>
        </div>
      </div>
    </main>
  );
}
