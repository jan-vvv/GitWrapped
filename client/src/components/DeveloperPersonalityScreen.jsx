import "../styles/developerPersonality.css";

function DeveloperPersonalityScreen({
  analytics,
  username,
  onNext,
}) {
  const personality =
    analytics.developerPersonality;

  return (
    <main className="developer-personality-screen crt-screen">
      <div className="terminal-window">

        <div className="terminal-header">
          <span>GITWRAPPED // CARD 06</span>

          <div className="window-controls">
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        <div className="developer-personality-content">

          <p className="system-text">
            &gt; PROFILE ANALYSIS COMPLETE: @{username}
          </p>

          <p className="card-number">
            CARD 06 // DEVELOPER CLASS
          </p>

          <p className="personality-eyebrow">
            YOUR DEVELOPER TYPE
          </p>

          <h2 className="developer-personality-title">
            {personality?.title ||
              "THE CODE EXPLORER"}
          </h2>

          <p className="developer-personality-vibe">
            {personality?.vibe ||
              "EXPLORATION MODE"}
          </p>

          <p className="developer-personality-description">
            {personality?.description ||
              "Your developer identity remains classified."}
          </p>

          {personality?.tags && (
            <div className="developer-personality-tags">
              {personality.tags.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="developer-stat-line">
            <span>LANGUAGES</span>
            <strong>
              {analytics.languageCount ?? 0}
            </strong>
          </div>

          <div className="developer-stat-line">
            <span>LONGEST STREAK</span>
            <strong>
              {analytics.longestStreak ?? 0} DAYS
            </strong>
          </div>

          <p className="developer-personality-footer">
            &gt; DEVELOPER CLASSIFIED_
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

export default DeveloperPersonalityScreen;