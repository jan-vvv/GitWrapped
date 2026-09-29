const {
  generateAchievements,
} = require("./src/services/achievementService");

function main() {
  const analytics = {
    totalContributions: 26,
    activeDays: 18,
    consistencyScore: 5,
    longestStreak: 4,
    currentStreak: 0,
    languageCount: 4,
    repositoryCount: 8,
    totalStars: 0,
    mostActiveDay: "Friday",
  };

  const achievements =
    generateAchievements(analytics);

  console.log(
    JSON.stringify(
      achievements,
      null,
      2
    )
  );
}

main();