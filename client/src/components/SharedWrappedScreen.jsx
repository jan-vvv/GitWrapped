import { useEffect, useState } from "react";
import FinalWrappedScreen from "./FinalWrappedScreen";

function SharedWrappedScreen({ shareId }) {
  const [wrapped, setWrapped] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchWrapped() {
      try {
        const response = await fetch(
          `http://localhost:5000/api/wrapped/${shareId}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Wrapped not found.");
        }

        setWrapped(data);
      } catch (error) {
        console.error("Error loading shared Wrapped:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWrapped();
  }, [shareId]);

  if (loading) {
    return (
      <main className="crt-screen">
        <div className="terminal-window">
          <p>&gt; LOADING SHARED WRAPPED_</p>
          <p>&gt; RETRIEVING DEVELOPER DATA...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="crt-screen">
        <div className="terminal-window">
          <p>&gt; ERROR_</p>
          <p>{error}</p>
        </div>
      </main>
    );
  }

  const analytics = {
    ...wrapped.analytics,
    languagePersonality: wrapped.languagePersonality,
    developerPersonality: wrapped.developerPersonality,
    achievements: wrapped.achievements,
    finalRoast: wrapped.finalRoast,
  };

  return (
    <FinalWrappedScreen
      analytics={analytics}
      username={wrapped.githubUsername}
      shareId={shareId}
    />
  );
}

export default SharedWrappedScreen;