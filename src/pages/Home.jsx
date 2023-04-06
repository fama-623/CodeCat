import React, { useState, useEffect } from "react";
import Challenge from "../component/Challenge";
import challenges from "../data/challenges";

function Home() {
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [completedChallenges, setCompletedChallenges] = useState({});

  useEffect(() => {
    const storedChallenges =
      JSON.parse(localStorage.getItem("completedChallenges")) || {};
    setCompletedChallenges(storedChallenges);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "completedChallenges",
      JSON.stringify(completedChallenges)
    );
  }, [completedChallenges]);

  const handleChallengeClick = (challengeComponent) => {
    setCurrentChallenge(() => challengeComponent);
  };

  const handleReturnToChallengeList = () => {
    setCurrentChallenge(null);
  };

  const handleChallengeComplete = (title) => {
    setCompletedChallenges((prev) => ({ ...prev, [title]: true }));
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
                className="border rounded p-6 glass box-shadow"
                key={challenge.title}
              >
                <h2 className="font-bold mb-4">{challenge.title}</h2>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleChallengeClick(challenge)}
                >
                  Start Challenge
                </button>
                <p className="mt-4 text-right">
                  <span
                    className={
                      completedChallenges[challenge.title]
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {completedChallenges[challenge.title]
                      ? "Completed"
                      : "Not Complete"}
                  </span>
                </p>
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
        <Challenge
          challenge={currentChallenge}
          onComplete={() => handleChallengeComplete(currentChallenge.title)}
        />
      </>
    );
  };

  return (
    <div className="h-screen flex flex-col p-20 justify-center background">
      <div className="mt-10">{renderCurrentChallenge()}</div>
    </div>
  );
}

export default Home;
