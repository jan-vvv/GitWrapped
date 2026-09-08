async function getContributionCalendar(username) {
  const query = `
    query ($username: String!){
     user(login: $username){
      contributionsCollection{
       contributionCalendar{
        totalContributions
        weeks{
        contributionDays{
         date 
         contributionCount
         }
        }
       }
      }
     }
    }
     `;

  const response = await fetch(
    "https://api.github.com/graphql",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables:{
         username,
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      `GitHub GraphQL API error: ${response.status}`
    );
  }

  const data = await response.json();

  if (data.errors) {
    console.error("GraphQL errors:", data.errors);

    throw new Error(
      "GitHub GraphQL returned an error."
    );
  }

  const calendar =
    data.data.user.contributionsCollection.contributionCalendar;

  const contributionDays = calendar.weeks.flatMap(
    (week) => week.contributionDays
  );

  return contributionDays;
}

module.exports = {
  getContributionCalendar,
};