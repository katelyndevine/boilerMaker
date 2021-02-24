const router = require("express").Router();

// mounted on /api/owners

// GET request to /api/owners
router.get("/", async (req, res, next) => {
  console.log("finish writing your get owners route!");
});

module.exports = router;
