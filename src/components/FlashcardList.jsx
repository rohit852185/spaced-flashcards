// src/components/FlashcardList.jsx
import React from "react";
import Flashcard from "./Flashcard";

const FlashcardList = ({ flashcards, onKnow, onDontKnow, onDelete, isDark }) => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.freepik.com/free-vector/abstract-watercolor-background_23-2149037575.jpg?w=1380&t=st=1716117123~exp=1716117723~hmac=ee76813bbf232d34be2d5d11f65f778a3c197f35dcd60c20c0a8cf57b35663a1"
          alt="colorful watercolor background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-white dark:bg-gray-900 opacity-40"></div>
      </div>

      {/* Flashcards */}
      <div className="relative z-10 grid grid-cols-1 gap-8 max-w-6xl mx-auto px-4 py-12">
        {flashcards.map((card) => (
          <Flashcard
            key={card.id}
            flashcard={card}
            onKnow={onKnow}
            onDontKnow={onDontKnow}
            onDelete={onDelete}
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  );
};

export default FlashcardList;