import "../styles/wrappedStats.css";

function WrappedStatsScreen({ analytics, username, onNext }) {
  return (
    <main className="wrapped-stats-screen crt-screen">
      <div className="terminal-window">

        <div className="terminal-header">
          <span>GITWRAPPED // CARD 02</span>

          <div className="window-controls">
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        <div className="wrapped-stats-content">

          <p className="system-text">
            &gt; ANALYSIS COMPLETE: @{username}
          </p>

          <p className="card-number">
            CARD 02 // THE RECEIPTS
          </p>

          <h2>
            YOUR YEAR
            <br />
            IN CODE
          </h2>

          <div className="contribution-reveal">

            <span className="contribution-number">
              {analytics.totalContributions.toLocaleString()}
            </span>

            <span className="contribution-label">
              CONTRIBUTIONS
            </span>

          </div>

          <p className="reveal-message">
            You left your mark
            <br />
            across{" "}
            <strong>{analytics.repositoryCount}</strong>{" "}
            repositories.
          </p>

          <div className="mini-stats">

            <div className="mini-stat">
              <span className="mini-icon">★</span>

              <strong>
                {analytics.totalStars.toLocaleString()}
              </strong>

              <span>STARS</span>
            </div>

            <div className="mini-stat">
              <span className="mini-icon">▲</span>

              <strong>
                {analytics.totalForks.toLocaleString()}
              </strong>

              <span>FORKS</span>
            </div>

            <div className="mini-stat">
              <span className="mini-icon">▣</span>

              <strong>
                {analytics.repositoryCount}
              </strong>

              <span>REPOS</span>
            </div>

          </div>

          <p className="wrapped-footer">
            &gt; RECEIPTS LOADED_
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

export default WrappedStatsScreen;