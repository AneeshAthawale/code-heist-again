"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ContestPage() {
  const router = useRouter();
  const [team, setTeam] = useState<any>(null);

  useEffect(() => {
    const savedTeam = localStorage.getItem("team");

    if (!savedTeam) {
      router.push("/Login");
      return;
    }

    setTeam(JSON.parse(savedTeam));
  }, [router]);

  if (!team) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050816] text-white">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] p-8 text-white">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          Welcome, <span className="text-cyan-400">{team.team_name}</span>
        </h1>

        <button
          onClick={() => {
            localStorage.removeItem("team");
            router.push("/Login");
          }}
          className="rounded-lg bg-red-500 px-4 py-2 font-semibold hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </main>
  );
}