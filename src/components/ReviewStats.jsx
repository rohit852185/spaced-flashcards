// src/components/ReviewStats.jsx
const ReviewStats = ({ total, reviewed }) => {
  const progress = total === 0 ? 0 : Math.round((reviewed / total) * 100);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 mb-6 rounded-xl shadow w-full max-w-2xl mx-auto">
      <h3 className="text-lg font-bold mb-2 text-center text-blue-600 dark:text-blue-300">
        Flashcard Review Progress
      </h3>
      <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-300">
        {reviewed} out of {total} cards reviewed ({progress}%)
      </p>
    </div>
  );
};

export default ReviewStats;
