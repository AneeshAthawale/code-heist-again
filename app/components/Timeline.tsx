export default function Timeline() {
  const events = [
    "Registration Opens",
    "Registration Closes",
    "Round 1 - Bidding",
    "Round 2 - The Race",
    "Winners Announced",
  ];

  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <div className="text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Timeline
        </p>

        <h2 className="mb-12 text-4xl font-bold">
          Event Flow
        </h2>
      </div>

      <div className="space-y-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            {event}
          </div>
        ))}
      </div>
    </section>
  );
}