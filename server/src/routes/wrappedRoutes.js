const express = require("express");

const Wrapped = require("../models/Wrapped");

const router = express.Router();

router.get("/:shareId", async (req, res) => {
  try {
    const { shareId } = req.params;

    const wrapped = await Wrapped.findOne({ shareId });

    if (!wrapped) {
      return res.status(404).json({
        message: "Wrapped not found.",
      });
    }

    res.json(wrapped);

  } catch (error) {
    console.error("Error fetching Wrapped:", error);

    res.status(500).json({
      message: "Failed to fetch Wrapped.",
    });
  }
});

module.exports = router;