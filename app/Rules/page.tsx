export default function RulesPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-10 text-center text-5xl font-bold">
          Contest <span className="text-cyan-400">Rules</span>
        </h1>

        <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8">
          <ul className="space-y-4 text-lg text-gray-300">
            <li>• Teams can have 2 to 4 members.</li>

            <li>
              • Contestants cannot switch tabs or minimize the browser during
              the contest.
            </li>

            <li>
              • During the bidding round, no team may bid more than their
              available credits.
            </li>

            <li>
              • Solutions are locked immediately after submission.
            </li>

            <li>
              • When the timer ends, submissions happen automatically.
            </li>

            <li>
              • Team members may collaborate during the contest.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}