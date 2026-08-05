"use client";

import { supabase } from "@/lib/supabase";
import type { Question } from "@/app/types/question";

interface Props {
  questions: Question[];
  onQuestionDeleted: () => void;
}

export default function QuestionTable({
  questions,
  onQuestionDeleted,
}: Props) {
  async function deleteQuestion(id: number) {
    if (!confirm("Delete this question?")) return;

    const { error } = await supabase
      .from("questions")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    onQuestionDeleted();
  }

  return (
    <div className="mt-8 overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-left">
        <thead className="bg-white/10">
          <tr>
            <th className="p-4">Title</th>
            <th className="p-4">Round</th>
            <th className="p-4">Difficulty</th>
            <th className="p-4">Language</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {questions.map((question) => (
            <tr key={question.id} className="border-t border-white/10">
              <td className="p-4">{question.title}</td>
              <td className="p-4">{question.round}</td>
              <td className="p-4">{question.difficulty}</td>
              <td className="p-4">{question.language}</td>

              <td className="p-4">
                <button
                  onClick={() => deleteQuestion(question.id)}
                  className="rounded bg-red-600 px-3 py-1 hover:bg-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}