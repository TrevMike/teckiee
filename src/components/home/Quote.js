import { useEffect, useState } from "react";

function Quote() {
  const quoteOfTheDay = [
    {
      quote:
        "Any sufficiently advanced technology is indistinguishable from magic.",
      author: "- Arthur C. Clarke",
    },
    {
      quote: "Quality is not an act, it is a habit.",
      author: "- Aristotle",
    },
    {
      quote: "The best way to predict the future is to invent it.",
      author: "- Alan Kay",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "- Steve Jobs",
    },
    {
      quote: "Don't be afraid to give up the good to go for the great.",
      author: "- John D. Rockefeller",
    },
    {
      quote:
        "Marketing is no longer about the stuff that you make, but about the stories you tell.",
      author: "- Seth Godin",
    },
    {
      quote: "Innovation distinguishes between a leader and a follower",
      author: "- Steve Jobs",
    },
    {
      quote:
        "Networking is not about just connecting people. It's about connecting people with people, people with ideas, and people with opportunities.",
      author: "- Michele Jennae",
    },
  ]; // dummy data

  const [qouteData, setQuoteData] = useState("");
  useEffect(() => {
    const index = Math.floor(Math.random() * quoteOfTheDay.length);
    setQuoteData(quoteOfTheDay[index]);
  }, []);
  // console.log(quoteChooser());
  return (
    <div className="flex justify-center bg-indigo-950 py-32">
      <div className="flex flex-col items-center w-3/4">
        <p className="w-full text-violet-400 mb-6 font-montserrat font-light text-4xl text-center">
          {qouteData.quote}
        </p>
        <div className="w-full text-slate-400 font-fira font-light text-sm text-center">
          {qouteData.author}
        </div>
      </div>
    </div>
  );
}
export default Quote;
