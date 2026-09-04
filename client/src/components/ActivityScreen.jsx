import "../styles/activity.css";

function ActivityScreen({ analytics, username }) {
  const hour = analytics.mostActiveHour;

  const isNightOwl =
    hour !== null &&
    (hour >= 21 || hour < 5);

  return (
    <main className="activity-screen crt-screen">

      <div className="terminal-window">

        <div className="terminal-header">
          <span>GITWRAPPED // ACTIVITY MONITOR</span>

          <div className="window-controls">
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        <div className="activity-content">

          <p className="system-text">
            &gt; ACTIVITY ANALYSIS: @{username}
          </p>

          <h2>WHEN DO YOU CODE?</h2>

          <div className="peak-time">

            <span className="peak-label">
              YOUR PEAK COMMIT HOUR
            </span>

            <strong>
              {analytics.mostActiveHourFormatted || "UNKNOWN"}
            </strong>

          </div>

          <div className="activity-stats">

            <div className="activity-stat">

              <span className="activity-icon">
                ◈
              </span>

              <strong>
                {analytics.totalCommits}
              </strong>

              <span>
                COMMITS DETECTED
              </span>

            </div>

            <div className="activity-stat">

              <span className="activity-icon">
                ◷
              </span>

              <strong>
                {analytics.mostActiveDayFormatted || "UNKNOWN"}
              </strong>

              <span>
                MOST ACTIVE DAY
              </span>

            </div>

          </div>

          <div className="activity-verdict">

            <span>
              &gt; PATTERN DETECTED
            </span>

            <strong>
              {isNightOwl
                ? "NIGHT OWL"
                : "DAYLIGHT CODER"}
            </strong>

          </div>

          <p className="activity-footer">
            &gt; ACTIVITY SIGNATURE RECORDED_
          </p>

        </div>

      </div>

    </main>
  );
}

export default ActivityScreen;