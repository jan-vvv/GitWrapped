import { useCallback, useEffect, useState } from "react";
import "../styles/achievements.css";

function AchievementsScreen({
  analytics,
  username,
  onNext,
}) {
  const achievements = analytics?.achievements || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const achievement = achievements[currentIndex];

  const currentNumber = String(
    currentIndex + 1
  ).padStart(2, "0");

  const totalNumber = String(
    achievements.length
  ).padStart(2, "0");


  /* =====================================================
     HEADLINE
  ===================================================== */

  const getHeadline = useCallback(
    (item) => {
      const id = String(
        item?.id || ""
      ).toLowerCase();

      switch (id) {
        case "polyglot":
          return `${analytics?.languageCount || 0} LANGUAGES DETECTED`;

        case "streak-lord":
          return `${analytics?.longestStreak || 0} DAY STREAK`;

        case "commit-machine":
          return `${analytics?.totalContributions || 0} CONTRIBUTIONS`;

        case "side-quest":
          return `${analytics?.repositoryCount || 0} SIDE QUESTS`;

        case "consistency":
          return `${analytics?.consistencyScore || 0}% CONSISTENCY`;

        case "first-blood":
          return "FIRST CONTRIBUTION RECORDED";

        case "repo-hoarder":
          return `${analytics?.repositoryCount || 0} REPOSITORIES`;

        case "weekend-warrior":
          return `${analytics?.mostActiveDay || "WEEKEND"} CODING`;
          
        default:
          return (
            item?.title ||
            "ACHIEVEMENT UNLOCKED"
          );
      }
    },
    [analytics]
  );


  /* =====================================================
     ARTWORK TYPE
     MATCHES YOUR ACTUAL ANALYTICS ENGINE IDS
  ===================================================== */

  function getArtworkType(item) {
    const id = String(
      item?.id || ""
    ).toLowerCase();

    switch (id) {
      case "polyglot":
        return "dna";

      case "streak-lord":
        return "streak";

      case "commit-machine":
        return "commit";

      case "side-quest":
        return "quest";

      case "consistency":
        return "consistency";

      case "first-blood":
        return "first-blood";

      case "repo-hoarder":
        return "repos";

      case "weekend-warrior":
        return "weekend";

      default:
        return "dna";
    }
  }


  /* =====================================================
     NEXT ACHIEVEMENT
  ===================================================== */

  const goNext = useCallback(() => {
    if (transitioning) {
      return;
    }

    if (
      currentIndex >=
      achievements.length - 1
    ) {
      onNext();
      return;
    }

    setTransitioning(true);

    setTimeout(() => {
      setCurrentIndex(
        (prev) => prev + 1
      );

      setTransitioning(false);
    }, 420);
  }, [
    currentIndex,
    achievements.length,
    transitioning,
    onNext,
  ]);


  /* =====================================================
     KEYBOARD
  ===================================================== */

  useEffect(() => {
    function handleKeyDown(event) {
      if (
        event.key === "Enter" ||
        event.key === " " ||
        event.key === "ArrowRight"
      ) {
        event.preventDefault();
        goNext();
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
  }, [goNext]);


  /* =====================================================
     ARTWORK
  ===================================================== */

  function renderArtwork() {
    const type = getArtworkType(achievement);


    /* ===================================================
       POLYGLOT — DNA
    =================================================== */

    if (type === "dna") {
      return (
        <svg
          className="achievement-art-svg art-dna"
          viewBox="0 0 500 560"
          aria-hidden="true"
        >
          <defs>

            <linearGradient
              id="dnaLime"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#ddff31"
              />

              <stop
                offset="100%"
                stopColor="#9de500"
              />
            </linearGradient>

            <linearGradient
              id="dnaPurple"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#9340ec"
              />

              <stop
                offset="100%"
                stopColor="#5e20c7"
              />
            </linearGradient>

          </defs>


     

          <path
            d="
              M150 35
              C355 105 355 215 150 280
              C-55 345 -55 455 150 525
            "
            fill="none"
            stroke="#080808"
            strokeWidth="28"
            strokeLinecap="round"
          />

          <path
            d="
              M350 35
              C145 105 145 215 350 280
              C555 345 555 455 350 525
            "
            fill="none"
            stroke="#080808"
            strokeWidth="28"
            strokeLinecap="round"
          />


          {/* strands */}

          <path
            d="
              M150 35
              C355 105 355 215 150 280
              C-55 345 -55 455 150 525
            "
            fill="none"
            stroke="url(#dnaLime)"
            strokeWidth="18"
            strokeLinecap="round"
          />

          <path
            d="
              M350 35
              C145 105 145 215 350 280
              C555 345 555 455 350 525
            "
            fill="none"
            stroke="url(#dnaPurple)"
            strokeWidth="18"
            strokeLinecap="round"
          />


          {/* base pairs */}

          <g
            stroke="#24e9ef"
            strokeWidth="8"
            strokeLinecap="round"
          >
            <line x1="152" y1="65" x2="348" y2="65" />
            <line x1="188" y1="112" x2="312" y2="112" />
            <line x1="232" y1="158" x2="268" y2="158" />
            <line x1="275" y1="204" x2="225" y2="204" />
            <line x1="300" y1="250" x2="200" y2="250" />
            <line x1="200" y1="310" x2="300" y2="310" />
            <line x1="225" y1="357" x2="275" y2="357" />
            <line x1="268" y1="403" x2="232" y2="403" />
            <line x1="312" y1="449" x2="188" y2="449" />
            <line x1="348" y1="495" x2="152" y2="495" />
          </g>


          {/* nodes */}

          <g
            fill="#f5efdf"
            stroke="#080808"
            strokeWidth="5"
          >
            <circle cx="150" cy="35" r="14" />
            <circle cx="350" cy="35" r="14" />

            <circle cx="150" cy="280" r="15" />
            <circle cx="350" cy="280" r="15" />

            <circle cx="150" cy="525" r="14" />
            <circle cx="350" cy="525" r="14" />
          </g>


          {/* center marker */}

          <path
            d="
              M250 230
              L266 266
              L304 280
              L266 294
              L250 332
              L234 294
              L196 280
              L234 266
              Z
            "
            fill="#c7ff00"
            stroke="#080808"
            strokeWidth="7"
          />

        </svg>
      );
    }


    /* ===================================================
       STREAK LORD — FIRE / RISING STREAK
    =================================================== */

    if (type === "streak") {
      return (
        <svg
          className="achievement-art-svg art-streak"
          viewBox="0 0 500 500"
          aria-hidden="true"
        >

          {/* shadow */}

          <path
            d="
              M250 40
              C215 110 270 125 205 190
              C143 252 160 330 211 365
              C185 300 246 270 262 218
              C284 282 341 286 313 363
              C370 330 395 265 355 214
              C334 187 327 157 335 116
              C290 141 300 78 250 40
              Z
            "
            fill="#080808"
            transform="translate(10 13)"
          />


          {/* lime fire */}

          <path
            d="
              M250 40
              C215 110 270 125 205 190
              C143 252 160 330 211 365
              C185 300 246 270 262 218
              C284 282 341 286 313 363
              C370 330 395 265 355 214
              C334 187 327 157 335 116
              C290 141 300 78 250 40
              Z
            "
            fill="#c7ff00"
            stroke="#080808"
            strokeWidth="8"
          />


          {/* purple inner flame */}

          <path
            d="
              M251 117
              C231 169 271 179 232 222
              C204 252 210 288 236 310
              C231 265 267 246 274 214
              C296 254 319 274 296 315
              C329 291 341 252 317 224
              C298 201 298 170 304 147
              C278 160 278 130 251 117
              Z
            "
            fill="#6b25d2"
            stroke="#080808"
            strokeWidth="7"
          />


          {/* cyan spark */}

          <path
            d="
              M250 186
              L266 221
              L301 235
              L266 249
              L250 284
              L234 249
              L199 235
              L234 221
              Z
            "
            fill="#24e9ef"
            stroke="#080808"
            strokeWidth="6"
          />


          {/* streak marks */}

          <g
            stroke="#080808"
            strokeWidth="11"
            strokeLinecap="round"
          >
            <line x1="135" y1="400" x2="235" y2="400" />
            <line x1="275" y1="400" x2="365" y2="400" />
            <line x1="175" y1="430" x2="315" y2="430" />
          </g>

        </svg>
      );
    }


    /* ===================================================
       COMMIT MACHINE — NETWORK / COMMAND CORE
    =================================================== */

    if (type === "commit") {
      return (
        <svg
          className="achievement-art-svg art-commit"
          viewBox="0 0 500 500"
          aria-hidden="true"
        >

          <circle
            cx="250"
            cy="250"
            r="173"
            fill="#080808"
          />

          <circle
            cx="250"
            cy="250"
            r="148"
            fill="#24e9ef"
            stroke="#080808"
            strokeWidth="8"
          />


          {/* outer command lines */}

          <g
            stroke="#080808"
            strokeWidth="13"
            strokeLinecap="round"
          >
            <line x1="67" y1="250" x2="160" y2="250" />
            <line x1="340" y1="250" x2="433" y2="250" />

            <line x1="250" y1="67" x2="250" y2="160" />
            <line x1="250" y1="340" x2="250" y2="433" />
          </g>


          {/* inner core */}

          <circle
            cx="250"
            cy="250"
            r="76"
            fill="#6b25d2"
            stroke="#080808"
            strokeWidth="8"
          />


          {/* lightning */}

          <path
            d="
              M285 155
              L215 245
              L252 245
              L214 345
              L300 235
              L260 235
              Z
            "
            fill="#c7ff00"
            stroke="#080808"
            strokeWidth="7"
            strokeLinejoin="round"
          />


          {/* nodes */}

          <circle
            cx="250"
            cy="67"
            r="13"
            fill="#f5efdf"
            stroke="#080808"
            strokeWidth="5"
          />

          <circle
            cx="250"
            cy="433"
            r="13"
            fill="#f5efdf"
            stroke="#080808"
            strokeWidth="5"
          />

        </svg>
      );
    }


    /* ===================================================
       SIDE QUEST — BRANCHING MAP
    =================================================== */

    if (type === "quest") {
      return (
        <svg
          className="achievement-art-svg art-quest"
          viewBox="0 0 500 500"
          aria-hidden="true"
        >

          {/* black map shadow */}

          <path
            d="
              M85 390
              L85 295
              L170 230
              L170 125
              L300 125
              L300 195
              L395 195
              L395 330
              L300 330
              L300 405
              L170 405
              L170 360
              Z
            "
            fill="#080808"
            transform="translate(10 12)"
          />


    
          <path
            d="
              M85 390
              L85 295
              L170 230
              L170 125
              L300 125
              L300 195
              L395 195
              L395 330
              L300 330
              L300 405
              L170 405
              L170 360
              Z
            "
            fill="#6b25d2"
            stroke="#080808"
            strokeWidth="8"
          />


          

          <path
            d="
              M85 295
              L170 230
              L300 195
              L395 330
              L300 330
              L170 360
            "
            fill="none"
            stroke="#c7ff00"
            strokeWidth="17"
            strokeLinecap="round"
            strokeLinejoin="round"
          />


 

          <path
            d="
              M170 230
              L250 285
              L350 250
            "
            fill="none"
            stroke="#24e9ef"
            strokeWidth="9"
            strokeLinecap="round"
          />


       

          <g
            stroke="#080808"
            strokeWidth="7"
          >
            <circle
              cx="85"
              cy="295"
              r="18"
              fill="#24e9ef"
            />

            <circle
              cx="170"
              cy="230"
              r="18"
              fill="#c7ff00"
            />

            <circle
              cx="300"
              cy="195"
              r="18"
              fill="#f5efdf"
            />

            <circle
              cx="395"
              cy="330"
              r="18"
              fill="#24e9ef"
            />

            <circle
              cx="350"
              cy="250"
              r="16"
              fill="#c7ff00"
            />
          </g>



          <path
            d="
              M250 65
              L266 101
              L303 116
              L266 131
              L250 168
              L234 131
              L197 116
              L234 101
              Z
            "
            fill="#c7ff00"
            stroke="#080808"
            strokeWidth="7"
          />

        </svg>
      );
    }



    if (type === "consistency") {
      return (
        <svg
          className="achievement-art-svg art-consistency"
          viewBox="0 0 500 500"
          aria-hidden="true"
        >


          <rect
            x="92"
            y="92"
            width="316"
            height="320"
            rx="18"
            fill="#080808"
            transform="translate(10 12)"
          />


    

          <rect
            x="92"
            y="92"
            width="316"
            height="320"
            rx="18"
            fill="#f5efdf"
            stroke="#080808"
            strokeWidth="9"
          />


    

          <rect
            x="92"
            y="92"
            width="316"
            height="84"
            rx="18"
            fill="#6b25d2"
            stroke="#080808"
            strokeWidth="9"
          />


      

          <g
            stroke="#080808"
            strokeWidth="12"
            strokeLinecap="round"
          >
            <line x1="165" y1="66" x2="165" y2="115" />
            <line x1="335" y1="66" x2="335" y2="115" />
          </g>


       

          <g fill="#c7ff00">

            <rect x="120" y="210" width="40" height="40" />
            <rect x="175" y="210" width="40" height="40" />
            <rect x="230" y="210" width="40" height="40" />
            <rect x="285" y="210" width="40" height="40" />
            <rect x="340" y="210" width="40" height="40" />

            <rect x="120" y="265" width="40" height="40" />
            <rect x="175" y="265" width="40" height="40" />
            <rect x="230" y="265" width="40" height="40" />
            <rect x="285" y="265" width="40" height="40" />
            <rect x="340" y="265" width="40" height="40" />

            <rect x="120" y="320" width="40" height="40" />
            <rect x="175" y="320" width="40" height="40" />
            <rect x="230" y="320" width="40" height="40" />
            <rect x="285" y="320" width="40" height="40" />
            <rect x="340" y="320" width="40" height="40" />

          </g>


         

          <path
            d="
              M125 340
              L185 340
              L240 285
              L292 315
              L370 225
            "
            fill="none"
            stroke="#24e9ef"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />


          

          <circle
            cx="250"
            cy="145"
            r="20"
            fill="#c7ff00"
            stroke="#080808"
            strokeWidth="6"
          />

        </svg>
      );
    }


 

    if (type === "first-blood") {
      return (
        <svg
          className="achievement-art-svg art-first-blood"
          viewBox="0 0 500 500"
          aria-hidden="true"
        >


          <circle
            cx="250"
            cy="250"
            r="180"
            fill="#080808"
          />

          <circle
            cx="250"
            cy="250"
            r="158"
            fill="#ef426f"
            stroke="#080808"
            strokeWidth="9"
          />

          <circle
            cx="250"
            cy="250"
            r="112"
            fill="#c7ff00"
            stroke="#080808"
            strokeWidth="8"
          />

          <circle
            cx="250"
            cy="250"
            r="67"
            fill="#6b25d2"
            stroke="#080808"
            strokeWidth="8"
          />

          <circle
            cx="250"
            cy="250"
            r="26"
            fill="#080808"
          />


          

          <g
            stroke="#080808"
            strokeWidth="9"
            strokeLinecap="round"
          >
            <line x1="250" y1="42" x2="250" y2="95" />
            <line x1="250" y1="405" x2="250" y2="458" />

            <line x1="42" y1="250" x2="95" y2="250" />
            <line x1="405" y1="250" x2="458" y2="250" />

            <line x1="103" y1="103" x2="140" y2="140" />
            <line x1="360" y1="360" x2="397" y2="397" />

            <line x1="397" y1="103" x2="360" y2="140" />
            <line x1="140" y1="360" x2="103" y2="397" />
          </g>



          <path
            d="
              M250 165
              L270 220
              L330 250
              L270 280
              L250 335
              L230 280
              L170 250
              L230 220
              Z
            "
            fill="#f5efdf"
            stroke="#080808"
            strokeWidth="7"
          />

        </svg>
      );
    }


    /* ===================================================
       REPO HOARDER
    =================================================== */

    if (type === "repos") {
      return (
        <svg
          className="achievement-art-svg art-repos"
          viewBox="0 0 500 500"
          aria-hidden="true"
        >

          

          <g
            transform="rotate(-6 250 250)"
          >

            <rect
              x="90"
              y="115"
              width="300"
              height="235"
              rx="12"
              fill="#080808"
              transform="translate(10 12)"
            />

            <rect
              x="90"
              y="115"
              width="300"
              height="235"
              rx="12"
              fill="#6b25d2"
              stroke="#080808"
              strokeWidth="8"
            />

            <rect
              x="110"
              y="145"
              width="200"
              height="16"
              rx="8"
              fill="#c7ff00"
            />

            <rect
              x="110"
              y="192"
              width="160"
              height="16"
              rx="8"
              fill="#24e9ef"
            />

            <rect
              x="110"
              y="239"
              width="185"
              height="16"
              rx="8"
              fill="#f5efdf"
            />

            <rect
              x="110"
              y="286"
              width="130"
              height="16"
              rx="8"
              fill="#c7ff00"
            />


           

            <rect
              x="125"
              y="75"
              width="260"
              height="210"
              rx="12"
              fill="#24e9ef"
              stroke="#080808"
              strokeWidth="8"
              opacity=".96"
            />

          </g>



          <circle
            cx="365"
            cy="370"
            r="72"
            fill="#c7ff00"
            stroke="#080808"
            strokeWidth="8"
          />

          <text
            x="365"
            y="383"
            textAnchor="middle"
            fontFamily="Arial Black, Arial"
            fontSize="52"
            fill="#080808"
          >
            +
          </text>

        </svg>
      );
    }


    /* ===================================================
       WEEKEND WARRIOR — CROSSED BLADES
    =================================================== */

    return (
      <svg
        className="achievement-art-svg art-weekend"
        viewBox="0 0 500 500"
        aria-hidden="true"
      >

      

        <path
          d="
            M90 105
            L220 335
            L250 450
            L280 335
            L410 105
            L365 135
            L250 315
            L135 135
            Z
          "
          fill="#6b25d2"
          stroke="#080808"
          strokeWidth="8"
          strokeLinejoin="round"
        />



        <path
          d="
            M410 105
            L280 335
            L250 450
            L220 335
            L90 105
            L135 135
            L250 315
            L365 135
            Z
          "
          fill="#c7ff00"
          stroke="#080808"
          strokeWidth="8"
          strokeLinejoin="round"
        />


        <rect
          x="82"
          y="92"
          width="45"
          height="85"
          rx="18"
          fill="#24e9ef"
          stroke="#080808"
          strokeWidth="7"
          transform="rotate(-31 104 135)"
        />

        <rect
          x="373"
          y="92"
          width="45"
          height="85"
          rx="18"
          fill="#24e9ef"
          stroke="#080808"
          strokeWidth="7"
          transform="rotate(31 395 135)"
        />


       

        <path
          d="
            M250 195
            L269 235
            L313 250
            L269 265
            L250 307
            L231 265
            L187 250
            L231 235
            Z
          "
          fill="#f5efdf"
          stroke="#080808"
          strokeWidth="7"
        />

      </svg>
    );
  }


  /* =====================================================
     EMPTY STATE
  ===================================================== */

  if (!achievement) {
    return (
      <main className="achievement-screen">
        <div className="achievement-poster">

          <div className="poster-grain" />

          <div className="empty-achievements">

            <div className="empty-eyebrow">
              GITWRAPPED // ACHIEVEMENTS
            </div>

            <h1>
              NOTHING
              <br />
              UNLOCKED.
            </h1>

            <span>
              ENTER TO CONTINUE
            </span>

          </div>

        </div>
      </main>
    );
  }


  /* =====================================================
     TITLE SIZING
  ===================================================== */

  const titleLength =
    achievement.title?.length || 0;

  let titleClass = "";

  if (titleLength > 20) {
    titleClass =
      "achievement-title-very-long";
  } else if (titleLength > 14) {
    titleClass =
      "achievement-title-long";
  }


  /* =====================================================
     MAIN
  ===================================================== */

  return (
    <main
      className={`achievement-screen ${
        transitioning
          ? "achievement-transitioning"
          : ""
      }`}
      onClick={goNext}
    >
      <div className="achievement-poster">

        <div className="poster-grain" />


        

        <header className="poster-top">

          <span className="poster-logo">
            GITWRAPPED // ACHIEVEMENTS
          </span>

          <div className="poster-top-rule" />

          <span className="poster-mode">
            ARCHIVE OPEN
          </span>

        </header>


        

        <h1 className="poster-title">
          ACHIEVEMENTS
        </h1>


        

        <svg
          className="poster-burst"
          viewBox="0 0 120 120"
          aria-hidden="true"
        >
          <path
            d="
              M60 3
              L67 40
              L91 15
              L79 44
              L117 35
              L83 57
              L116 76
              L79 69
              L93 103
              L67 78
              L58 117
              L51 79
              L23 103
              L37 70
              L4 76
              L36 56
              L5 35
              L39 44
              L25 14
              L51 39
              Z
            "
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>


       

        <section
          key={`art-${achievement.id || currentIndex}`}
          className="poster-illustration"
        >

          <svg
            className="orbit-svg"
            viewBox="0 0 650 540"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <ellipse
              cx="320"
              cy="270"
              rx="285"
              ry="155"
              transform="rotate(-18 320 270)"
            />

            <ellipse
              cx="320"
              cy="270"
              rx="290"
              ry="155"
              transform="rotate(20 320 270)"
            />

            <ellipse
              cx="320"
              cy="275"
              rx="300"
              ry="85"
              transform="rotate(-8 320 275)"
            />
          </svg>


          {renderArtwork()}


          <span className="illustration-star star-a">
            ✦
          </span>

          <span className="illustration-star star-b">
            ✦
          </span>

          <span className="illustration-star star-c">
            ✦
          </span>


          <div className="poster-checkerboard" />

        </section>


       

        <section
          key={`copy-${achievement.id || currentIndex}`}
          className="poster-copy"
        >

          <div className="copy-kicker">

            <span>
              ACHIEVEMENT {currentNumber}
            </span>

            <div />

            <span>
              {currentNumber} / {totalNumber}
            </span>

          </div>


          <div
            className={`copy-title ${titleClass}`}
          >

            <div className="copy-lime-stroke" />

            <h2>
              {achievement.title}
            </h2>

          </div>


          <div className="copy-status">

            <span className="rarity">
              {achievement.rarity || "COMMON"}
            </span>

            <span className="dot">
              •
            </span>

            <span className="unlocked">
              UNLOCKED
            </span>

          </div>


          <h3 className="copy-headline">
            {getHeadline(achievement)}
          </h3>


          <p className="copy-description">
            {achievement.description}
          </p>

        </section>


       

        <div
          key={`bottom-${achievement.id || currentIndex}`}
          className="poster-copy-bottom"
        >

          <div className="archive-note">
            DEVELOPER
            <br />
            ACHIEVEMENT
            <br />
            UNLOCKED
          </div>

          <div className="copy-footer-line" />

          <div className="continue-prompt">

            <span className="enter-box">
              ENTER
            </span>

            <span>
              TO CONTINUE
            </span>

          </div>

        </div>


        

        <footer className="poster-bottom">

          <span>
            GITWRAPPED // USER PROFILE
          </span>

          <span>
            {username
              ? `@${username}`
              : "PROFILE ANALYZED"}
          </span>

        </footer>

      </div>
    </main>
  );
}

export default AchievementsScreen;