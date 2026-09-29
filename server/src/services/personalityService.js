function getLanguagePersonality(language) {
  const personalities = {
    JavaScript: {
      title: "THE CHAOS ALCHEMIST",

      description:
        "You don't write bugs. You accidentally invent new forms of life.",

      vibe: "CHAOTIC GOOD",

      roast:
        "You said 'one tiny fix' and somehow lost three hours.",

      sideEffects: [
        "14 tabs open at all times",
        "console.log is a lifestyle",
        "Somehow... it works",
      ],

      tags: [
        "Flexible",
        "Unpredictable",
        "It works somehow",
      ],
    },

    TypeScript: {
      title: "THE RESPONSIBLE CHAOS AGENT",

      description:
        "You looked at JavaScript and decided it needed supervision.",

      vibe: "CONTROLLED CHAOS",

      roast:
        "You love JavaScript, you just need it to behave itself.",

      sideEffects: [
        "Types everywhere",
        "Red squiggle anxiety",
        "Trust issues",
      ],

      tags: [
        "Structured",
        "Type-safe",
        "Trust issues",
      ],
    },

    Python: {
      title: "THE VIBE WIZARD",

      description:
        "Why write 40 lines when Python lets you get away with 4?",

      vibe: "EFFORTLESS ENERGY",

      roast:
        "You automated the boring part before anyone asked you to.",

      sideEffects: [
        "One script fixes everything",
        "Libraries are the answer",
        "Readability propaganda",
      ],

      tags: [
        "Automation",
        "Simple",
        "Magic",
      ],
    },

    "C++": {
      title: "THE PERFORMANCE GOBLIN",

      description:
        "You don't ask if it works. You ask how much faster it can be.",

      vibe: "OPTIMIZATION OBSESSED",

      roast:
        "The program was already fast. You optimized it anyway.",

      sideEffects: [
        "Pointers everywhere",
        "Speed is a personality trait",
        "Memory is now your problem",
      ],

      tags: [
        "Speed",
        "Pointers",
        "Pain",
      ],
    },

    C: {
      title: "THE ANCIENT ONE",

      description:
        "While everyone else has abstractions, you're negotiating directly with memory.",

      vibe: "RAW POWER",

      roast:
        "You don't use abstractions. You ARE the abstraction.",

      sideEffects: [
        "Pointers",
        "Manual memory",
        "Respect the segmentation fault",
      ],

      tags: [
        "Pointers",
        "Memory",
        "Respect",
      ],
    },

    Java: {
      title: "THE ENTERPRISE SURVIVOR",

      description:
        "You don't just build software. You construct an entire ecosystem around it.",

      vibe: "SERIOUS BUSINESS",

      roast:
        "You could have written ten lines. Somehow there are four classes involved.",

      sideEffects: [
        "Everything is an object",
        "Architecture first",
        "Semicolon discipline",
      ],

      tags: [
        "Classes",
        "Architecture",
        "Battle-tested",
      ],
    },

    Rust: {
      title: "THE BORROW CHECKER WARRIOR",

      description:
        "You have stared into the borrow checker and refused to blink.",

      vibe: "PRECISION MODE",

      roast:
        "You survived the borrow checker and now nothing can hurt you.",

      sideEffects: [
        "Ownership debates",
        "Memory safety",
        "Compiler arguments",
      ],

      tags: [
        "Ownership",
        "Safety",
        "Fearless",
      ],
    },

    Go: {
      title: "THE MINIMALIST",

      description:
        "You saw unnecessary complexity and chose violence.",

      vibe: "KEEP IT SIMPLE",

      roast:
        "You saw a complicated solution and immediately deleted half of it.",

      sideEffects: [
        "Simple APIs",
        "Fast builds",
        "No nonsense",
      ],

      tags: [
        "Simple",
        "Fast",
        "No nonsense",
      ],
    },

    Ruby: {
      title: "THE ELEGANT WIZARD",

      description:
        "Your code should read like poetry. Please don't ruin the vibe.",

      vibe: "ARTISTIC",

      roast:
        "You could have written ten lines. Ruby let you flex with three.",

      sideEffects: [
        "Elegant syntax",
        "Expressive code",
        "Probably overthinking the beauty",
      ],

      tags: [
        "Elegant",
        "Expressive",
        "Clean",
      ],
    },

    PHP: {
      title: "THE WEB VETERAN",

      description:
        "You've seen things on the internet that newer developers aren't ready for.",

      vibe: "SURVIVOR",

      roast:
        "You have witnessed web development in several historical eras.",

      sideEffects: [
        "Legacy systems",
        "Web instincts",
        "Battle scars",
      ],

      tags: [
        "Web",
        "Legacy",
        "Battle scars",
      ],
    },

    Swift: {
      title: "THE APPLE DISCIPLE",

      description:
        "Your code has standards. Your phone probably does too.",

      vibe: "POLISHED",

      roast:
        "Your code is clean. Your Apple ecosystem bill is not.",

      sideEffects: [
        "iOS energy",
        "Clean interfaces",
        "Apple ecosystem",
      ],

      tags: [
        "iOS",
        "Clean",
        "Premium",
      ],
    },

    Kotlin: {
      title: "THE ANDROID ROMANTIC",

      description:
        "You wanted Java, but with fewer emotional complications.",

      vibe: "MODERN",

      roast:
        "You wanted Java. You just wanted Java with better vibes.",

      sideEffects: [
        "Android",
        "Null safety",
        "Modern syntax",
      ],

      tags: [
        "Android",
        "Modern",
        "Practical",
      ],
    },

    HTML: {
      title: "THE DIV COLLECTOR",

      description:
        "You looked at a blank page and decided it needed structure.",

      vibe: "FOUNDATIONAL ENERGY",

      roast:
        "One more div won't hurt. You said, confidently, 46 divs ago.",

      sideEffects: [
        "Nested divs",
        "Semantic maybe",
        "CSS will fix it",
      ],

      tags: [
        "Structure",
        "Web",
        "Div energy",
      ],
    },

    CSS: {
      title: "THE PIXEL ALCHEMIST",

      description:
        "You said 'I'll just tweak one thing' and three hours later nothing is aligned.",

      vibe: "VISUAL CHAOS",

      roast:
        "You spent 40 minutes centering one thing. It is finally centered.",

      sideEffects: [
        "Pixel perfectionism",
        "Why is margin doing this?",
        "One more tweak",
      ],

      tags: [
        "Pixels",
        "Alignment",
        "One more tweak",
      ],
    },
  };

  return (
    personalities[language] || {
      title: "THE CODE MYSTIC",

      description:
        "Your language remains classified. Even GitWrapped is intrigued.",

      vibe: "MYSTERIOUS",

      roast:
        "Your stack is so mysterious that even GitWrapped needs clearance.",

      sideEffects: [
        "Unknown technology",
        "Highly classified",
        "Suspicious activity",
      ],

      tags: [
        "Unknown",
        "Interesting",
        "Suspicious",
      ],
    }
  );
}


