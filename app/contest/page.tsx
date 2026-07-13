"use client";

import { useState } from "react";

export default function ContestPage() {
  const [teamName] = useState("Cyber Pirates");
  const [credits] = useState(1000);
  const [questionsBought] = useState(0);
  const [currentRound] = useState("Bidding Round");

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-8 text-5xl font-bold">
          Welcome,{" "}
          <span className="text-cyan-400">{teamName}</span>
        </h1>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg text-gray-400">
              Current Round
            </h2>

            <p className="mt-2 text-2xl font-bold text-cyan-400">
              {currentRound}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg text-gray-400">
              Credits Remaining
            </h2>

            <p className="mt-2 text-2xl font-bold text-cyan-400">
              {credits}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg text-gray-400">
              Questions Purchased
            </h2>

            <p className="mt-2 text-2xl font-bold text-cyan-400">
              {questionsBought}/4
            </p>
          </div>

        </div>

        <section className="mt-10 rounded-xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Contest Status
          </h2>

          <p className="text-gray-300">
            ⏳ Contest has not started yet.
          </p>
        </section>

        <section className="mt-10 rounded-xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Assigned Questions
          </h2>

          <p className="text-gray-300">
            No questions assigned yet.
          </p>
        </section>

      </div>
    </main>
  );
}