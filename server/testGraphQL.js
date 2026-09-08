require("dotenv").config();

const {
  getContributionCalendar,
} = require("./src/services/githubGraphqlService");

const {
  analyzeRepositories,
  analyzeActivity,
} = require("./src/services/analysisService");

const {
  getLanguagePersonality,
  getDeveloperPersonality,
} = require("./src/services/personalityService");

const {
  getGithubUser,
  getGithubRepos,
} = require("./src/services/githubService");


/*async function main() {
  try {
   const contributionDays = await testGraphQL();

   const activityAnalytics = analyzeActivity(contributionDays);

   console.log(
    "Activity analytics:");

    console.log(
      JSON.stringify(
        activityAnalytics , 
        null,
        2
      )
    );
  } catch (error) {
    console.error("GraphQL test failed:");
    console.error(error.message);
  }
}*/
/*async function main(){
  try{
    const username = "octocat";
    const contributionsDays=
    await getContributionCalendar(username);

    console.log(
      "contribution days recieved:",
        contributionsDays.length
    );
    console.log(
      "first few Days:",
      contributionsDays.slice(0,5)
    );
  }catch (error){
     console.log("GraphQL test failed:");
     console.error(error.message);
  }
}*/

async function main(){
  try {
   const username = "jan-vvv";
    
    //get the github profile 
    const githubUser =
    await getGithubUser(username);
   //get repos
    const githubRepos=
    await getGithubRepos(username);
    // Analyze repos
    const repositoryAnalysis=
    analyzeRepositories(githubRepos);
    
    //contributions 
    const contributionDays =
    await getContributionCalendar(username);
    //analyze activity
    const activityAnalysis=
    analyzeActivity(contributionDays);

    //generate the personalities
    const languagePersonality=
    getLanguagePersonality(
      repositoryAnalysis.topLanguage 
    );

    const developerPersonality=
    getDeveloperPersonality({
      ...repositoryAnalysis,
      ...activityAnalysis,
    });
  
  console.log("\n=== GITWRAPPED ANALYTICS ===");

    console.log(
      JSON.stringify(
        {
          repositoryAnalysis,
          activityAnalysis,
          languagePersonality,
          developerPersonality,
        },
        null,
        2
      )
    );
  } catch (error) {
    console.error(
      "GitWrapped test failed:"
    );

    console.error(error.message);
  }
}

main();