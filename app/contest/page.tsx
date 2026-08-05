"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ContestPage() {
  const router = useRouter();
  const [team, setTeam] = useState<any>(null);
  <button
  onClick={() => {
    localStorage.removeItem("team");
    router.push("/login");
  }}
  className="mt-6 rounded-lg bg-red-500 px-4 py-2"
>
  Logout
</button>

  useEffect(() => {
    const savedTeam = localStorage.getItem("team");

    if (!savedTeam) {
      router.push("/login");
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
    <main className="min-h-screen bg-[#050816] text-white p-8">
      <h1 className="text-4xl font-bold">
        Welcome, <span className="text-cyan-400">{team.team_name}</span>
      </h1>
    </main>
    
  );
}