const router = require("express").Router();

// mounted on /api/puppies

// GET request to /api/puppies
router.get("/", async (req, res, next) => {
  console.log("finish writing your get pupppies route!");
});

module.exports = router;
