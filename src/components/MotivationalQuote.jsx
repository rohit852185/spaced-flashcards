// src/components/MotivationalQuote.jsx
import { useEffect, useState } from "react";

const quotes = [
  {
    text: "The best way to predict the future is to create it.",
    author: "Abraham Lincoln",
    image: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    image: "https://cdn-icons-png.flaticon.com/512/5260/5260205.png",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
    image: "https://cdn-icons-png.flaticon.com/512/4240/4240625.png",
  },
];

const MotivationalQuote = () => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <div className="relative bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl p-10 max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#6c63ff"
            d="M0,160L60,160C120,160,240,160,360,170.7C480,181,600,203,720,197.3C840,192,960,160,1080,160C1200,160,1320,192,1380,208L1440,224V320H0Z"
          />
        </svg>

        <img
          src={quote.image}
          alt="Motivational"
          className="w-36 h-36 object-contain z-10"
        />

        <div className="text-center md:text-left z-10">
          <p className="text-2xl font-semibold text-gray-800 dark:text-white leading-snug">
            “{quote.text}”
          </p>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 italic">
            — {quote.author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MotivationalQuote;
