import { useEffect } from "react";
import "../styles/languagePersonality.css";

function LanguagePersonalityScreen({
  analytics,
  username,
  onNext,
}) {
  const personality = analytics?.languagePersonality;
  const topLanguage = analytics?.topLanguage || "UNKNOWN";

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

  const isJavaScript =
    topLanguage.toLowerCase() === "javascript";

  return (
    <main
      className={`language-personality-screen ${
        isJavaScript ? "language-javascript" : ""
      }`}
      onClick={onNext}
    >
      <div className="language-personality-noise" />

      <div className="language-meta">
        GITWRAPPED // LANGUAGE PROFILE
      </div>

      <div className="language-user">
        @{username}
      </div>

      {/* decorative background shapes */}
      <div className="language-shape language-shape-one" />
      <div className="language-shape language-shape-two" />

      <section className="language-scene">

        <p className="language-kicker">
          YOUR MAIN LANGUAGE
        </p>

        <h1 className="language-name">
          {topLanguage}
        </h1>

        {/* language-specific graphic */}
        <div className="language-art">

          {isJavaScript ? (
            <>
              <div className="js-code js-curly-left">
                {"{"}
              </div>

              <div className="js-code js-curly-right">
                {"}"}
              </div>

              <div className="js-code js-arrow">
                =&gt;
              </div>

              <div className="js-code js-parentheses">
                ()
              </div>

              <div className="js-code js-semicolon">
                ;
              </div>

              <div className="js-console">
                console.log()
              </div>

              <div className="js-tile">
                <span>JS</span>
              </div>

              <div className="js-pixel-block block-one" />
              <div className="js-pixel-block block-two" />
              <div className="js-pixel-block block-three" />
            </>
          ) : (
            <div className="generic-language-art">
              <span>
                {topLanguage.slice(0, 3).toUpperCase()}
              </span>
            </div>
          )}

        </div>

        <div className="language-result">

          <p className="language-result-label">
            YOUR LANGUAGE PERSONALITY
          </p>

          <h2>
            {personality?.title || "THE CODE MYSTIC"}
          </h2>

          {personality?.vibe && (
            <div className="language-vibe">
              {personality.vibe}
            </div>
          )}

          <p className="language-description">
            {personality?.description ||
              "Your coding identity remains classified."}
          </p>

        </div>

      </section>

      <div className="language-footer">
        <span>GITWRAPPED_OS</span>
        <span>PROFILE // LOCKED</span>
      </div>

      <div className="language-next">
        <span className="language-enter">
          ENTER
        </span>

        <span>TO CONTINUE</span>
      </div>
    </main>
  );
}

export default LanguagePersonalityScreen;