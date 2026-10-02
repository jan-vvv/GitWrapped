const express = require("express");

const { randomBytes } = require("node:crypto");
const Wrapped = require( "../models/Wrapped");

const {
  analyzeRepositories,
  analyzeActivity,
} = require("../services/analysisService");

const {
  getGithubUser,
  getGithubRepos,
} = require("../services/githubService");

const {
  getContributionCalendar,
} = require("../services/githubGraphqlService");

const {
  getLanguagePersonality,
  getDeveloperPersonality,
} = require("../services/personalityService");

const {
  generateAchievements,
} = require("../services/achievementService");

const {
  generateFinalRoast,
} = require("../services/roastService");

const router = express.Router();

router.post("/analyze", async (req, res) => {
  try {
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({
        message: "GitHub username is required.",
      });
    }

    // get GitHub profile
    const githubUser =
      await getGithubUser(username);

    // get repositories
    const githubRepos =
      await getGithubRepos(username);

    // analyze repositories
    const repositoryAnalysis =
      analyzeRepositories(githubRepos);

    // get contribution data from the last year
    const contributionDays =
      await getContributionCalendar(username);

    // analyze contribution activity
    const activityAnalysis =
      analyzeActivity(contributionDays);

    // generate language personality
    const languagePersonality =
      getLanguagePersonality(
        repositoryAnalysis.topLanguage
      );

    //generate developer personality
    const developerPersonality =
      getDeveloperPersonality({
        ...repositoryAnalysis,
        ...activityAnalysis,
      });

     const achievements =
     generateAchievements({
        ...repositoryAnalysis,
        ...activityAnalysis,
     });

     const finalRoast =
       generateFinalRoast({
        ...repositoryAnalysis,
        ...activityAnalysis,
    });

    //send everything back to React
const shareId =
  "gw_" + randomBytes(6).toString("hex");

  const savedWrapped = await Wrapped.create({
  shareId,

  githubUsername: githubUser.login,

  githubUserId: githubUser.id,

  githubAvatarUrl: githubUser.avatar_url,

  analytics: {
    ...repositoryAnalysis,
    ...activityAnalysis,
  },

  languagePersonality,

  developerPersonality,

  achievements,

  finalRoast,
});
    res.json({
      message: "GitHub profile found!",

      user: githubUser,
      shareId,

      analytics: {
        ...repositoryAnalysis,
        ...activityAnalysis,
        languagePersonality,
        developerPersonality,
        achievements,
        finalRoast,
      },
    });

  } catch (error) {
    console.error(
      "GitHub API error:",
      error
    );

    res.status(500).json({
      message:
        "Failed to fetch GitHub profile.",
      error: error.message,
    });
  }
});

module.exports = router;