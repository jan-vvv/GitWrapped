const {
  generateFinalRoast,
} = require("./src/services/roastService");

function main() {
  const analytics = {
    repositoryCount: 8,
    totalContributions: 26,
    languageCount: 4,
    longestStreak: 4,
    consistencyScore: 5,
    currentStreak: 0,
    mostActiveDay: "Friday",
  };

  const result =
    generateFinalRoast(analytics);

  console.log(
    JSON.stringify(result, null, 2)
  );
}

main();