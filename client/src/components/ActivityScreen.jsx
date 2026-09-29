import "../styles/activity.css";

function ActivityScreen({
  analytics,
  username,
  onNext,
}) {
  const totalContributions =
    analytics.totalContributions ?? 0;

  const activeDays =
    analytics.activeDays ?? 0;

  const consistencyScore =
    analytics.consistencyScore ?? 0;

  const longestStreak =
    analytics.longestStreak ?? 0;

  const currentStreak =
    analytics.currentStreak ?? 0;

  const mostActiveDay =
    analytics.mostActiveDay || "UNKNOWN";

  function getActivityMessage(score) {
    if (score >= 70) {
      return "OKAYYYY. WE GET IT. YOU ACTUALLY SHOW UP.";
    }

    if (score >= 40) {
      return "You've got a pretty solid coding habit.";
    }

    if (score >= 20) {
      return "You're getting into a rhythm. We see you.";
    }

    return "You definitely showed up... occasionally. 👀";
  }

  function getDayMessage(day) {
    const messages = {
      Monday:
        "Starting the week strong, huh?",

      Tuesday:
        "You've entered the grind.",

      Wednesday:
        "Midweek menace.",

      Thursday:
        "Almost the weekend. Still coding.",

      Friday:
        "Apparently you save the good stuff for Friday.",

      Saturday:
        "Weekend? Never heard of her.",

      Sunday:
        "Sunday scaries, but make it code.",
    };

    return (
      messages[day] ||
      "Your coding schedule remains classified."
    );
  }

  function getActivityStatus() {
    if (
      consistencyScore >= 60 &&
      longestStreak >= 30
    ) {
      return "LOCKED IN";
    }

    if (
      longestStreak >= 14
    ) {
      return "STREAKING";
    }

    if (
      activeDays >= 20 &&
      analytics.languageCount >= 4
    ) {
      return "SIDE QUESTING";
    }

    if (consistencyScore >= 20) {
      return "GETTING SERIOUS";
    }

    return "CASUAL BUILDER";
  }

  return (
    <main className="activity-screen crt-screen">
      <div className="terminal-window">

        <div className="terminal-header">
          <span>
            GITWRAPPED // CARD 05
          </span>

          <div className="window-controls">
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        <div className="activity-content">

          <p className="system-text">
            &gt; ACTIVITY LOG DECODED: @{username}
          </p>

          <p className="card-number">
            CARD 05 // YOUR CODING ERA
          </p>

          <h2>
            YOUR
            <br />
            CODING ERA
          </h2>

          {/* Main contribution reveal */}
          <div className="activity-hero">

            <span className="activity-number">
              {totalContributions.toLocaleString()}
            </span>

            <span className="activity-label">
              CONTRIBUTIONS
            </span>

            <p className="activity-message">
              {getActivityMessage(
                consistencyScore
              )}
            </p>

          </div>

          {/* Active days */}
          <div className="activity-stat-block">

            <span className="activity-stat-number">
              {activeDays}
            </span>

            <span className="activity-stat-label">
              ACTIVE DAYS
            </span>

          </div>

          {/* Most active day */}
          <div className="activity-day-block">

            <span className="activity-small-label">
              YOUR FAVORITE DAY
            </span>

            <strong>
              {mostActiveDay}
            </strong>

            <p>
              {getDayMessage(
                mostActiveDay
              )}
            </p>

          </div>

          {/* Streaks */}
          <div className="streak-grid">

            <div className="streak-card">
              <span>
                LONGEST COMBO
              </span>

              <strong>
                {longestStreak} DAYS 🔥
              </strong>

              <p>
                {
                  longestStreak === 0
                    ? "The combo never started."
                    : longestStreak < 7
                    ? "The combo has begun."
                    : longestStreak < 30
                    ? "Okay, that's getting serious."
                    : "AT THIS POINT YOU LIVE HERE."
                }
              </p>
            </div>

            <div className="streak-card">
              <span>
                CURRENT COMBO
              </span>

              <strong>
                {currentStreak} DAYS
                {currentStreak === 0
                  ? " 💀"
                  : " ⚡"}
              </strong>

              <p>
                {currentStreak === 0
                  ? "and then you vanished."
                  : "KEEP THE COMBO ALIVE."}
              </p>
            </div>

          </div>

          {/* Consistency */}
          <div className="consistency-block">

            <div className="consistency-header">

              <span>
                CONSISTENCY
              </span>

              <strong>
                {consistencyScore}%
              </strong>

            </div>

            <div className="consistency-bar">
              <div
                className="consistency-fill"
                style={{
                  width: `${consistencyScore}%`,
                }}
              />
            </div>

          </div>

          {/* Activity status */}
          <div className="activity-status">

            <span>
              ACTIVITY STATUS
            </span>

            <strong>
              [ {getActivityStatus()} ]
            </strong>

          </div>

          <p className="activity-footer">
            &gt; ACTIVITY PROFILE RECORDED_
          </p>

          <button
            className="wrapped-next-button"
            onClick={onNext}
          >
            [ CONTINUE → ]
          </button>

        </div>
      </div>
    </main>
  );
}

export default ActivityScreen;