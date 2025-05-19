// src/components/MotivationalQuote.jsx
import React from "react";

const quotes = [
  {
    text: "Push yourself, because no one else is going to do it for you.",
    image: "https://images.unsplash.com/photo-1584697964190-1a6f0b211d53?auto=format&fit=crop&w=1950&q=80",
  },
  {
    text: "Success doesn’t just find you. You have to go out and get it.",
    image: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=1950&q=80",
  },
  {
    text: "Great things never come from comfort zones.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80",
  },
  {
    text: "You have the right to work, but never to the fruit of work. – Bhagavad Gita",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1950&q=80",
  },
  {
    text: "Set thy heart upon thy work but never its reward. – Bhagavad Gita",
    image: "https://images.unsplash.com/photo-1557683304-673a23048d34?auto=format&fit=crop&w=1950&q=80",
  },
  {
    text: "No one who does good work will ever come to a bad end. – Bhagavad Gita",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1950&q=80",
  },
  {
    text: "There is neither this world, nor the world beyond, nor happiness for the one who doubts. – Bhagavad Gita",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1950&q=80",
  },
  {
    text: "A man is made by his belief. As he believes, so he is. – Bhagavad Gita",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80",
  },
  {
    text: "Perform your obligatory duty, because action is indeed better than inaction. – Bhagavad Gita",
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1950&q=80",
  },
  {
    text: "The soul is neither born, and nor does it die. – Bhagavad Gita",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1950&q=80",
  },
  {
    text: "Change is the law of the universe. You can be a millionaire or a pauper in an instant. – Bhagavad Gita",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1950&q=80",
  },
  {
    text: "One who sees inaction in action, and action in inaction, is intelligent among men. – Bhagavad Gita",
    image: "https://images.unsplash.com/photo-1610878180933-d9d902681fd6?auto=format&fit=crop&w=1950&q=80",
  },
];

const MotivationalQuote = () => {
  const random = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 opacity-20 blur-xl" />

      {/* Quote Section */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-6 py-20">
        <img
          src={quote.image}
          alt="Motivational"
          className="w-full max-w-4xl rounded-3xl shadow-2xl mb-10"
        />
        <blockquote className="text-4xl font-bold text-gray-800 dark:text-white max-w-4xl leading-relaxed">
          “{quote.text}”
        </blockquote>
      </div>
    </div>
  );
};

export default MotivationalQuote;