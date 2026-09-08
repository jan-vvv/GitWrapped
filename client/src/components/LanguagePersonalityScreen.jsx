import "../styles/languagePersonality.css";

function LanguagePersonalityScreen({
  analytics,
  username,
  onNext,
}) {
  const personality = analytics.languagePersonality;

  const topLanguage =
    analytics.topLanguage || "UNKNOWN";

  return (
    <main className="language-personality-screen crt-screen">
      <div className="terminal-window">

        <div className="terminal-header">
          <span>GITWRAPPED // CARD 04</span>

          <div className="window-controls">
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        <div className="language-personality-content">

          <p className="system-text">
            &gt; PROFILE: @{username}
          </p>

          <p className="card-number">
            CARD 04 // LANGUAGE PROFILE
          </p>

          <p className="personality-eyebrow">
            YOUR MAIN CHARACTER
          </p>

          <h2 className="personality-language">
            {topLanguage}
          </h2>

          <div className="personality-divider">
            ◆
          </div>

          <h3 className="personality-title">
            {personality?.title || "THE CODE MYSTIC"}
          </h3>

          <p className="personality-vibe">
            {personality?.vibe || "MYSTERIOUS"}
          </p>

          <p className="personality-description">
            {personality?.description ||
              "Your code remains classified."}
          </p>

          {/* Roast */}
          {personality?.roast && (
            <div className="personality-roast">

              <span className="roast-label">
                &gt; OFFICIAL ROAST
              </span>

              <p>
                "{personality.roast}"
              </p>

            </div>
          )}

          {/* Side effects */}
          {personality?.sideEffects && (
            <div className="side-effects">

              <span className="side-effects-label">
                SIDE EFFECTS
              </span>

              <div className="side-effects-list">

                {personality.sideEffects.map(
                  (effect) => (
                    <span key={effect}>
                      {effect}
                    </span>
                  )
                )}

              </div>

            </div>
          )}

          <p className="personality-footer">
            &gt; LANGUAGE PROFILE LOCKED_
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

export default LanguagePersonalityScreen;