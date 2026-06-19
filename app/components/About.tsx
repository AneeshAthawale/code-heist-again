export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        About
      </p>

      <h2 className="mb-6 text-4xl font-bold">
        What is Code Heist?
      </h2>

      <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-400">
        Code Heist is a beginner-friendly coding contest designed to help
        students explore programming through strategy, teamwork, and
        problem-solving.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-2 text-xl font-bold text-cyan-400">20</h3>
          <p className="text-gray-400">Teams</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-2 text-xl font-bold text-cyan-400">40</h3>
          <p className="text-gray-400">Questions</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-2 text-xl font-bold text-cyan-400">2</h3>
          <p className="text-gray-400">Rounds</p>
        </div>
      </div>
    </section>
  );
}