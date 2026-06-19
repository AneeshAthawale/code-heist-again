import Link from "next/link";
export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Coding Contest 2026
      </p>

      <div className="relative">
        <div className="absolute inset-0 blur-3xl bg-cyan-500/20"></div>

        <h1 className="relative mb-6 text-6xl font-extrabold md:text-8xl">
          CODE <span className="text-cyan-400">HEIST</span>
        </h1>
      </div>

      <h2 className="mb-6 text-2xl font-semibold text-gray-200 md:text-3xl">
        Crack the Code. Steal the Crown.
      </h2>

      <p className="mb-8 max-w-2xl text-lg text-gray-400">
        A beginner-friendly coding contest where strategy, teamwork,
        and programming skills come together.
      </p>

      <div className="mb-10 flex flex-wrap justify-center gap-6 text-gray-300">
        <span>📅 25 July 2026</span>
        <span>📍 PCCOE&R, Ravet</span>
        <span>👥 Teams of 2–4</span>
      </div>

      <div className="flex gap-4">
        <Link
          href="/Register"
          className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
        >
          Register Now
        </Link>

        <button className="rounded-lg border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black">
          View Rules
        </button>
      </div>
    </section>
  );
}