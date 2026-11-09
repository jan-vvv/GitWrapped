import { useEffect } from "react";
import "../styles/activity.css";

function ActivityScreen({ analytics, username, onNext }) {
  const totalContributions = analytics?.totalContributions || 0;
  const activeDays = analytics?.activeDays || 0;
  const consistencyScore = Math.round(analytics?.consistencyScore || 0);
  const longestStreak = analytics?.longestStreak || 0;
  const currentStreak = analytics?.currentStreak || 0;
  const mostActiveDay = analytics?.mostActiveDay || "UNKNOWN";

  let roastMessage;

  if (consistencyScore < 10) {
    roastMessage = "You definitely showed up... occasionally.";
  } else if (consistencyScore < 25) {
    roastMessage = "You had a rhythm. It just had commitment issues.";
  } else if (consistencyScore < 50) {
    roastMessage = "Okay. You're actually getting into a rhythm.";
  } else {
    roastMessage = "You were suspiciously consistent.";
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (
        event.key === "ArrowRight" &&
        !event.repeat
      ) {
        onNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onNext]);

  return (
    <main
      className="activity-screen"
      onClick={onNext}
    >
      <div className="activity-story">

        {/* Texture */}
        <div className="activity-grain" />

        {/* Header */}
        <header className="activity-header">
          <div className="activity-brand">
            <span className="brand-dot" />
            GITWRAPPED
          </div>

          <span className="activity-username">
            @{username}
          </span>
        </header>

        {/* Decorative clock collage */}
        <div className="clock-collage" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              className={`clock clock-${index + 1}`} // <-- Fixed template literal
              key={index}
            >
              <span className="clock-tick tick-1" />
              <span className="clock-tick tick-2" />
              <span className="clock-tick tick-3" />
              <span className="clock-tick tick-4" />
              <span className="clock-hand clock-hour" />
              <span className="clock-hand clock-minute" />
              <span className="clock-center" />
            </div>
          ))}
        </div>

        {/* Main content */}
        <section className="activity-content">

          <div className="activity-copy">
            <p className="activity-eyebrow">
              YOUR 2026 CODING RECAP
            </p>

            <h1 className="activity-title">
              YOU HAD
              <br />
              <span>A RHYTHM.</span>
            </h1>

            <div className="activity-highlight">
              <span className="highlight-label">
                YOUR MOST ACTIVE DAY
              </span>

              <h2>{mostActiveDay}</h2>

              <span className="highlight-caption">
                WAS YOUR DAY TO SHOW UP.
              </span>
            </div>

            <p className="activity-description">
              While the world was doing its thing,
              you were busy turning caffeine into commits.
            </p>
          </div>

          {/* Graphic section */}
          <div className="activity-art">
            <div className="art-label">
              THE DEVELOPER CLOCK
            </div>

            <div className="activity-big-clock">
              <div className="big-clock-inner">
                <span>YOUR</span>
                <strong>CODE</strong>
                <span>NEVER SLEEPS</span>
              </div>
            </div>

            <div className="art-sticker sticker-top">
              COMMIT.
              <br />
              REPEAT.
            </div>

            <div className="art-sticker sticker-bottom">
              EST.
              <br />
              2026
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="activity-stats">

          <div className="activity-stat">
            <span className="stat-number">
              {longestStreak}
            </span>
            <span className="stat-label">
              LONGEST STREAK
            </span>
          </div>

          <div className="stat-divider" />

          <div className="activity-stat">
            <span className="stat-number">
              {activeDays}
            </span>
            <span className="stat-label">
              ACTIVE DAYS
            </span>
          </div>

          <div className="stat-divider" />

          <div className="activity-stat">
            <span className="stat-number">
              {consistencyScore}%
            </span>
            <span className="stat-label">
              CONSISTENCY
            </span>
          </div>

          <div className="stat-divider" />

          <div className="activity-stat">
            <span className="stat-number">
              {totalContributions.toLocaleString("en-US")}
            </span>
            <span className="stat-label">
              TOTAL CONTRIBUTIONS
            </span>
          </div>

        </section>

        {/* Bottom section */}
        <footer className="activity-footer">
          <div className="activity-roast">
            <span className="roast-icon">✳️</span>
            {roastMessage}
          </div>

          <div className="activity-current-streak">
            CURRENT STREAK: {currentStreak}
          </div>

          <button
            className="activity-next"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
          >
            NEXT STORY
            <span>→</span>
          </button>
        </footer>

      </div>
    </main>
  );
}

export default ActivityScreen;