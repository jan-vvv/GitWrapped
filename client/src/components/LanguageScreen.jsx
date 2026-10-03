import { useEffect } from "react";
import "../styles/language.css";

function LanguageScreen({ analytics, username, onNext }) {
  const languages = analytics?.languageBreakdown || [];

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
      className="tech-dna-screen"
      onClick={onNext}
    >
      <div className="dna-grid" />
      <div className="dna-noise" />

      <div className="dna-meta dna-meta-top">
        GITWRAPPED // TECH DNA
      </div>

      <div className="dna-meta dna-meta-side">
        @{username}
      </div>

      <div className="dna-orbit dna-orbit-one" />
      <div className="dna-orbit dna-orbit-two" />

      <section className="dna-content">

        <p className="dna-kicker">
          YOUR STACK HAS A STRUCTURE
        </p>

        <h1 className="dna-title">
          TECH DNA
        </h1>

<div className="dna-stage">
  <div className="dna-strand dna-left" />
  <div className="dna-strand dna-right" />

  {languages.slice(0, 6).map((item, index) => (
    <div
      className={`dna-step dna-step-${index}`}
      key={item.language}
    >
      <span className="dna-node left-node" />
      <span className="dna-node right-node" />

      <span className="dna-rung" />

      <span className="dna-language">
        {item.language}
      </span>

      <span className="dna-percent">
        {item.percentage}%
      </span>
    </div>
  ))}
</div>

        <div className="dna-summary">
          <span>
            {analytics.languageCount || languages.length}
          </span>

          <small>
            LANGUAGES DETECTED
          </small>
        </div>

      </section>

      <div className="dna-system">
        <span>GENETIC PROFILE // ACTIVE</span>
        <span>SCAN COMPLETE</span>
      </div>

      <div className="dna-next">
        <span className="dna-enter-key">ENTER</span>
        <span>TO CONTINUE</span>
      </div>
    </main>
  );
}

export default LanguageScreen;