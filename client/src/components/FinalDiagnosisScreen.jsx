import "../styles/finalDiagnosis.css";

function FinalDiagnosisScreen({
  analytics,
  username,
  onNext,
}) {
  const personality = analytics?.developerPersonality;
  const finalRoast = analytics?.finalRoast;

  return (
    <main className="final-diagnosis-screen">
      <div className="diagnosis-poster">

        <div className="poster-grain" />

        {/* 1:1 Inspo: Bright Top Heatmap Glow Halos */}
        <div className="wrapped-halo halo-outer" />
        <div className="wrapped-halo halo-inner" />
        <div className="wrapped-halo-center" />

        {/* Inspo Pixel Accent & Liquid Blobs */}
        <svg className="pixel-swoosh-svg" viewBox="0 0 300 120" fill="none">
          <path
            d="M10 100 Q 80 10, 160 70 T 290 20"
            stroke="#6b25d2"
            strokeWidth="6"
            strokeDasharray="8 8"
            strokeLinecap="square"
          />
        </svg>

        <div className="liquid-blob blob-a" />
        <div className="liquid-blob blob-b" />

        {/* Top Header */}
        <header className="poster-top">
          <span className="poster-logo">
            GITWRAPPED // CARD 09
          </span>
          <div className="poster-top-rule" />
          <span className="poster-mode">
            {username ? `@${username}` : "FINAL DIAGNOSIS"}
          </span>
        </header>

        {/* Main Content Area */}
        <div className="poster-body">

          {/* Huge Inspo Type Section */}
          <section className="poster-hero-section">
            <span className="hero-eyebrow">
              {finalRoast?.headline || "THE SYSTEM HAS DECIDED"}
            </span>

            <h1 className="diagnosis-main-title">
              {personality?.title || "THE STACK COLLECTOR"}
            </h1>

            <div className="vibe-badge">
              <span>✦ {personality?.vibe || "POLYGLOT ENERGY"} ✦</span>
            </div>
          </section>

          {/* Clean Graphic Stats */}
          <section className="poster-stats-row">
            <div className="stat-item">
              <span className="stat-number">{analytics?.languageCount ?? 0}</span>
              <span className="stat-label">LANGUAGES</span>
            </div>

            <span className="stat-sep">//</span>

            <div className="stat-item">
              <span className="stat-number">{analytics?.repositoryCount ?? 0}</span>
              <span className="stat-label">REPOSITORIES</span>
            </div>

            <span className="stat-sep">//</span>

            <div className="stat-item">
              <span className="stat-number">{analytics?.totalContributions ?? 0}</span>
              <span className="stat-label">CONTRIBUTIONS</span>
            </div>
          </section>

          {/* Description & Editorial Roast */}
          <section className="poster-text-block">
            <p className="personality-desc">
              "{personality?.description || "Your developer identity remains classified."}"
            </p>

            {finalRoast?.roast && (
              <div className="roast-sticker">
                <span className="roast-lbl">OFFICIAL ROAST</span>
                <p className="roast-body">{finalRoast.roast}</p>
              </div>
            )}
          </section>

        </div>

        {/* Footer */}
        <footer className="poster-bottom">
          <span className="bottom-note">
            {finalRoast?.closing || "GitWrapped has seen enough. You are officially part of the lore."}
          </span>

          <button className="wrapped-save-btn" onClick={onNext}>
            <span>SAVE MY WRAPPED →</span>
          </button>
        </footer>

      </div>
    </main>
  );
}

export default FinalDiagnosisScreen;