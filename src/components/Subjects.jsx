// src/components/Subjects.jsx
import React, { useState } from "react";
import FlashcardList from "./FlashcardList";
import AddFlashcardForm from "./AddFlashcardForm";

const Subjects = ({ subjects, setSubjects, flashcards, onAddFlashcard, onDeleteFlashcard, onKnow, onDontKnow, isDark }) => {
  const [expanded, setExpanded] = useState(null);
  const [newSubject, setNewSubject] = useState("");

  const toggleExpand = (subject) => {
    setExpanded((prev) => (prev === subject ? null : subject));
  };

  const handleAddSubject = () => {
    if (!newSubject.trim()) return alert("Subject name cannot be empty.");
    if (subjects.includes(newSubject.trim())) return alert("Subject already exists.");
    setSubjects([...subjects, newSubject.trim()]);
    setNewSubject("");
  };

  const handleDeleteSubject = (subject) => {
    const confirmed = window.confirm(`Delete subject '${subject}' and all its flashcards?`);
    if (confirmed) {
      setSubjects(subjects.filter((s) => s !== subject));
      onDeleteFlashcard(null, subject); // delete all flashcards under this subject
    }
  };

  return (
    <div className="relative min-h-screen px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600 dark:text-indigo-300">📚 Subjects</h2>

      {/* Add New Subject */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <input
          type="text"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
          placeholder="Enter new subject name"
          className="p-2 rounded border shadow-sm w-64"
        />
        <button
          onClick={handleAddSubject}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Subject
        </button>
      </div>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {subjects.map((subject) => {
          const subjectCards = flashcards.filter((card) => card.subject === subject);
          return (
            <div key={subject} className="border rounded-xl shadow-md p-4 bg-white dark:bg-gray-800">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-blue-500">{subject}</h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => toggleExpand(subject)}
                    className="text-sm px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                  >
                    {expanded === subject ? "Hide" : "View"}
                  </button>
                  <button
                    onClick={() => handleDeleteSubject(subject)}
                    className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {expanded === subject && (
                <div className="mt-4">
                  <AddFlashcardForm
                    onAdd={onAddFlashcard}
                    subjects={[subject]}
                    presetSubject={subject}
                  />
                  <FlashcardList
                    flashcards={subjectCards}
                    onKnow={onKnow}
                    onDontKnow={onDontKnow}
                    onDelete={onDeleteFlashcard}
                    isDark={isDark}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Subjects;