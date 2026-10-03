import { useEffect, useState } from "react";
import "../styles/wrappedStats.css";

function WrappedStatsScreen({ analytics, username, onNext }) {
  const target = analytics?.totalContributions || 0;

  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const duration = 1400;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      setCount(Math.floor(current));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [target]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (
        event.key === "Enter" ||
        event.key === " " ||
        event.key === "ArrowRight"
      ) {
        event.preventDefault();
        onNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onNext]);

  function getContributionLine(value) {
    if (value === 0) {
      return "We found... absolutely nothing.";
    }

    if (value < 10) {
      return "You showed up. Occasionally.";
    }

    if (value < 50) {
      return "You were definitely in the building.";
    }

    if (value < 100) {
      return "Okay. Now we're seeing some activity.";
    }

    if (value < 250) {
      return "You and GitHub were getting suspiciously close.";
    }

    return "You were basically living on GitHub.";
  }

  return (
    <main
      className="contributions-screen"
      onClick={onNext}
    >
      {/* texture */}
      <div className="contributions-grain" />

      {/* background graphics */}
      <div className="contribution-orbit contribution-orbit-one" />
      <div className="contribution-orbit contribution-orbit-two" />

      <div className="contribution-circle" />

      <div className="contribution-grid" />

      <div className="contribution-pink-block" />

      {/* metadata */}
      <div className="contribution-meta top">
        GITWRAPPED // ACTIVITY REPORT
      </div>

      <div className="contribution-meta side">
        @ {username}
      </div>

      {/* main content */}
      <section className="contribution-content">

        <p className="contribution-label">
          YOU MADE
        </p>

        <div className="contribution-number-wrap">
          <span className="contribution-number">
            {count}
          </span>

          <span className="contribution-number-shadow">
            {count}
          </span>
        </div>

        <h1 className="contribution-title">
          CONTRIBUTIONS
        </h1>

        <div className="contribution-rule" />

        <p className="contribution-roast">
          {getContributionLine(target)}
        </p>

      </section>

      {/* tiny retro details */}
      <div className="contribution-system">
        <span>DATA FOUND</span>
        <span>YEAR // COMPLETE</span>
      </div>

      <div className="contribution-next">
        <span className="contribution-enter-key">
          ENTER
        </span>

        <span>TO CONTINUE</span>
      </div>
    </main>
  );
}

export default WrappedStatsScreen;