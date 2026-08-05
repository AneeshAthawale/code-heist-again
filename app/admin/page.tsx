"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Team } from "@/app/types/team";

export default function AdminPage() {
    const [search, setSearch] = useState("");
    const [teams, setTeams] = useState<Team[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchTeams() {
            const { data, error } = await supabase
                .from("teams")
                .select("*")
                .order("created_at", { ascending: false });

            if (!error && data) {
                setTeams(data);
            }

            setLoading(false);
        }

        fetchTeams();
    }, []);
    const filteredTeams = teams.filter((team) =>
        team.team_name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <main className="min-h-screen bg-[#050816] text-white p-10">
            <h1 className="text-5xl font-bold">
                Admin <span className="text-cyan-400">Dashboard</span>
            </h1>

            <p className="mt-2 text-gray-400">
                Registered Teams: {teams.length}
            </p>
            <div className="mt-6">
                <input
                    type="text"
                    placeholder="Search team..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full max-w-md rounded-lg border border-white/10 bg-[#0B1120] p-3 outline-none focus:border-cyan-400"
                />
            </div>

            {loading ? (
                <p className="mt-8">Loading...</p>
            ) : (
                <div className="mt-8">
                    <div className="mt-8 overflow-x-auto rounded-xl border border-white/10">
                        <table className="w-full">
                            <thead className="bg-white/10">
                                <tr>
                                    <th className="p-4 text-left">Team</th>
                                    <th className="p-4 text-left">Leader</th>
                                    <th className="p-4 text-left">Members</th>
                                    <th className="p-4 text-left">Status</th>
                                    <th className="p-4 text-left">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredTeams.map((team) => (
                                    <tr
                                        key={team.id}
                                        className="border-t border-white/10 hover:bg-white/5"
                                    >
                                        <td className="p-4">{team.team_name}</td>

                                        <td className="p-4">{team.leader_name}</td>

                                        <td className="p-4">
                                            {[
                                                team.leader_name,
                                                team.member2,
                                                team.member3,
                                                team.member4,
                                            ].filter(Boolean).length}
                                        </td>

                                        <td className="p-4 text-green-400">
                                            Registered
                                        </td>

                                        <td className="p-4">
                                            <button className="rounded bg-cyan-500 px-3 py-1 text-sm font-semibold text-black hover:bg-cyan-400">
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </main>
    );
}