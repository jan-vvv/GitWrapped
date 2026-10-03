import { useEffect } from "react";
import "../styles/yearIntro.css";

function YearIntroScreen({ onNext }) {
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
      className="year-intro-screen"
      onClick={onNext}
    >
      <div className="intro-noise" />

      <div className="intro-meta intro-meta-top">
        GITWRAPPED // 2026
      </div>

      <div className="intro-meta intro-meta-side">
        YOUR YEAR / 01
      </div>

      <div className="intro-orbit intro-orbit-one" />
      <div className="intro-orbit intro-orbit-two" />

      <div className="intro-checker" />

      <div className="intro-pink-shape" />

      <div className="intro-burst">
        <span>GITWRAPPED</span>
      </div>

      <section className="intro-title-group">
        <p className="intro-small-title">
          THE ANNUAL DEVELOPER REPORT
        </p>

        <h1>
          YOUR YEAR
          <br />
          <span>IN CODE</span>
        </h1>

        <div className="intro-rule" />

        <p className="intro-subtitle">
          A very serious investigation
          <br />
          into what you were doing on GitHub.
        </p>
      </section>

      <div className="intro-system">
        <span>GITWRAPPED_OS</span>
        <span>SIGNAL 01</span>
        <span>READY</span>
      </div>

      <div className="intro-next">
        <span className="intro-enter-key">ENTER</span>
        <span>TO CONTINUE</span>
      </div>
    </main>
  );
}

export default YearIntroScreen;