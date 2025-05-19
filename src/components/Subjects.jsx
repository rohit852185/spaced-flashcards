// src/components/Subjects.jsx
import React, { useState } from "react";
import Flashcard from "./Flashcard";
import AddFlashcardForm from "./AddFlashcardForm";

const Subjects = ({ subjects, setSubjects, flashcards, onAddFlashcard, onDeleteFlashcard }) => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (subject) => {
    setExpanded(expanded === subject ? null : subject);
  };

  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-gray-900">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618220179428-22790f5f71e2?auto=format&fit=crop&w=1470&q=80"
          alt="subject background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-white dark:bg-gray-900 opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-transparent bg-clip-text">
          📚 Browse Subjects & Manage Flashcards
        </h2>

        <div className="space-y-6">
          {subjects.map((subject) => (
            <div
              key={subject}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300">
                  {subject}
                </h3>
                <button
                  onClick={() => toggleExpand(subject)}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded"
                >
                  {expanded === subject ? "Hide" : "View"}
                </button>
              </div>

              {expanded === subject && (
                <div className="mt-4 space-y-4">
                  <AddFlashcardForm
                    onAdd={onAddFlashcard}
                    subjects={[subject]}
                    presetSubject={subject}
                  />

                  {flashcards
                    .filter((card) => card.subject === subject)
                    .map((card) => (
                      <Flashcard
                        key={card.id}
                        flashcard={card}
                        onKnow={() => {}}
                        onDontKnow={() => {}}
                        onDelete={onDeleteFlashcard}
                      />
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
