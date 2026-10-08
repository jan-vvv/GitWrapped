import { useEffect } from "react";
import "../styles/activity.css";

function ActivityScreen({ analytics, username, onNext }) {
  const totalContributions = analytics?.totalContributions || 0;
  const activeDays = analytics?.activeDays || 0;
  const consistencyScore = Math.round(
    analytics?.consistencyScore || 0
  );
  const longestStreak = analytics?.longestStreak || 0;
  const currentStreak = analytics?.currentStreak || 0;
  const mostActiveDay = analytics?.mostActiveDay || "UNKNOWN";

  const weekdayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const activeDayIndex = weekdayNames.findIndex(
    (day) =>
      day.toLowerCase() === mostActiveDay.toLowerCase()
  );

  let roastMessage;

  if (consistencyScore < 10) {
    roastMessage =
      "You definitely showed up... occasionally.";
  } else if (consistencyScore < 25) {
    roastMessage =
      "You had a rhythm. It just had commitment issues.";
  } else if (consistencyScore < 50) {
    roastMessage =
      "Okay. You're actually getting into a rhythm.";
  } else {
    roastMessage =
      "You were suspiciously consistent.";
  }

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

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onNext]);

  return (
    <main
      className="activity-screen"
      onClick={onNext}
    >
      <div className="activity-noise" />

      <div className="activity-meta">
        GITWRAPPED // BEHAVIORAL ANALYSIS
      </div>

      <div className="activity-user">
        @{username}
      </div>

      {/* Decorative graphic elements */}
      <div className="activity-shape activity-shape-one" />
      <div className="activity-shape activity-shape-two" />
      <div className="activity-squiggle activity-squiggle-one" />
      <div className="activity-squiggle activity-squiggle-two" />

      <section className="activity-content">
        <p className="activity-kicker">
          YOUR CODING RHYTHM
        </p>

        <h1 className="activity-title">
          YOU HAD
          <br />
          A PATTERN.
        </h1>

        <div className="activity-visual">
          <div className="activity-week">
            {weekdayNames.map((day, index) => (
              <span
                key={day}
                className={
                  index === activeDayIndex
                    ? "activity-week-day active"
                    : "activity-week-day"
                }
              >
                {day.slice(0, 3).toUpperCase()}
              </span>
            ))}
          </div>

          <div className="activity-orbit orbit-one" />
          <div className="activity-orbit orbit-two" />

          <div className="activity-core">
            <span className="activity-core-small">
              MOST ACTIVE
            </span>

            <span className="activity-core-day">
              {mostActiveDay}
            </span>

            <span className="activity-core-line">
              CODING DAY
            </span>
          </div>
        </div>

        <div className="activity-stat-row">
          <div className="activity-stat">
            <span className="activity-stat-number">
              {longestStreak}
            </span>

            <span className="activity-stat-label">
              DAY STREAK
            </span>
          </div>

          <div className="activity-stat-divider" />

          <div className="activity-stat">
            <span className="activity-stat-number">
              {activeDays}
            </span>

            <span className="activity-stat-label">
              ACTIVE DAYS
            </span>
          </div>

          <div className="activity-stat-divider" />

          <div className="activity-stat">
            <span className="activity-stat-number">
              {consistencyScore}%
            </span>

            <span className="activity-stat-label">
              CONSISTENCY
            </span>
          </div>
        </div>

        <div className="activity-roast">
          <span className="activity-roast-mark">
            //
          </span>

          <p>{roastMessage}</p>
        </div>

        {currentStreak === 0 && (
          <div className="activity-current-roast">
            CURRENT STREAK: 0
            <span> — and then you vanished.</span>
          </div>
        )}
      </section>

      <div className="activity-footer">
        <span>
          TOTAL ACTIVITY // {totalContributions}
        </span>

        <span>
          RHYTHM PROFILE // DETECTED
        </span>
      </div>

      <div className="activity-next">
        <span className="activity-enter">
          ENTER
        </span>

        <span>TO CONTINUE</span>
      </div>
    </main>
  );
}

export default ActivityScreen;