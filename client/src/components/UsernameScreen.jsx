import { useEffect, useState } from "react";

import "../styles/boot.css";
import "../styles/username.css";

import YearIntroScreen from "./YearIntroScreen";
import AnalyzingScreen from "./AnalyzingScreen";
import WrappedStatsScreen from "./WrappedStatsScreen";
import LanguageScreen from "./LanguageScreen";
import ActivityScreen from "./ActivityScreen";
import LanguagePersonalityScreen from "./LanguagePersonalityScreen";
import RewardProtocolScreen from "./RewardProtocolScreen";
import TribunalScreen from "./TribunalScreen";
import AchievementsScreen from "./AchievementsScreen";
import FinalDiagnosisScreen from "./FinalDiagnosisScreen";
import FinalWrappedScreen from "./FinalWrappedScreen";

function UsernameScreen() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [githubUser, setGithubUser] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [error, setError] = useState("");

  const [currentScreen, setCurrentScreen] = useState("username");
  const [shareId, setShareId] = useState("");
  useEffect(() => {
    if (currentScreen !== "analyzing") {
      return;
    }

    const timer = setTimeout(() => {
      setCurrentScreen("yearIntro");
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentScreen]);

  async function handleContinue() {
    if (!username.trim()) {
      setError("Please enter a GitHub username.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/github/analyze", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username: username.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setGithubUser(data.user);
      setAnalytics(data.analytics);
      setShareId(data.shareId);
      setCurrentScreen("analyzing");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  if (currentScreen === "analyzing") {
    return <AnalyzingScreen username={githubUser.login} />;
  }
  if (currentScreen === "yearIntro") {
  return (
    <YearIntroScreen
      onNext={() => setCurrentScreen("stats")}
    />
  );
}
  if (currentScreen === "stats") {
    return (
      <WrappedStatsScreen
        analytics={analytics}
        username={githubUser.login}
        onNext={() => setCurrentScreen("language")}
      />
    );
  }
  if (currentScreen === "language") {
    return (
      <LanguageScreen
        analytics={analytics}
        username={githubUser.login}
        onNext={() => setCurrentScreen("languagePersonality")}
      />
    );
  }
  if (currentScreen === "languagePersonality") {
    return (
      <LanguagePersonalityScreen
        analytics={analytics}
        username={githubUser.login}
        onNext={() => setCurrentScreen("activity")}
      />
    );
  }

  if (currentScreen === "activity") {
    return (
      <ActivityScreen
        analytics={analytics}
        username={githubUser.login}
        onNext={() => setCurrentScreen("tribunal")}
      />
    );
  }

  if (currentScreen === "tribunal") {
    return (
      <TribunalScreen
        analytics={analytics}
        username={githubUser.login}
        onNext={() => setCurrentScreen("rewardProtocol")}
      />
    );
  }
  if (currentScreen === "rewardProtocol") {
    return (
      <RewardProtocolScreen
        analytics={analytics}
        onComplete={() => setCurrentScreen("achievements")}
      />
    );
  }
  if (currentScreen === "achievements") {
    return (
      <AchievementsScreen
        analytics={analytics}
        username={githubUser.login}
        onNext={() => setCurrentScreen("finalDiagnosis")}
      />
    );
  }
  if (currentScreen === "finalDiagnosis") {
    return (
      <FinalDiagnosisScreen
        analytics={analytics}
        username={githubUser.login}
        onNext={() => setCurrentScreen("finalWrapped")}
      />
    );
  }
  if (currentScreen === "finalWrapped") {
  return (
    <FinalWrappedScreen
      analytics={analytics}
      username={githubUser.login}
      shareId={shareId}
    />
  );
}
  return (
    <main className="username-screen crt-screen">
      <div className="terminal-window">
        <div className="terminal-header">
          <span>GITWRAPPED_OS v1.0</span>

          <div className="window-controls">
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        <div className="username-content">
          <p className="system-text">&gt; SYSTEM READY</p>

          <h2>IDENTIFY YOURSELF</h2>

          <p className="username-description">
            Enter your GitHub username to begin the analysis.
          </p>

          <div className="username-input-wrapper">
            <span>@</span>

            <input
              type="text"
              placeholder="github_username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <button
            className="start-button"
            onClick={handleContinue}
            disabled={loading}
          >
            {loading ? "[ CONNECTING... ]" : "[ CONTINUE ]"}
          </button>

          {error && <p className="username-error">&gt; {error}</p>}

          {githubUser && (
            <div className="github-result">
              <img
                src={githubUser.avatar_url}
                alt={githubUser.login}
                className="github-avatar"
              />

              <h3>{githubUser.name || githubUser.login}</h3>

              <p>@{githubUser.login}</p>

              <p>{githubUser.public_repos} public repositories</p>

              <p>{githubUser.followers} followers</p>
            </div>
          )}

          <p className="boot-footer">
            {githubUser
              ? "> GITHUB PROFILE VERIFIED"
              : "> GITHUB PROFILE REQUIRED"}
          </p>
        </div>
      </div>
    </main>
  );
}

export default UsernameScreen;