function getDeveloperPersonality(analytics) {
  const {
    repositoryCount,
    totalContributions,
    longestStreak,
    currentStreak,
    languageCount,
    consistencyScore,
    mostActiveDay,
  } = analytics;

  let personality;

  // 1. GRIND MACHINE
  if (
    longestStreak >= 30 &&
    totalContributions >= 500
  ) {
    personality = {
      title: "THE GRIND MACHINE",
      vibe: "LOCKED IN",

      description:
        "You didn't code this year. You clocked in.",

      sentence:
        "You are sentenced to one more commit.",
      
      tags: [
        "Consistent",
        "Committed",
        "Absolutely cooked",
      ],
    };
  }

  // 2. CONSISTENCY MACHINE
  else if (
    consistencyScore >= 20 &&
    longestStreak >= 14
  ) {
    personality = {
      title: "THE CONSISTENCY MACHINE",
      vibe: "STEADY POWER",

      description:
        "You don't need dramatic coding marathons. You just keep showing up.",

      sentence:
        "You are sentenced to maintaining the streak.",

      tags: [
        "Reliable",
        "Persistent",
        "Always here",
      ],
    };
  }

  // 3. STACK COLLECTOR
  else if (
    languageCount >= 4 &&
    totalContributions >= 20
  ) {
    personality = {
      title: "THE STACK COLLECTOR",
      vibe: "POLYGLOT ENERGY",

      description:
        "You don't have a tech stack. You have a Pokémon collection.",

      sentence:
        "You are sentenced to finishing one project before starting another.",

      tags: [
        "Curious",
        "Multi-stack",
        "Still collecting",
      ],
    };
  }

  // 4. CHAOS ALCHEMIST
  else if (
    repositoryCount >= 15 &&
    totalContributions >= 200
  ) {
    personality = {
      title: "THE CHAOS ALCHEMIST",
      vibe: "CHAOTIC ENERGY",

      description:
        "You have projects inside projects. Somewhere in there is a masterpiece.",

      sentence:
        "You are sentenced to organizing your repositories.",

      tags: [
        "Experimental",
        "Curious",
        "Project hoarder",
      ],
    };
  }

  // 5. CODE EXPLORER
  else {
    personality = {
      title: "THE CODE EXPLORER",
      vibe: "EXPLORATION MODE",

      description:
        "You're still figuring out your developer identity. Honestly? That's half the fun.",

      sentence:
        "You are sentenced to keep experimenting.",

      tags: [
        "Curious",
        "Learning",
        "In progress",
      ],
    };
  }

  // -----------------------------
  // BUILD THE TRIBUNAL CHARGES
  // -----------------------------

  const charges = [];

  // Charge 1: language hoarding
  if (languageCount >= 4) {
    charges.push({
      title: "TECHNOLOGY HOARDING",
      description:
        `${languageCount} languages detected. The defendant has refused to choose a stack.`,
    });
  }

  // Charge 2: repository spawning
  if (repositoryCount >= 5) {
    charges.push({
      title: "REPOSITORY SPAWNING",
      description:
        `${repositoryCount} repositories discovered. Authorities suspect "one more project" syndrome.`,
    });
  }

  // Charge 3: consistency
  if (consistencyScore < 10) {
    charges.push({
      title: "DISAPPEARING ACT",
      description:
        `${consistencyScore}% consistency detected. The defendant appears periodically.`,
    });
  } else if (consistencyScore >= 20) {
    charges.push({
      title: "STREAK ABUSE",
      description:
        `${consistencyScore}% consistency recorded. The defendant keeps coming back.`,
    });
  } else {
    charges.push({
      title: "CASUAL CODING",
      description:
        `${consistencyScore}% consistency recorded. Presence: occasional.`,
    });
  }

  // Charge 4: streak
  if (longestStreak >= 30) {
    charges.push({
      title: "EXTREME STREAK BEHAVIOR",
      description:
        `${longestStreak} consecutive days. Please remember the outside world exists.`,
    });
  } else if (longestStreak >= 7) {
    charges.push({
      title: "STREAK ACTIVITY",
      description:
        `${longestStreak} days in a row. The combo was getting serious.`,
    });
  } else {
    charges.push({
      title: "SHORT-TERM COMMITMENT",
      description:
        `${longestStreak} day longest streak. The combo barely had time to begin.`,
    });
  }

  // Charge 5: favorite day
  if (mostActiveDay) {
    charges.push({
      title: `${mostActiveDay.toUpperCase()} BEHAVIOR`,
      description:
        `Peak activity detected on ${mostActiveDay}. The evidence is suspicious.`,
    });
  }

  // We only want 3 charges on the actual card
  const selectedCharges = charges.slice(0, 3);

  return {
    ...personality,
    charges: selectedCharges,
    verdict: "GUILTY",
  };
}

module.exports = {
  getLanguagePersonality,
  getDeveloperPersonality,
};