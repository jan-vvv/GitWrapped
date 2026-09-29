import "../styles/achievements.css";

function AchievementsScreen({
  analytics,
  username,
  onNext,
}) {
  const achievements =
    analytics.achievements || [];

  return (
    <main className="achievements-screen crt-screen">
      <div className="terminal-window">

        <div className="terminal-header">
          <span>
            GITWRAPPED // CARD 07
          </span>

          <div className="window-controls">
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        <div className="achievements-content">

          <p className="system-text">
            &gt; PLAYER: @{username}
          </p>

          <p className="card-number">
            CARD 07 // ACHIEVEMENT PROTOCOL
          </p>

          <h2>
            ACHIEVEMENTS
            <br />
            UNLOCKED
          </h2>

          <p className="achievement-count">
            {achievements.length} REWARDS EARNED
          </p>

          <div className="achievements-list">

            {achievements.map(
              (achievement) => (
                <div
                  className={`achievement-card rarity-${achievement.rarity.toLowerCase()}`}
                  key={achievement.id}
                >

                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>

                  <div className="achievement-info">

                    <span className="achievement-rarity">
                      {achievement.rarity}
                    </span>

                    <h3>
                      {achievement.title}
                    </h3>

                    <p>
                      {achievement.description}
                    </p>

                  </div>

                  <div className="achievement-status">
                    UNLOCKED
                  </div>

                </div>
              )
            )}

          </div>

          <p className="achievements-footer">
            &gt; REWARD DATA SAVED_
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

export default AchievementsScreen;