import "../styles/finalDiagnosis.css";

function FinalDiagnosisScreen({
  analytics,
  username,
  onNext,
}) {
  const personality =
    analytics.developerPersonality;

  const finalRoast =
    analytics.finalRoast;

  return (
    <main className="final-diagnosis-screen crt-screen">
      <div className="terminal-window">

        <div className="terminal-header">
          <span>
            GITWRAPPED // CARD 09
          </span>

          <div className="window-controls">
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        <div className="final-diagnosis-content">

          <p className="system-text">
            &gt; ALL EVIDENCE COMPILED_
          </p>

          <p className="card-number">
            CARD 09 // FINAL DIAGNOSIS
          </p>

          <p className="diagnosis-eyebrow">
            {finalRoast?.headline ||
              "THE SYSTEM HAS DECIDED."}
          </p>

          <h2 className="diagnosis-title">
            {personality?.title ||
              "THE CODE EXPLORER"}
          </h2>

          <p className="diagnosis-vibe">
            {personality?.vibe ||
              "EXPLORATION MODE"}
          </p>

          <div className="diagnosis-evidence">

            <div>
              <strong>
                {analytics.languageCount ?? 0}
              </strong>

              <span>
                LANGUAGES
              </span>
            </div>

            <div>
              <strong>
                {analytics.repositoryCount ?? 0}
              </strong>

              <span>
                REPOSITORIES
              </span>
            </div>

            <div>
              <strong>
                {analytics.totalContributions ?? 0}
              </strong>

              <span>
                CONTRIBUTIONS
              </span>
            </div>

          </div>

          <div className="diagnosis-message">
            <p>
              {personality?.description ||
                "Your developer identity remains classified."}
            </p>
          </div>

          {finalRoast?.roast && (
            <div className="final-roast">

              <span>
                &gt; OFFICIAL ROAST
              </span>

              <p>
                {finalRoast.roast}
              </p>

            </div>
          )}

          {finalRoast?.closing && (
            <p className="diagnosis-closing">
              {finalRoast.closing}
            </p>
          )}

          <p className="diagnosis-footer">
            &gt; DIAGNOSIS SAVED_
          </p>

          <button
            className="wrapped-next-button"
            onClick={onNext}
          >
            [ SAVE MY WRAPPED → ]
          </button>

        </div>

      </div>
    </main>
  );
}

export default FinalDiagnosisScreen;