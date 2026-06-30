"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (!teamName.trim()) {
      alert("Please enter a team name.");
      return;
    }

    if (!leaderName.trim()) {
      alert("Please enter the team leader's name.");
      return;
    }

    console.log("Team Name:", teamName);
    console.log("Leader Name:", leaderName);

    alert(`Team ${teamName} registered successfully!`);
  }
  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-5xl font-bold">
          Register for
          <span className="text-cyan-400"> Code Heist</span>
        </h1>

        <p className="mb-10 text-gray-400">
          Create your team and secure your spot in the contest.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8"
        >
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Team Name
            </label>

            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-[#0B1120] p-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Team Leader Name
            </label>

            <input
              type="text"
              value={leaderName}
              onChange={(e) => setLeaderName(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-[#0B1120] p-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Team Password
            </label>

            <input
              type="password"
              className="w-full rounded-lg border border-white/10 bg-[#0B1120] p-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Member 2
            </label>

            <input
              type="text"
              className="w-full rounded-lg border border-white/10 bg-[#0B1120] p-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Member 3
            </label>

            <input
              type="text"
              className="w-full rounded-lg border border-white/10 bg-[#0B1120] p-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Member 4
            </label>

            <input
              type="text"
              className="w-full rounded-lg border border-white/10 bg-[#0B1120] p-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 p-4">
            <h3 className="mb-2 text-lg font-semibold text-cyan-400">
              Team Preview
            </h3>

            <p>
              <span className="font-semibold">Team:</span> {teamName || "Not entered"}
            </p>

            <p>
              <span className="font-semibold">Leader:</span> {leaderName || "Not entered"}
            </p>

          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-500 py-3 font-semibold text-black transition hover:bg-cyan-400"
          >
            Register Team
          </button>
        </form>
      </div>
    </main>
  );
}