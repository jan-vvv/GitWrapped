import "../styles/language.css";



function LanguageScreen({ analytics, username, onNext }) {
  
  return (
    <main className="language-screen crt-screen">

      <div className="terminal-window">

        <div className="terminal-header">
          <span>GITWRAPPED // TECH DNA</span>

          <div className="window-controls">
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        <div className="language-content">

          <p className="system-text">
            &gt; USER: @{username}
          </p>

          <h2>YOUR TECH DNA</h2>

          <p className="language-subtitle">
            &gt; PRIMARY LANGUAGES DETECTED
          </p>

          <div className="language-list">

            {analytics.languageBreakdown.map((item, index) => (
              <div
                className="language-row"
                key={item.language}
              >

                <div className="language-name">
                  <span className="language-rank">
                    0{index + 1}
                  </span>

                  <span>
                    {item.language}
                  </span>
                </div>

                <div className="language-bar">
                  <div
                    className="language-fill"
                    style={{
                      width: `${item.percentage}%`
                    }}
                  />
                </div>

                <span className="language-percentage">
                  {item.percentage}%
                </span>

              </div>
            ))}

          </div>

          <div className="language-highlight">
            <span>YOUR MAIN CHARACTER</span>

            <strong>
              {analytics.topLanguage || "UNKNOWN"}
            </strong>
          </div>

          <p className="language-footer">
            &gt; TECHNICAL DNA RECORDED_
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

export default LanguageScreen;