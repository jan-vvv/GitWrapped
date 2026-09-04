const express = require("express");

const {
  analyzeRepositories,
  analyzeCodingHabits
} = require("../services/analysisService");

const {
  getGithubUser,
  getGithubRepos,
  getRepoCommits
} = require("../services/githubService");

const router = express.Router();

router.post("/analyze", async (req, res) => {
  try {
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({
        message: "GitHub username is required."
      });
    }

    // 1. Get GitHub profile
    const githubUser = await getGithubUser(username);

    // 2. Get repositories
    const githubRepos = await getGithubRepos(username);

    // 3. Analyze repositories
    const repositoryAnalysis = analyzeRepositories(githubRepos);

    // 4. Pick the 5 most recently updated repositories
    const recentRepos = [...githubRepos]
      .sort(
        (a, b) =>
          new Date(b.pushed_at) - new Date(a.pushed_at)
      )
      .slice(0, 5);

    // 5. Fetch commits from those repositories
    const commitResults = [];

    for (const repo of recentRepos) {
      try {
        const commits = await getRepoCommits(
          repo.owner.login,
          repo.name
        );

        commitResults.push({
          repository: repo.name,
          commits
        });

      } catch (error) {
        console.error(
          `Could not fetch commits for ${repo.name}:`,
          error.message
        );
      }
    }

    // 6. Analyze commit activity
    const codingAnalysis =
      analyzeCodingHabits(commitResults);

    // 7. Send everything back to React
    res.json({
      message: "GitHub profile found!",

      user: githubUser,

      analytics: {
        ...repositoryAnalysis,
        ...codingAnalysis
      }
    });

  } catch (error) {
    console.error("GitHub API error:", error);

    res.status(500).json({
      message: "Failed to fetch GitHub profile.",
      error: error.message
    });
  }
});

module.exports = router;