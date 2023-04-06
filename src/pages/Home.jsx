import React, { useState } from "react";
import Challenge from "../component/Challenge";

function Home() {
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const palindrome = {
    title: "Palindrome Checker",
    description:
      "Write a function that takes a string and returns true if the string is a palindrome and false otherwise.",
    tests: [
      { input: "racecar", output: true },
      { input: "hello", output: false },
      { input: "A man a plan a canal Panama", output: true },
    ],
    startingCode :  "function palindrome(str) {\n    // write code here\n}"

  };

  const sum = {
    title: "Sum of Two Numbers",
    description:
      "Write a function that takes two numbers as arguments and returns their sum.",
    tests: [
      { input: [1, 2], output: 3 },
      { input: [10, -5], output: 5 },
      { input: [0, 0], output: 0 },
    ],
    startingCode : "function sum(a, b) {\n    // write code here\n}"

  };

  const acronym = {
    title: "Sum of Two Numbers",
    description:
      "Write a function that takes two numbers as arguments and returns their sum.",
    tests: [
      { input: [1, 2], output: 3 },
      { input: [10, -5], output: 5 },
      { input: [0, 0], output: 0 },
    ],
    startingCode : "function generateAcronym(phrase) {\n    // write code here\n}"
  };


  const handleChallengeClick = (challengeComponent) => {
    setCurrentChallenge(() => challengeComponent);
  };

  const handleReturnToChallengeList = () => {
    setCurrentChallenge(null);
  };

  const renderCurrentChallenge = () => {
    if (!currentChallenge) {
      return (
        <div>
          <h1 className="text-4xl font-bold mb-10">
            JavaScript Coding Challenges
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded p-6 bg-white">
              <h2 className="font-bold mb-4">Sum of Two Numbers</h2>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleChallengeClick(sum)}
              >
                Start Challenge
              </button>
            </div>
            <div className="border rounded p-6 bg-white">
              <h2 className="font-bold mb-4">Palindrome Checker</h2>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleChallengeClick(palindrome)}
              >
                Start Challenge
              </button>
            </div>
            <div className="border rounded p-6 bg-white">
              <h2 className="font-bold mb-4">Acronym Generator</h2>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleChallengeClick(acronym)}
              >
                Start Challenge
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={handleReturnToChallengeList}
        >
          Return to Challenge List
        </button>
        <Challenge challenge={currentChallenge} />
      </>
    );
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="mt-10">{renderCurrentChallenge()}</div>
    </div>
  );
}

export default Home;
