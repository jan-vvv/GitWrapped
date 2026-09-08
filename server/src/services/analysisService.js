function analyzeRepositories(repositories) {
  const repositoryCount = repositories.length;

  const totalStars = repositories.reduce(
    (total, repo) => total + repo.stargazers_count,
    0
  );

  const totalForks = repositories.reduce(
    (total, repo) => total + repo.forks_count,
    0
  );

  const repositoriesWithLanguages = repositories.filter(
    (repo) => repo.language !== null
  );

  const languageCounts = {};

  repositoriesWithLanguages.forEach((repo) => {
    const language = repo.language;

    if (languageCounts[language]) {
      languageCounts[language]++;
    } else {
      languageCounts[language] = 1;
    }
  });

  let topLanguage = null;
  let highestLanguageCount = 0;

  for (const language in languageCounts) {
    if (languageCounts[language] > highestLanguageCount) {
      highestLanguageCount = languageCounts[language];
      topLanguage = language;
    }
  }

  const languageBreakdown = Object.entries(languageCounts)
  .map(([language,count])=>({
    language,
    count,
    percentage: Math.round(
      (count / repositoriesWithLanguages.length)* 100
    )
  }))
  .sort((a,b)=> b.count -a.count);
  const languageCount =
  languageBreakdown.length;  

  const mostPopularRepository =
  [...repositories].sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  )[0] || null;

const popularRepositoryData = mostPopularRepository
  ? {
      name: mostPopularRepository.name,
      stars: mostPopularRepository.stargazers_count,
      forks: mostPopularRepository.forks_count,
      language: mostPopularRepository.language,
      url: mostPopularRepository.html_url
    }
  : null;

return {
  repositoryCount,
  totalStars,
  totalForks,
  topLanguage,
  languageBreakdown,
  languageCount,
  mostPopularRepository: popularRepositoryData
};
}
function formatHour( hour){
  if( hour == null ){
    return null ;
  }

  const suffix = hour >= 12 ? "PM":"AM";
  const displayHour = hour % 12 || 12 ; 

  return `${displayHour} ${suffix}`;
}

function formatDay(day){
  if( day === null){
    return null ;
  }

  const days = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday"
  ];
  return days[day];
}

function analyzeCodingHabits(commitResults) {
  const commits = commitResults.flatMap(
    (repo) => repo.commits
  );

  const hourCounts = {};
  const dayCounts = {};

  for (const commit of commits) {
    const date = new Date(
      commit.commit.author.date
    );

    const hour = date.getHours();
    const day = date.getDay();

    hourCounts[hour] =
      (hourCounts[hour] || 0) + 1;

    dayCounts[day] =
      (dayCounts[day] || 0) + 1;
  }

  // Find most active hour
  let mostActiveHour = null;
  let highestHourCount = 0;

  for (const hour in hourCounts) {
    if (hourCounts[hour] > highestHourCount) {
      highestHourCount = hourCounts[hour];
      mostActiveHour = Number(hour);
    }
  }

  // Find most active day
  let mostActiveDay = null;
  let highestDayCount = 0;

  for (const day in dayCounts) {
    if (dayCounts[day] > highestDayCount) {
      highestDayCount = dayCounts[day];
      mostActiveDay = Number(day);
    }
  }

  return {
    totalCommits: commits.length,
    mostActiveHour,
    mostActiveHourFormatted: formatHour( mostActiveHour),
    mostActiveDay,
    mostActiveDayFormatted: formatDay(mostActiveDay)
  };
}

function calculateLongestStreak(contributionDays) {
  const sortedDays = [...contributionDays].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  let currentStreak = 0;
  let longestStreak = 0;

  for (const day of sortedDays) {
    if (day.contributionCount > 0) {
      currentStreak++;

      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }
    } else {
      currentStreak = 0;
    }
  }

  return longestStreak;
}
function calculateCurrentStreak(contributionDays) {
  const sortedDays = [...contributionDays].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  let currentStreak = 0;

  for (const day of sortedDays) {
    if (day.contributionCount > 0) {
      currentStreak++;
    } else {
      break;
    }
  }

  return currentStreak;
}

function analyzeActivity(contributionDays){
  const totalContributions=contributionDays.reduce(
    (total,day)=>total + day.contributionCount,
    0
  );
  const activeDays = contributionDays.filter(
    (day)=> day.contributionCount > 0 
  ).length;

  const consistencyScore = Math.round(
    (activeDays/contributionDays.length)*100
  );
  const longestStreak = calculateLongestStreak(contributionDays);
  const currentStreak = calculateCurrentStreak(contributionDays);

  const dayCounts = {};

  for( const day of contributionDays){
    if( day.contributionCount == 0 ){
      continue;
    }

    const date = new Date( day.date);
    const dayOfWeek = date.getUTCDay();

    dayCounts[dayOfWeek]=
    (dayCounts[dayOfWeek] || 0)+
    day.contributionCount;
  }

  let mostActiveDay = null;
  let highestContributionCount = 0 ; 
  
  for( const day in dayCounts){
    if(dayCounts[day] > highestContributionCount){
      highestContributionCount = dayCounts[day];
      mostActiveDay = Number(day);
    }
  }
const dayNames = [
"Sunday",
"Monday",
 "Tuesday",
 "Wednesday",
"Thursday",
"Friday",
  "Saturday",
];

return{
   totalContributions,
   activeDays, 
   totalContributions,
   longestStreak , 
   currentStreak,
   mostActiveDay:
     mostActiveDay == null 
       ? null 
       :dayNames[mostActiveDay]
};
}


module.exports = {
  analyzeRepositories,
  analyzeCodingHabits,
  calculateLongestStreak,
  calculateCurrentStreak,
  analyzeActivity,
};