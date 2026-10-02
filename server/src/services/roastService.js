function generateFinalRoast(analytics) {
  const {
    repositoryCount = 0,
    totalContributions = 0,
    languageCount = 0,
    longestStreak = 0,
    consistencyScore = 0,
    currentStreak = 0,
    mostActiveDay = null,
  } = analytics;

  const lines = [];

  // Language chaos
  if (languageCount >= 4) {
    lines.push(
      `${languageCount} languages. Choosing one stack was apparently never an option.`
    );
  }

  // Repository behavior
  if (repositoryCount >= 8) {
    lines.push(
      `${repositoryCount} repositories. At this point you're collecting side quests.`
    );
  } else if (repositoryCount >= 5) {
    lines.push(
      `${repositoryCount} repositories. One more project definitely won't hurt.`
    );
  }

  // Contribution volume
  if (totalContributions >= 500) {
    lines.push(
      `${totalContributions} contributions. Your keyboard has officially filed for overtime.`
    );
  } else if (totalContributions >= 100) {
    lines.push(
      `${totalContributions} contributions. Okay, you actually showed up.`
    );
  } else if (totalContributions > 0) {
    lines.push(
      `${totalContributions} contributions. The character arc has begun.`
    );
  }

  // Consistency
  if (
    consistencyScore < 10 &&
    totalContributions > 0
  ) {
    lines.push(
      "Your coding schedule is less 'daily routine' and more 'surprise appearance'."
    );
  } else if (consistencyScore >= 50) {
    lines.push(
      "You somehow turned GitHub activity into an actual routine."
    );
  }

  // Longest streak
  if (longestStreak >= 30) {
    lines.push(
      `${longestStreak} days straight. At this point GitHub might be your second home.`
    );
  } else if (longestStreak >= 7) {
    lines.push(
      `${longestStreak}-day streak. The combo was starting to get serious.`
    );
  } else if (longestStreak > 0) {
    lines.push(
      `${longestStreak}-day streak. The combo barely had time to load.`
    );
  }

  // Current streak
  if (
    currentStreak === 0 &&
    totalContributions > 0
  ) {
    lines.push(
      "And then you vanished."
    );
  }

  // Favorite day
  if (mostActiveDay) {
    lines.push(
      `${mostActiveDay} was your favorite coding day. Apparently the calendar has lore now.`
    );
  }

  return {
    headline: "THE SYSTEM HAS DECIDED.",

    roast: lines
      .slice(0, 3)
      .join(" "),

    closing:
      "GitWrapped has seen enough. You are officially part of the lore.",
  };
}

module.exports = {
  generateFinalRoast,
};