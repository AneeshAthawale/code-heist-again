"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [password, setPassword] = useState("");
  const [member2, setMember2] = useState("");
  const [member3, setMember3] = useState("");
  const [member4, setMember4] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!teamName.trim() || !leaderName.trim() || !password.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    const { error } = await supabase.from("teams").insert([
      {
        team_name: teamName,
        leader_name: leaderName,
        password: password,
        member2: member2,
        member3: member3,
        member4: member4,
      },
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Team registered successfully!");

    setTeamName("");
    setLeaderName("");
    setPassword("");
    setMember2("");
    setMember3("");
    setMember4("");
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-5xl font-bold">
          Register for
          <span className="text-cyan-400"> Code Heist</span>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8"
        >
          <input
            type="text"
            placeholder="Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="w-full rounded-lg bg-[#0B1120] p-3"
          />

          <input
            type="text"
            placeholder="Leader Name"
            value={leaderName}
            onChange={(e) => setLeaderName(e.target.value)}
            className="w-full rounded-lg bg-[#0B1120] p-3"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg bg-[#0B1120] p-3"
          />

          <input
            type="text"
            placeholder="Member 2"
            value={member2}
            onChange={(e) => setMember2(e.target.value)}
            className="w-full rounded-lg bg-[#0B1120] p-3"
          />

          <input
            type="text"
            placeholder="Member 3"
            value={member3}
            onChange={(e) => setMember3(e.target.value)}
            className="w-full rounded-lg bg-[#0B1120] p-3"
          />

          <input
            type="text"
            placeholder="Member 4"
            value={member4}
            onChange={(e) => setMember4(e.target.value)}
            className="w-full rounded-lg bg-[#0B1120] p-3"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-500 py-3 font-semibold text-black"
          >
            Register Team
          </button>
        </form>
      </div>
    </main>
  );
}