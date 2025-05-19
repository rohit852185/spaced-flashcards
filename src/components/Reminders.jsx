// src/components/Reminders.jsx
import React, { useState } from "react";

const Reminders = ({ flashcards, reviewedIds, onSelectCard }) => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);

  const cardsForDate = flashcards.filter(
    (card) => !reviewedIds.includes(card.id)
  );

  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-gray-900">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.freepik.com/free-photo/top-view-alarm-clock-white-desk_23-2148802081.jpg?w=1380&t=st=1716116899~exp=1716117499~hmac=62a6b7f84661a7dd9b805496170ad3f1ef82d6d865927f5f0d63a207b9d9f671"
          alt="clock background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-white dark:bg-gray-900 opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-500 to-pink-500 text-transparent bg-clip-text">
          ⏰ Today's Flashcard Reminders
        </h2>

        <div className="text-center mb-6">
          <label className="font-medium mr-2">Select Date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="p-2 rounded border"
          />
        </div>

        {cardsForDate.length === 0 ? (
          <p className="text-center text-gray-500">You're all caught up for today! 🎉</p>
        ) : (
          <ul className="space-y-4">
            {cardsForDate.map((card) => (
              <li
                key={card.id}
                className="bg-white dark:bg-gray-800 p-4 rounded shadow flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold text-blue-700 dark:text-blue-300">
                    {card.question}
                  </p>
                  <p className="text-sm text-gray-500">Subject: {card.subject}</p>
                </div>
                <button
                  onClick={() => onSelectCard(card)}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                  Review Now
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Reminders;