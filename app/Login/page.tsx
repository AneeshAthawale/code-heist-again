"use client";

import { useState } from "react";

export default function LoginPage() {
  const [teamName, setTeamName] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!teamName.trim()) {
      alert("Please enter your team name.");
      return;
    }

    if (!password.trim()) {
      alert("Please enter your password.");
      return;
    }

    console.log("Logging in:", teamName);

    alert(`Welcome, ${teamName}!`);
  }

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16 text-white">
      <div className="mx-auto max-w-md">
        <h1 className="mb-2 text-center text-5xl font-bold">
          Team <span className="text-cyan-400">Login</span>
        </h1>

        <p className="mb-10 text-center text-gray-400">
          Sign in to access the contest dashboard.
        </p>

        <form
          onSubmit={handleLogin}
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
              Team Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-[#0B1120] p-3 outline-none focus:border-cyan-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-500 py-3 font-semibold text-black transition hover:bg-cyan-400"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}