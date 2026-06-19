export default function Rounds() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Contest Format
        </p>

        <h2 className="mb-12 text-4xl font-bold">
          Two Rounds. One Winner.
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="mb-4 text-2xl font-bold text-cyan-400">
            Round 1
          </h3>

          <h4 className="mb-4 text-xl font-semibold">
            Bidding Round
          </h4>

          <p className="text-gray-400">
            Teams receive 1000 credits and strategically bid on coding
            questions. Purchase up to four questions and build your path
            to victory.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="mb-4 text-2xl font-bold text-cyan-400">
            Round 2
          </h3>

          <h4 className="mb-4 text-xl font-semibold">
            The Race
          </h4>

          <p className="text-gray-400">
            Team members solve their assigned questions against the clock.
            Accuracy and speed determine the final rankings.
          </p>
        </div>
      </div>
    </section>
  );
}