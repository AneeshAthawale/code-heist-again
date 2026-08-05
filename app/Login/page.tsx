"use client";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [teamName, setTeamName] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (teamName === "admin" && password === "codeheist2026") {
      router.push("/components/admin");
      return;
    }

    if (!teamName.trim() || !password.trim()) {
      alert("Fill all fields.");
      return;
    }

    // Supabase login...


    const { data, error } = await supabase
      .from("teams")
      .select("*")
      .eq("team_name", teamName)
      .eq("password", password)
      .single();

    if (error || !data) {
      alert("Invalid credentials.");
      return;
    }

    localStorage.setItem("team", JSON.stringify(data));

    router.push("/contest");
  }
  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="mb-2 text-4xl font-bold">
          Team <span className="text-cyan-400">Login</span>
        </h1>

        <p className="mb-8 text-gray-400">
          Enter your team credentials.
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
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
              Password
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