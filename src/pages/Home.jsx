import React, { useState } from "react";
import Challenge from "../component/Challenge";
import { challenges } from "../data/challenges";

function Home() {
  const [currentChallenge, setCurrentChallenge] = useState(null);

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
            {challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="border rounded p-6 bg-white"
              >
                <h2 className="font-bold mb-4">{challenge.title}</h2>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleChallengeClick(challenge)}
                >
                  Start Challenge
                </button>
              </div>
            ))}
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
    <div className="h-screen flex flex-col p-20 justify-center">
      <div className="mt-10">{renderCurrentChallenge()}</div>
    </div>
  );
}

export default Home;
