import { useEffect, useState } from "react";
import "../styles/rewardProtocol.css";

function RewardProtocolScreen({ analytics, onComplete }) {
  const messages = [
    "> SENTENCE ACCEPTED_",
    "> RECORDING DEVELOPER OFFENSES... OK",
    "> CATALOGUING ACTIVITY... OK",
    "> SEARCHING FOR ACHIEVEMENTS...",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showUnlock, setShowUnlock] = useState(false);

  useEffect(() => {
    // Show the final unlock separately so it feels like
    // a reveal instead of just another log message.
    if (showUnlock) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1300);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      if (currentIndex < messages.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setShowUnlock(true);
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [
    currentIndex,
    showUnlock,
    onComplete,
    messages.length,
  ]);

  return (
    <main className="reward-protocol-screen">
      <div className="reward-scanlines" />

      {!showUnlock ? (
        <section className="reward-terminal">

          <div className="reward-top">
            <span>
              GITWRAPPED // REWARD PROTOCOL
            </span>

            <span>
              CARD 07
            </span>
          </div>

          <div className="reward-log">

            {messages
              .slice(0, currentIndex + 1)
              .map((message, index) => (
                <p
                  key={message}
                  className={
                    index === currentIndex
                      ? "reward-line active"
                      : "reward-line"
                  }
                >
                  {message}
                </p>
              ))}

          </div>

          <div className="reward-cursor">
            _
          </div>

        </section>
      ) : (
        <section className="reward-unlock">

          <div className="reward-unlock-small">
            GITWRAPPED // SYSTEM NOTICE
          </div>

          <div className="reward-unlock-main">
            ACHIEVEMENT
            <br />
            PROTOCOL
          </div>

          <div className="reward-unlock-final">
            UNLOCKED.
          </div>

        </section>
      )}

      <div className="reward-footer">
        <span>
          {showUnlock
            ? "ACCESSING ACHIEVEMENT ARCHIVE..."
            : "PLEASE WAIT..."}
        </span>
      </div>
    </main>
  );
}

export default RewardProtocolScreen;