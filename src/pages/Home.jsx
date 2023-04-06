import React, { useState } from "react";
import PalindromeChallenge from "../component/PalindromeChallenge";
import SumChallenge from "../component/SumChallenge";
import AcronymChallenge from "../component/AcronymChallenge";

function Home() {
  const [currentChallenge, setCurrentChallenge] = useState(null);

  const handleChallengeClick = (challengeComponent) => {
    setCurrentChallenge(() => challengeComponent);
  };

  const renderCurrentChallenge = () => {
    if (!currentChallenge) {
      return <div>Please select a challenge.</div>;
    }

    const ChallengeComponent = currentChallenge;
    return <ChallengeComponent />;
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-10">Welcome to the Coding Challenges</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border rounded p-6 bg-white">
          <h2 className="font-bold mb-4">Sum of Two Numbers</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleChallengeClick(SumChallenge)}>Start Challenge</button>
        </div>
        <div className="border rounded p-6 bg-white">
          <h2 className="font-bold mb-4">Palindrome Checker</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleChallengeClick(PalindromeChallenge)}>Start Challenge</button>
        </div>
        <div className="border rounded p-6 bg-white">
          <h2 className="font-bold mb-4">Acronym Generator</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleChallengeClick(AcronymChallenge)}>Start Challenge</button>
        </div>
      </div>
      <div className="mt-10">{renderCurrentChallenge()}</div>
    </div>
  );
}

export default Home;
