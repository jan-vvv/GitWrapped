import { useEffect, useState } from "react";

import "../styles/rewardProtocol.css";

function RewardProtocolScreen({
  analytics,
  onComplete,
}) {
  const [step, setStep] = useState(0);

  const achievements =
    analytics.achievements || [];

  const messages = [
    "> SENTENCE ACCEPTED_",
    "> RECORDING DEVELOPER OFFENSES... OK",
    "> CATALOGUING ACTIVITY... OK",
    "> SEARCHING FOR ACHIEVEMENTS...",
    "> ACHIEVEMENT PROTOCOL UNLOCKED.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((currentStep) => {
        if (currentStep < messages.length - 1) {
          return currentStep + 1;
        }

        clearInterval(timer);

        setTimeout(() => {
          onComplete();
        }, 1000);

        return currentStep;
      });
    }, 700);

    return () => clearInterval(timer);
  }, [onComplete, messages.length]);

  return (
    <main className="reward-protocol-screen crt-screen">
      <div className="reward-protocol-content">

        <p className="reward-label">
          GITWRAPPED_OS // REWARD PROTOCOL
        </p>

        <div className="reward-log">

          {messages
            .slice(0, step + 1)
            .map((message) => (
              <p key={message}>
                {message}
              </p>
            ))}

        </div>

        {step === messages.length - 1 && (
          <div className="achievement-detected">

            <span>
              ACHIEVEMENTS DETECTED
            </span>

            <strong>
              {achievements.length}
            </strong>

            <span>
              READY TO UNLOCK
            </span>

          </div>
        )}

      </div>
    </main>
  );
}

export default RewardProtocolScreen;