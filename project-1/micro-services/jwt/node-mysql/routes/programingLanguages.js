const express = require("express");
const router = express.Router();
const getPrograms = require("../service/getPrograms");
router.get("/", async (req, res, next) => {
  console.log("Request navigating to getPrograms file");
  try {
    const programs = await getPrograms.getMultiple(req.query.page);
    console.log("program service call success ");
    if (programs != undefined) {
      res.json(programs);
    } else {
      console.log("something went wrong in data retrieval");
      res.statusCode(500);
      res.json({ message: "err while data retriveal" });
    }
  } catch (err) {
    console.log("err while calling getPrograms " + err);
    next(err);
  }
});

module.exports = router;
