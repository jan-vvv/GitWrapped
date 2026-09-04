import "../styles/wrappedStats.css";

function WrappedStatsScreen({ analytics, username,onNext }) {
  const popularRepo = analytics.mostPopularRepository;

  return (
    <main className="wrapped-stats-screen crt-screen">

      <div className="terminal-window">

        <div className="terminal-header">
          <span>GITWRAPPED // DATA LOG</span>

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

          <h2>YOUR YEAR IN CODE</h2>

          <div className="hero-stat">
            <span className="hero-number">
              {analytics.repositoryCount}
            </span>

            <span className="hero-label">
              REPOSITORIES
            </span>
          </div>

          <div className="stats-grid">

            <div className="stat-card">
              <span className="stat-icon">★</span>

              <strong>
                {analytics.totalStars.toLocaleString()}
              </strong>

              <span>STARS</span>
            </div>

            <div className="stat-card">
              <span className="stat-icon">▲</span>

              <strong>
                {analytics.totalForks.toLocaleString()}
              </strong>

              <span>FORKS</span>
            </div>

            <div className="stat-card">
              <span className="stat-icon">◆</span>

              <strong>
                {analytics.topLanguage || "UNKNOWN"}
              </strong>

              <span>TOP LANGUAGE</span>
            </div>

          </div>

          {popularRepo && (
            <div className="popular-repo">

              <p className="repo-label">
                &gt; MOST POPULAR REPOSITORY
              </p>

              <h3>
                {popularRepo.name}
              </h3>

              <p>
                ★ {popularRepo.stars.toLocaleString()}
                {"   "}
                ▲ {popularRepo.forks.toLocaleString()}
              </p>

            </div>
          )}

          <p className="wrapped-footer">
            &gt; DATA STREAM COMPLETE_
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