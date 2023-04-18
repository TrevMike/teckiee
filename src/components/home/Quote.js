import { useEffect, useState } from "react";

function Quote() {
  const quoteOfTheDay = [
    {
      quote:
        "The people in charge,globally, are maniacs. They are maniacs, and unless we do something about it these people are going to deprive us of a future.",
      author: "test",
    },
    {
      quote:
        "The people in charge,globally, are maniacs. They are maniacs, and unless we do something about it these people are going to deprive us of a future.",
      author: "test",
    },
    {
      quote:
        "The people in charge,globally, are maniacs. They are maniacs, and unless we do something about it these people are going to deprive us of a future.",
      author: "test",
    },
    {
      quote:
        "The people in charge,globally, are maniacs. They are maniacs, and unless we do something about it these people are going to deprive us of a future.",
      author: "test",
    },
    {
      quote:
        "The people in charge,globally, are maniacs. They are maniacs, and unless we do something about it these people are going to deprive us of a future.",
      author: "test",
    },
    {
      quote:
        "The people in charge,globally, are maniacs. They are maniacs, and unless we do something about it these people are going to deprive us of a future.",
      author: "test",
    },
    {
      quote:
        "The people in charge,globally, are maniacs. They are maniacs, and unless we do something about it these people are going to deprive us of a future.",
      author: "test",
    },
  ]; // dummy data

  const [qouteData, setQuoteData] = useState("");
  useEffect(() => {
    const index = Math.floor(Math.random() * quoteOfTheDay.length);
    setQuoteData(quoteOfTheDay[index]);
  }, []);
  // console.log(quoteChooser());
  return (
    <div className="flex justify-center bg-indigo-950 py-12">
      <div className="flex flex-col items-center w-1/2">
        <p className="w-full text-violet-400 my-2">{qouteData.quote}</p>
        <div className="w-full text-slate-400">{qouteData.author}</div>
      </div>
    </div>
  );
}
export default Quote;
