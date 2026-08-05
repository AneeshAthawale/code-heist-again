"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import QuestionForm from "@/app/components/admin/QuestionForm";
import QuestionTable from "@/app/components/admin/QuestionTable";

import type { Question } from "@/app/types/question";

export default function QuestionsPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuestions();
  }, []);

  async function fetchQuestions() {
    const { data, error } = await supabase
      .from("questions")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setQuestions(data);
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#050816] p-10 text-white">
      <h1 className="mb-8 text-5xl font-bold">
        Manage <span className="text-cyan-400">Questions</span>
      </h1>

      <QuestionForm onQuestionAdded={fetchQuestions} />

      {loading ? (
        <p className="mt-8 text-gray-400">Loading...</p>
      ) : (
        <QuestionTable
          questions={questions}
          onQuestionDeleted={fetchQuestions}
        />
      )}
    </main>
  );
}