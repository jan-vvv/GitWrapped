import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import "../styles/finalWrapped.css";

function FinalWrappedScreen({ analytics, username ,shareId,}) {
  console.log("FINAL SHARE ID:", shareId);
  const personality = analytics.developerPersonality;
  const finalRoast = analytics.finalRoast;

 const [copied, setCopied] = useState(false);
const [showShareMenu, setShowShareMenu] = useState(false);

const [downloading, setDownloading] = useState(false);
const cardRef = useRef(null);

const shareUrl =
  `${window.location.origin}/share/${shareId}`;

async function copyShareLink() {
  try {
    await navigator.clipboard.writeText(shareUrl);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  } catch (error) {
    console.error("Could not copy share link:", error);
  }
}
async function shareWrapped() {
  if (navigator.share) {
    try {
      await navigator.share({
        title: `${username}'s GitWrapped`,
        text: `My GitWrapped says I'm ${
          personality?.title || "THE CODE EXPLORER"
        } 💿`,
        url: shareUrl,
      });
    } catch (error) {
      console.log("Share cancelled.");
    }

    return;
  }

  setShowShareMenu(true);
}
async function downloadCard() {
  console.log("DOWNLOAD BUTTON CLICKED");

  if (!cardRef.current) {
    console.error("Card reference is missing.");
    return;
  }

  try {
    setDownloading(true);

    console.log("Generating image...");

    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: "#050505",
      scale: 2,
      useCORS: true,

      onclone: (clonedDocument) => {
        const actions =
          clonedDocument.querySelector(".wrapped-actions");

        const shareMenu =
          clonedDocument.querySelector(".share-menu");

        if (actions) {
          actions.style.display = "none";
        }

        if (shareMenu) {
          shareMenu.style.display = "none";
        }
      },
    });

    console.log("Canvas generated.");

    canvas.toBlob((blob) => {
      if (!blob) {
        console.error("Could not create PNG.");
        return;
      }

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;
      link.download = `${username}-gitwrapped.png`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);

      console.log("Download triggered.");
    }, "image/png");

  } catch (error) {
    console.error("DOWNLOAD ERROR:", error);

  } finally {
    setDownloading(false);
  }
}
function shareToWhatsApp() {
  const text = encodeURIComponent(
    `My GitWrapped says I'm ${
      personality?.title || "THE CODE EXPLORER"
    } 💿\n\n${shareUrl}`
  );

  window.open(
    `https://wa.me/?text=${text}`,
    "_blank",
    "noopener,noreferrer"
  );
}

function shareToLinkedIn() {
  const url = encodeURIComponent(shareUrl);

  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    "_blank",
    "noopener,noreferrer"
  );
}

function shareToX() {
  const text = encodeURIComponent(
    `My GitWrapped says I'm ${
      personality?.title || "THE CODE EXPLORER"
    } 💿`
  );

  const url = encodeURIComponent(shareUrl);

  window.open(
    `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    "_blank",
    "noopener,noreferrer"
  );
}

function shareToFacebook() {
  const url = encodeURIComponent(shareUrl);

  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    "_blank",
    "noopener,noreferrer"
  );
}
  return (
    <main className="final-wrapped-screen crt-screen">

      <div className="final-wrapped-card " ref={cardRef}>

        <p className="wrapped-top-label">
          GITWRAPPED_OS // FINAL REPORT
        </p>

        <div className="wrapped-logo">
          GIT<span>WRAPPED</span>
        </div>

        <p className="wrapped-user">
          @{username}
        </p>

        <div className="wrapped-divider">
          ◆ ◆ ◆
        </div>

        <p className="wrapped-eyebrow">
          YOUR DEVELOPER IDENTITY
        </p>

        <h1 className="wrapped-title">
          {personality?.title || "THE CODE EXPLORER"}
        </h1>

        <p className="wrapped-vibe">
          {personality?.vibe || "MYSTERIOUS"}
        </p>

        <p className="wrapped-description">
          {personality?.description ||
            "Your coding identity remains classified."}
        </p>

        <div className="wrapped-stats">

          <div className="wrapped-stat">
            <span>{analytics.totalContributions || 0}</span>
            <small>CONTRIBUTIONS</small>
          </div>

          <div className="wrapped-stat">
            <span>{analytics.repositoryCount || 0}</span>
            <small>REPOSITORIES</small>
          </div>

          <div className="wrapped-stat">
            <span>{analytics.languageCount || 0}</span>
            <small>LANGUAGES</small>
          </div>

          <div className="wrapped-stat">
            <span>{analytics.longestStreak || 0}</span>
            <small>LONGEST STREAK</small>
          </div>

        </div>

        {finalRoast && (
          <div className="wrapped-roast">

            <p className="roast-label">
              {finalRoast.headline}
            </p>

            <p className="roast-text">
              "{finalRoast.roast}"
            </p>

            <p className="roast-closing">
              {finalRoast.closing}
            </p>

          </div>
        )}

       <div className="wrapped-actions">

  <button
    className="wrapped-action-button"
    onClick={copyShareLink}
  >
    {copied ? "[ LINK COPIED ✓ ]" : "[ COPY LINK ]"}
  </button>

  <button
    className="wrapped-action-button primary"
    onClick={shareWrapped}
  >
    [ SHARE YOUR LORE ]
  </button>
  <button
  className="wrapped-action-button"
  onClick={downloadCard}
  disabled={downloading}
>
  {downloading
    ? "[ GENERATING... ]"
    : "[ DOWNLOAD CARD ]"}
</button>

</div>
{showShareMenu && (
  <div className="share-menu">

    <div className="share-menu-header">
      <span>GITWRAPPED // SHARE PROTOCOL</span>

      <button
        className="share-close"
        onClick={() => setShowShareMenu(false)}
      >
        ×
      </button>
    </div>

    <p className="share-menu-title">
      SHARE YOUR LORE
    </p>

    <div className="share-options">

      <button onClick={shareToWhatsApp}>
        [ WHATSAPP ]
      </button>

      <button onClick={shareToLinkedIn}>
        [ LINKEDIN ]
      </button>

      <button onClick={shareToX}>
        [ X ]
      </button>

      <button onClick={shareToFacebook}>
        [ FACEBOOK ]
      </button>

    </div>

    <button
      className="share-copy-button"
      onClick={copyShareLink}
    >
      {copied ? "[ LINK COPIED ✓ ]" : "[ COPY LINK ]"}
    </button>

  </div>
)}

<div className="wrapped-footer">

  <span>
    GITWRAPPED // REPORT COMPLETE
  </span>

  <span>
    {shareId}
  </span>

</div>

      </div>

    </main>
  );
}

export default FinalWrappedScreen;