const mongoose = require("mongoose");

const wrappedSchema = new mongoose.Schema(
  {
    shareId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    githubUsername: {
      type: String,
      required: true,
    },

    githubUserId: {
      type: Number,
      required: true,
    },

    githubAvatarUrl: {
      type: String,
      default: "",
    },

    analytics: {
      totalContributions: {
        type: Number,
        default: 0,
      },

      repositoryCount: {
        type: Number,
        default: 0,
      },

      totalStars: {
        type: Number,
        default: 0,
      },

      totalForks: {
        type: Number,
        default: 0,
      },

      topLanguage: {
        type: String,
        default: "",
      },

      languageCount: {
        type: Number,
        default: 0,
      },

      languageBreakdown: {
        type: Array,
        default: [],
      },

      activeDays: {
        type: Number,
        default: 0,
      },

      consistencyScore: {
        type: Number,
        default: 0,
      },

      longestStreak: {
        type: Number,
        default: 0,
      },

      currentStreak: {
        type: Number,
        default: 0,
      },

      mostActiveDay: {
        type: String,
        default: null,
      },
    },

    languagePersonality: {
      type: Object,
      default: {},
    },

    developerPersonality: {
      type: Object,
      default: {},
    },

    achievements: {
      type: Array,
      default: [],
    },

    finalRoast: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Wrapped", wrappedSchema);