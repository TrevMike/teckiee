import { useEffect, useState } from "react";

function Quote() {
  const quoteOfTheDay = [
    {
      quote:
        "The people in charge,globally, are maniacs. They are maniacs, and unless we do something about it these people are going to deprive us of a future.",
      author: "THOM YORKE, MUSICIAN @ RADIOHEAD",
    },
    {
      quote:
        "The people in charge,globally, are maniacs. They are maniacs, and unless we do something about it these people are going to deprive us of a future.",
      author: "THOM YORKE, MUSICIAN @ RADIOHEAD",
    },
    {
      quote:
        "The people in charge,globally, are maniacs. They are maniacs, and unless we do something about it these people are going to deprive us of a future.",
      author: "THOM YORKE, MUSICIAN @ RADIOHEAD",
    },
    {
      quote:
        "The people in charge,globally, are maniacs. They are maniacs, and unless we do something about it these people are going to deprive us of a future.",
      author: "THOM YORKE, MUSICIAN @ RADIOHEAD",
    },
    {
      quote:
        "The people in charge,globally, are maniacs. They are maniacs, and unless we do something about it these people are going to deprive us of a future.",
      author: "THOM YORKE, MUSICIAN @ RADIOHEAD",
    },
    {
      quote:
        "The people in charge,globally, are maniacs. They are maniacs, and unless we do something about it these people are going to deprive us of a future.",
      author: "THOM YORKE, MUSICIAN @ RADIOHEAD",
    },
    {
      quote:
        "The people in charge,globally, are maniacs. They are maniacs, and unless we do something about it these people are going to deprive us of a future.",
      author: "THOM YORKE, MUSICIAN @ RADIOHEAD",
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
        <p className="w-full text-violet-400 mb-6 font-montserrat font-light text-4xl">
          {qouteData.quote}
        </p>
        <div className="w-full text-slate-400 font-fira font-light text-sm">
          {qouteData.author}
        </div>
      </div>
    </div>
  );
}
export default Quote;
