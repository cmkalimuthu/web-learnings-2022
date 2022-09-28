const express = require("express");
const passport = require("passport");
const router = express.Router();

//@desc Auth with google
//@desc GET /auth/google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
    prompt: "select_account",
  })
);

//@desc google auth callback
//@desc GET /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

//@desc logout user
//@desc GET /auth/logout
router.get("/logout", (req, res, next) => {
  req.logout({}, () => {
    req.session.destroy();
    res.clearCookie("connect.sid");
    res.redirect("/");
  });
});

module.exports = router;
