import { useEffect } from "react";
import "../styles/roast.css";

function RoastScreen({
  analytics,
  username,
  onNext,
}) {
  const personality = analytics?.languagePersonality;

  const roast =
    personality?.roast ||
    "GitWrapped has observed your behavior and has concerns.";

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
      className="roast-screen"
      onClick={onNext}
    >
      <div className="roast-noise" />

      <div className="roast-meta">
        GITWRAPPED // BEHAVIORAL ANALYSIS
      </div>

      <div className="roast-user">
        @{username}
      </div>

      <div className="roast-decoration roast-decoration-one" />
      <div className="roast-decoration roast-decoration-two" />

      <section className="roast-content">

        <p className="roast-kicker">
          GITWRAPPED HAS AN OPINION.
        </p>

        <h1>
          ROASTED.
        </h1>

        <div className="roast-divider" />

        <blockquote>
          "{roast}"
        </blockquote>

        <p className="roast-signature">
          — GITWRAPPED
        </p>

      </section>

      <div className="roast-footer">
        <span>SUBJECT // @ {username}</span>

        <span>
          <strong>ENTER</strong>
          &nbsp; TO CONTINUE
        </span>
      </div>
    </main>
  );
}

export default RoastScreen;