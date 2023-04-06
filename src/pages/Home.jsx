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
    <div className="home">
      <h1>Welcome to the Coding Challenges</h1>
      <div className="challenge-buttons">
        <button onClick={() => handleChallengeClick(SumChallenge)}>
          Sum of Two Numbers
        </button>
        <button onClick={() => handleChallengeClick(PalindromeChallenge)}>
          Palindrome Checker
        </button>
        <button onClick={() => handleChallengeClick(AcronymChallenge)}>
          Acronym Generator
        </button>
      </div>
      <div className="current-challenge">{renderCurrentChallenge()}</div>
    </div>
  );
}

export default Home;
