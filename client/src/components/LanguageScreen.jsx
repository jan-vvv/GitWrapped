import { useEffect } from "react";
import "../styles/language.css";

function LanguageScreen({ analytics, username, onNext }) {
  const languages = analytics?.languageBreakdown || [];
  const stackLanguages = languages.slice(0, 4);

  useEffect(() => {
    function handleKeyDown(event) {
      if (
        event.key === "Enter" ||
        event.key === " " ||
        event.key === "ArrowRight"
      ) {
        event.preventDefault();
        onNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onNext]);

  return (
    <main
      className="tech-stack-screen"
      onClick={onNext}
    >
      <div className="stack-noise" />

      <div className="stack-meta">
        GITWRAPPED // TECH STACK
      </div>

      <div className="stack-user">
        @{username}
      </div>

     
      

      <section className="stack-content">

        <div className="stack-heading">
          <p>YOUR LANGUAGES HAVE BEEN STACKED</p>

          <h1>
            YOUR TECH
            <br />
            <span>STACK</span>
          </h1>
        </div>

        <div className="burger-hero">

          {/* top bun */}
          <div className="burger-bun burger-bun-top">
            <span className="seed seed-1" />
            <span className="seed seed-2" />
            <span className="seed seed-3" />
            <span className="seed seed-4" />
            <span className="seed seed-5" />
            <span className="seed seed-6" />
          </div>

          {/* language layers */}
          <div className="burger-stack">
            {stackLanguages.map((item, index) => (
              <div
                key={item.language}
                className={`burger-layer burger-layer-${index}`}
                style={{
                  "--layer-height": `${Math.max(
                    54,
                    38 + item.percentage * 1.05
                  )}px`,
                  "--delay": `${600 + index * 220}ms`,
                }}
              >
                <strong>
                  {item.language}
                </strong>

                <span>
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>

          {/* decorative sauce */}
          <div className="stack-sauce stack-sauce-pink" />
          <div className="stack-sauce stack-sauce-dark" />

          {/* bottom bun */}
          <div className="burger-bun burger-bun-bottom" />

        </div>

        <div className="stack-result">
          <strong>
            {analytics.languageCount || stackLanguages.length}
          </strong>

          <span>
            LANGUAGES DETECTED
          </span>
        </div>

        <p className="stack-roast">
          You don't have a tech stack.
          <br />
          You have a buffet.
        </p>

      </section>

      <div className="stack-footer">
        <span>STACK ANALYSIS // COMPLETE</span>

        <div className="stack-next">
          <span className="stack-enter-key">
            ENTER
          </span>

          <span>TO CONTINUE</span>
        </div>
      </div>
    </main>
  );
}

export default LanguageScreen;