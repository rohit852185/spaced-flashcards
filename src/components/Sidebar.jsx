// src/components/Sidebar.jsx
import {
  FaHome,
  FaBook,
  FaPlus,
  FaFolder,
  FaStickyNote,
  FaClock,
  FaWikipediaW,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const Sidebar = ({
  onChangeView,
  currentView,
  isDark,
  toggleTheme,
  onSelectSubject,
  selectedSubject,
  flashcards,
  subjects,
}) => {
  const menuItems = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "flashcards", label: "Flashcards", icon: <FaBook /> },
    { id: "add", label: "Add Flashcard", icon: <FaPlus /> },
    { id: "subjects", label: "Subjects", icon: <FaFolder /> },
    { id: "notes", label: "Notes", icon: <FaStickyNote /> },
    { id: "reminders", label: "Reminders", icon: <FaClock /> },
    { id: "wiki", label: "Wikipedia", icon: <FaWikipediaW />, isExternal: true },
  ];

  return (
    <div
      className={`w-60 h-full fixed left-0 top-0 z-10 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      } border-r border-gray-300 p-4 shadow-lg transition duration-300 ease-in-out`}
    >
      <h2 className="text-2xl font-extrabold mb-6 text-center text-blue-500">
        StudyNav 📚
      </h2>

      <nav className="space-y-3">
        {menuItems.map((item) =>
          item.isExternal ? (
            <a
              key={item.id}
              href="https://en.wikipedia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-2 px-3 rounded hover:bg-blue-100 dark:hover:bg-gray-700 transition text-sm"
            >
              {item.icon} {item.label}
            </a>
          ) : (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id)}
              className={`flex items-center gap-3 w-full py-2 px-3 rounded text-sm transition ${
                currentView === item.id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100 dark:hover:bg-gray-700"
              }`}
            >
              {item.icon} {item.label}
            </button>
          )
        )}
      </nav>

      {currentView === "flashcards" && subjects?.length > 0 && (
        <div className="mt-6">
          <label
            htmlFor="subjectSelect"
            className="block mb-2 font-semibold text-gray-600 dark:text-gray-300"
          >
            Filter by Subject:
          </label>
          <select
            id="subjectSelect"
            value={selectedSubject || "All"}
            onChange={(e) => onSelectSubject(e.target.value)}
            className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring text-black"
          >
            <option value="All">All</option>
            {subjects.map((subj) => (
              <option key={subj} value={subj}>
                {subj}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="mt-10">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 w-full py-2 px-3 rounded text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
        >
          {isDark ? <FaSun /> : <FaMoon />} {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
