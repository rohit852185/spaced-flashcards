// src/components/Notes.jsx
import React, { useState } from "react";

const Notes = ({ notes, setNotes, subjects }) => {
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [newNote, setNewNote] = useState("");

  const handleAddNote = (subject) => {
    if (newNote.trim()) {
      const noteObj = { id: Date.now(), subject, text: newNote };
      setNotes([...notes, noteObj]);
      setNewNote("");
    }
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1470&q=80"
          alt="notes background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-white dark:bg-gray-900 opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
          📝 Organize Your Notes by Subject
        </h2>

        {subjects.map((subject) => (
          <div
            key={subject}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-6 p-4"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300">
                {subject}
              </h3>
              <button
                onClick={() =>
                  setExpandedSubject(
                    expandedSubject === subject ? null : subject
                  )
                }
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-3 py-1 rounded"
              >
                {expandedSubject === subject ? "Hide" : "Expand"}
              </button>
            </div>

            {expandedSubject === subject && (
              <div className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Write a note..."
                    className="flex-grow p-2 rounded border shadow"
                  />
                  <button
                    onClick={() => handleAddNote(subject)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Add
                  </button>
                </div>
                {notes
                  .filter((n) => n.subject === subject)
                  .map((note) => (
                    <div
                      key={note.id}
                      className="bg-gray-100 dark:bg-gray-700 text-black dark:text-white p-3 rounded shadow flex justify-between"
                    >
                      <span>{note.text}</span>
                      <button
                        onClick={() => handleDelete(note.id)}
                        className="text-red-500 hover:text-red-700 ml-4"
                      >
                        ❌
                      </button>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
