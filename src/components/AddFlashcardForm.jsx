// src/components/AddFlashcardForm.jsx
import React, { useState } from "react";

const AddFlashcardForm = ({ onAdd, subjects, presetSubject }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [subject, setSubject] = useState(presetSubject || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question && answer && subject) {
      onAdd({ id: Date.now(), question, answer, subject });
      setQuestion("");
      setAnswer("");
      if (!presetSubject) setSubject("");
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-gray-900">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.freepik.com/free-photo/top-view-people-planning-tasks_23-2149276550.jpg?w=1380&t=st=1716117082~exp=1716117682~hmac=cd9b7c81b667155dc2c3efc9f191ff847ecfb8321d1940b18e61f00aaebfb7f6"
          alt="planning operation background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-white dark:bg-gray-900 opacity-40"></div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md max-w-xl mx-auto mt-12"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600 dark:text-indigo-300">
          ➕ Add a New Flashcard
        </h2>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Question:</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Answer:</label>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold">Subject:</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
            required
          >
            <option value="">Select subject</option>
            {subjects.map((subj) => (
              <option key={subj} value={subj}>
                {subj}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          Add Flashcard
        </button>
      </form>
    </div>
  );
};

export default AddFlashcardForm;
