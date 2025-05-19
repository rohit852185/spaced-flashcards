// src/components/Flashcard.jsx
import { useState } from "react";

const Flashcard = ({ flashcard, onKnow, onDontKnow, onDelete, isDark }) => {
  const [flipped, setFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
    setShowAnswer(false);
  };

  const confirmDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this flashcard?");
    if (confirmed) {
      onDelete(flashcard.id);
    }
  };

  return (
    <div
      className={`rounded-3xl shadow-xl px-10 py-8 max-w-4xl mx-auto transition-all duration-300 ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      {/* Flashcard Box */}
      <div
        className={`w-full h-48 flex items-center justify-center text-xl font-semibold cursor-pointer rounded-2xl ${
          isDark ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
        }`}
        onClick={handleFlip}
      >
        {flipped ? flashcard.answer : flashcard.question}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-4 text-sm px-2">
        <button
          onClick={() => setShowAnswer(true)}
          className="text-purple-600 hover:text-purple-800"
        >
          👁 Show Answer
        </button>
        <a
          href={`https://en.wikipedia.org/wiki/${flashcard.question
            .split(" ")
            .slice(0, 4)
            .join("_")}`}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          🌐 Wikipedia
        </a>
        <button
          onClick={confirmDelete}
          className="text-red-500 hover:text-red-700"
        >
          ❌ Delete
        </button>
      </div>

      {/* Show Answer Box */}
      {showAnswer && (
        <div className="mt-4 px-4 py-2 bg-white text-black rounded-xl shadow-inner">
          <p className="text-sm font-medium">
            <strong>Answer:</strong> {flashcard.answer}
          </p>
        </div>
      )}

      {/* Know / Don’t Know Buttons */}
      <div className="flex justify-center gap-6 mt-6">
        <button
          onClick={() => {
            setFlipped(false);
            setShowAnswer(false);
            onKnow();
          }}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full"
        >
          Know
        </button>
        <button
          onClick={() => {
            setFlipped(false);
            setShowAnswer(false);
            onDontKnow();
          }}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full"
        >
          Don’t Know
        </button>
      </div>
    </div>
  );
};

export default Flashcard;
