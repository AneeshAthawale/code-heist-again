"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type QuestionFormProps = {
  onQuestionAdded: () => void;
};

export default function QuestionForm({
  onQuestionAdded,
}: QuestionFormProps) {
  console.log("QuestionForm rendered");
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [description, setDescription] = useState("");
  const [round, setRound] = useState(1);
  const [language, setLanguage] = useState("C++");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Submit button clicked");

    const { data, error } = await supabase
      .from("questions")
      .insert([
        {
          title,
          description,
          round,
          difficulty,
          language,
        },
      ])
      .select();

    console.log("Data:", data);
    console.log("Error:", error);

    if (error) {
      console.log(error);
      alert(JSON.stringify(error, null, 2));
      return;
    }

    alert("Question added successfully!");

    setTitle("");
    setDescription("");
    setRound(1);
    setDifficulty("Easy");
    setLanguage("C++");
  }

  return (
    <form
      onSubmit={(e) => {
        console.log("FORM SUBMITTED");
        handleSubmit(e);
      }}
      className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6"
    >

      <input
        type="text"
        placeholder="Question Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-lg bg-[#0B1120] p-3"
      />

      <textarea
        placeholder="Question Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full rounded-lg bg-[#0B1120] p-3"
      />

      <select
        value={round}
        onChange={(e) => setRound(Number(e.target.value))}
        className="w-full rounded-lg bg-[#0B1120] p-3"
      >
        <option value={1}>Round 1</option>
        <option value={2}>Round 2</option>
      </select>

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="w-full rounded-lg bg-[#0B1120] p-3"
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="w-full rounded-lg bg-[#0B1120] p-3"
      >
        <option>C++</option>
        <option>C</option>
        <option>Java</option>
        <option>Python</option>
      </select>

      <button
        type="submit"
        className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400"
      >
        Add Question
      </button>
    </form>
  );
}