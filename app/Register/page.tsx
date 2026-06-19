"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [teamName, setTeamName] = useState("");

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

        <form className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8">
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

          <p className="text-cyan-400">
            Team N Preview: {teamName}
          </p>

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