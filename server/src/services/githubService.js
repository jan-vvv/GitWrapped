async function getGithubUser( username){
const response = await fetch(
    `https://api.github.com/users/${username}`,
    {
        headers:{
            Accept:"application/vnd.github+json",
            "X-Github-Api-Version":"2026-03-10"
        }
    }
);

if(!response.ok){
    throw new Error(`GitHub API error: ${response.status}`);
}

const data = await response.json();
return data;
}

async function getGithubRepos(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2026-03-10"
      }
    }
  );

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return await response.json();
}

async function getRepoCommits(owner, repo) {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/commits?per_page=100`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2026-03-10"
      }
    }
  );

  if (!response.ok) {
    throw new Error(
      `GitHub commit API error: ${response.status}`
    );
  }

  return await response.json();
}

module.exports={
    getGithubUser,
    getGithubRepos,
    getRepoCommits
};