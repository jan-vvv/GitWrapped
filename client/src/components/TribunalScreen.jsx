import { useEffect } from "react";
import "../styles/tribunal.css";

function TribunalScreen({
  analytics,
  username,
  onNext,
}) {
  const personality =
    analytics?.developerPersonality;

  const charges =
    personality?.charges || [];

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

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onNext]);

  return (
    <main
      className="tribunal-screen"
      onClick={onNext}
    >
      <div className="tribunal-noise" />

      {/* HEADER */}

      <div className="tribunal-meta">
        GITWRAPPED // TRIBUNAL PROTOCOL
      </div>

      <div className="tribunal-user">
        @{username}
      </div>


      {/* DECORATIVE GRAPHICS */}

      <div className="tribunal-squiggle tribunal-squiggle-one" />
      <div className="tribunal-squiggle tribunal-squiggle-two" />


      {/* MAIN STORY */}

      <section className="tribunal-content">

        <div className="tribunal-topline">
          <span>
            CARD 06
          </span>

          <span>
            DEVELOPER REVIEW
          </span>

          <span>
            EVIDENCE FOUND
          </span>
        </div>


        {/* CASE */}

        <div className="tribunal-case">

          <p className="tribunal-kicker">
            THE PEOPLE VS.
          </p>

          <h1>
            @{username}
          </h1>

        </div>


        {/* CHARGES */}

        <div className="tribunal-charges-heading">
          CHARGED WITH
        </div>

        <div className="charges-list">

          {charges.slice(0, 3).map(
            (charge, index) => (
              <div
                className="charge-row"
                key={
                  charge.title ||
                  `charge-${index}`
                }
              >
                <span className="charge-index">
                  0{index + 1}
                </span>

                <span className="charge-title">
                  {charge.title}
                </span>

                <span className="charge-description">
                  {charge.description}
                </span>
              </div>
            )
          )}

        </div>


        {/* VERDICT */}

        <div className="tribunal-verdict">

          <span className="verdict-kicker">
            VERDICT
          </span>

          <h2>
            {personality?.verdict ||
              "GUILTY"}
          </h2>

        </div>


        {/* IDENTITY */}

        <div className="tribunal-identity">

          <span>
            GUILTY OF BEING
          </span>

          <strong>
            {personality?.title ||
              "THE CODE EXPLORER"}
          </strong>

        </div>


        {/* SENTENCE */}

        <div className="sentence-box">

          <span>
            SENTENCE //
          </span>

          <p>
            {personality?.sentence ||
              "Keep coding. The system is watching."}
          </p>

        </div>

      </section>


      {/* FOOTER */}

      <div className="tribunal-footer">
        <span>
          CASE CLOSED_
        </span>
      </div>


      {/* NEXT */}

      <button
        className="tribunal-next"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
      >
        ACCEPT SENTENCE
        <strong>ENTER →</strong>
      </button>

    </main>
  );
}

export default TribunalScreen;