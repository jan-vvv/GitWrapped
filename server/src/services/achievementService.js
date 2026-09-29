function generateAchievements(analytics) {
  const {
    totalContributions = 0,
    activeDays = 0,
    consistencyScore = 0,
    longestStreak = 0,
    currentStreak = 0,
    languageCount = 0,
    repositoryCount = 0,
    totalStars = 0,
    mostActiveDay = null,
  } = analytics;

  const achievements = [];

  // 1. POLYGLOT
  if (languageCount >= 4) {
    achievements.push({
      id: "polyglot",
      title: "POLYGLOT",
      description:
        `You speak ${languageCount} programming languages.`,
      icon: "🧬",
      rarity: "RARE",
    });
  }

  // 2. STREAK LORD
  if (longestStreak >= 14) {
    achievements.push({
      id: "streak-lord",
      title: "STREAK LORD",
      description:
        `${longestStreak} consecutive days. The combo was REAL.`,
      icon: "🔥",
      rarity: "EPIC",
    });
  }

  // 3. COMMIT MACHINE
  if (totalContributions >= 100) {
    achievements.push({
      id: "commit-machine",
      title: "COMMIT MACHINE",
      description:
        `${totalContributions} contributions recorded.`,
      icon: "⚡",
      rarity: "RARE",
    });
  }

  // 4. SIDE QUEST ENGINEER
  if (
    repositoryCount >= 5 &&
    languageCount >= 3
  ) {
    achievements.push({
      id: "side-quest",
      title: "SIDE-QUEST ENGINEER",
      description:
        `${repositoryCount} repositories and counting. You have side quests.`,
      icon: "🗺️",
      rarity: "UNCOMMON",
    });
  }

  // 5. CONSISTENCY MACHINE
  if (
    consistencyScore >= 20 &&
    longestStreak >= 14
  ) {
    achievements.push({
      id: "consistency",
      title: "CONSISTENCY MACHINE",
      description:
        `${consistencyScore}% activity consistency.`,
      icon: "📅",
      rarity: "EPIC",
    });
  }

  // 6. FIRST BLOOD
  if (totalContributions > 0) {
    achievements.push({
      id: "first-blood",
      title: "FIRST BLOOD",
      description:
        "The first contribution has been recorded.",
      icon: "🩸",
      rarity: "COMMON",
    });
  }

  // 7. REPO HOARDER
  if (repositoryCount >= 10) {
    achievements.push({
      id: "repo-hoarder",
      title: "REPO HOARDER",
      description:
        `${repositoryCount} repositories. At this point, you're collecting them.`,
      icon: "📦",
      rarity: "RARE",
    });
  }

  // 8. WEEKEND WARRIOR
  if (
    mostActiveDay === "Saturday" ||
    mostActiveDay === "Sunday"
  ) {
    achievements.push({
      id: "weekend-warrior",
      title: "WEEKEND WARRIOR",
      description:
        `Your most active day is ${mostActiveDay}.`,
      icon: "⚔️",
      rarity: "UNCOMMON",
    });
  }

  return achievements;
}

module.exports = {
  generateAchievements,
};