// src/App.jsx
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import FlashcardList from "./components/FlashcardList";
import ReviewStats from "./components/ReviewStats";
import AddFlashcardForm from "./components/AddFlashcardForm";
import MotivationalQuote from "./components/MotivationalQuote";
import Subjects from "./components/Subjects";
import Notes from "./components/Notes";
import Reminders from "./components/Reminders";

const initialCards = [
  {
    id: 1,
    question: "What is React?",
    answer: "A JavaScript library for building user interfaces",
    subject: "JavaScript",
  },
  {
    id: 2,
    question: "What is Tailwind CSS?",
    answer: "A utility-first CSS framework",
    subject: "CSS",
  },
  {
    id: 3,
    question: "What is Vite?",
    answer: "A fast build tool for frontend development",
    subject: "Tools",
  },
];

function App() {
  // Initialize state from localStorage or use defaults
  const [flashcards, setFlashcards] = useState(() => {
    const saved = localStorage.getItem("flashcards");
    return saved ? JSON.parse(saved) : initialCards;
  });

  const [reviewedIds, setReviewedIds] = useState(() => {
    const saved = localStorage.getItem("reviewed");
    return saved ? JSON.parse(saved) : [];
  });

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [subjects, setSubjects] = useState(() => {
    const saved = localStorage.getItem("subjects");
    return saved ? JSON.parse(saved) : ["JavaScript", "CSS", "Tools"];
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [view, setView] = useState("home");
  const [isDark, setIsDark] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [filteredCards, setFilteredCards] = useState([]);

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
  }, [flashcards]);

  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  useEffect(() => {
    localStorage.setItem("reviewed", JSON.stringify(reviewedIds));
  }, [reviewedIds]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (selectedSubject === "All") {
      setFilteredCards(flashcards);
      setCurrentIndex(0);
    } else {
      const filtered = flashcards.filter(
        (card) => card.subject === selectedSubject
      );
      setFilteredCards(filtered);
      setCurrentIndex(0);
    }
  }, [selectedSubject, flashcards]);

  const handleAddFlashcard = (newCard) => {
    setFlashcards([...flashcards, newCard]);
    if (!subjects.includes(newCard.subject)) {
      setSubjects([...subjects, newCard.subject]);
    }
  };

  const handleDeleteFlashcard = (id) => {
    const updated = flashcards.filter((card) => card.id !== id);
    setFlashcards(updated);
  };

  const handleKnow = () => {
    if (filteredCards.length === 0) return;
    const currentCardId = filteredCards[currentIndex].id;
    if (!reviewedIds.includes(currentCardId)) {
      setReviewedIds([...reviewedIds, currentCardId]);
    }
    nextCard();
  };

  const handleDontKnow = () => {
    nextCard();
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      filteredCards.length === 0 ? 0 : (prevIndex + 1) % filteredCards.length
    );
  };

  const handleSelectCardFromReminder = (card) => {
    setSelectedSubject(card.subject);
    setCurrentIndex(
      flashcards.findIndex((c) => c.id === card.id && c.subject === card.subject)
    );
    setView("flashcards");
  };

  const currentCard =
    filteredCards.length > 0 ? [filteredCards[currentIndex]] : [];

  return (
    <div
      className={`$ {
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } min-h-screen`}
    >
      <Sidebar
        onChangeView={setView}
        currentView={view}
        isDark={isDark}
        toggleTheme={() => setIsDark(!isDark)}
        onSelectSubject={setSelectedSubject}
        selectedSubject={selectedSubject}
        flashcards={flashcards}
        subjects={subjects}
        setSubjects={setSubjects}
      />

      <div className="ml-60 p-6 transition-all duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Spaced Repetition Study Assistant
        </h1>

        {view === "home" && <MotivationalQuote />}

        {view === "add" && (
          <AddFlashcardForm onAdd={handleAddFlashcard} subjects={subjects} />
        )}

        {view === "flashcards" && (
          <>
            <ReviewStats
              total={filteredCards.length}
              reviewed={reviewedIds.length}
            />

            {filteredCards.length > 0 ? (
              <FlashcardList
                flashcards={currentCard}
                onKnow={handleKnow}
                onDontKnow={handleDontKnow}
                onDelete={handleDeleteFlashcard}
                isDark={isDark}
              />
            ) : (
              <p className="text-center text-gray-400 mt-10">
                No flashcards found for selected subject.
              </p>
            )}
          </>
        )}

        {view === "subjects" && (
          <Subjects
            subjects={subjects}
            setSubjects={setSubjects}
            flashcards={flashcards}
            onAddFlashcard={handleAddFlashcard}
            onDeleteFlashcard={handleDeleteFlashcard}
          />
        )}

        {view === "notes" && (
          <Notes
            notes={notes}
            setNotes={setNotes}
            subjects={subjects}
          />
        )}

        {view === "reminders" && (
          <Reminders
            flashcards={flashcards}
            reviewedIds={reviewedIds}
            onSelectCard={handleSelectCardFromReminder}
          />
        )}
      </div>
    </div>
  );
}

export default App;
