async function testGithub() {
  try {
    const response = await fetch("https://api.github.com/users/octocat");

    console.log("Status:", response.status);

    const data = await response.json();

    console.log("User:", data.login);
    console.log("Name:", data.name);

  } catch (error) {
    console.error("FETCH ERROR:");
    console.error(error);
  }
}

testGithub();