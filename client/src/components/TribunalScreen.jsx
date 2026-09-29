import "../styles/tribunal.css";

function TribunalScreen({
  analytics,
  username,
  onNext,
}) {
  const personality =
    analytics.developerPersonality;

  const charges =
    personality?.charges || [];

  return (
    <main className="tribunal-screen crt-screen">
      <div className="terminal-window">

        <div className="terminal-header">
          <span>
            GITWRAPPED // TRIBUNAL PROTOCOL
          </span>

          <div className="window-controls">
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        <div className="tribunal-content">

          <p className="system-text">
            &gt; ACTIVITY PROFILE REVIEWED_
          </p>

          <p className="card-number">
            CARD 06 // TRIBUNAL PROTOCOL
          </p>

          <p className="tribunal-label">
            THE GITWRAPPED TRIBUNAL
          </p>

          <h2 className="tribunal-case">
            THE PEOPLE
            <br />
            VS.
            <br />
            @{username}
          </h2>

          <p className="tribunal-status">
            &gt; SUFFICIENT EVIDENCE FOUND_
          </p>

          <div className="charges-list">

            {charges.map((charge, index) => (
              <div
                className="charge-card"
                key={charge.title}
              >
                <div className="charge-number">
                  CHARGE #{String(index + 1).padStart(2, "0")}
                </div>

                <h3>
                  {charge.title}
                </h3>

                <p>
                  {charge.description}
                </p>
              </div>
            ))}

          </div>

          <div className="verdict-box">

            <span className="verdict-label">
              VERDICT
            </span>

            <strong>
              {personality?.verdict ||
                "GUILTY"}
            </strong>

            <span className="guilty-of">
              GUILTY OF BEING
            </span>

            <h3>
              {personality?.title ||
                "THE CODE EXPLORER"}
            </h3>

          </div>

          <div className="sentence-box">

            <span>
              SENTENCE
            </span>

            <p>
              {personality?.sentence ||
                "Keep coding. The system is watching."}
            </p>

          </div>

          <p className="tribunal-footer">
            &gt; CASE CLOSED_
          </p>

          <button
            className="wrapped-next-button"
            onClick={onNext}
          >
            [ ACCEPT SENTENCE → ]
          </button>

        </div>
      </div>
    </main>
  );
}

export default TribunalScreen;