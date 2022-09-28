const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middlewares/auth");
const Story = require("../models/Story");

//@desc show add page
//@desc GET /stories/add
router.get("/add", ensureAuth, (req, res, next) => {
  res.render("stories/add");
});

//@desc process add form
//@desc POST /stories
router.post("/", ensureAuth, async (req, res, next) => {
  try {
    req.body.user = req.user.id;
    await Story.create(req.body);
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
    res.render("error/500");
  }
});

//@desc show all stories
//@desc GET /stories
router.get("/", ensureAuth, async (req, res, next) => {
  try {
    const stories = await Story.find({ status: "public" })
      .populate("user")
      .sort({ createdAt: "desc" })
      .lean();
    res.render("stories/index", { stories });
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

//@desc show story by id
//@desc GET /stories/:id
router.get("/:id", ensureAuth, async(req, res, next) => {
  try {
    let story=await  Story.findById(req.params.id).populate('user').lean()
    if(!story){
        res.render("error/404");
    }
    res.render("stories/show",{story});
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

//@desc show edit page
//@desc GET /stories/edit/:id
router.get("/edit/:id", ensureAuth, async (req, res) => {
  try {
    const story = await Story.findOne({ _id: req.params.id }).lean();
    if (!story) {
      res.render("error/404");
    }
    if (story.user.toString() !== req.user.id.toString()) {
      res.redirect("/stories");
    } else {
      res.render("stories/edit", { story });
    }
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

//@desc update story
//@desc PUT /stories/:id
router.put("/:id", ensureAuth, async (req, res, next) => {
  try {
    let story = await Story.findById({ _id: req.params.id }).lean();
    if (!story) {
      res.render("error/404");
    }
    if (story.user.toString() !== req.user.id.toString()) {
      res.redirect("/stories");
    } else {
      story = await Story.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
      });
      res.redirect("/dashboard");
    }
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

//@desc delete story
//@desc DELETE /stories/:id
router.delete("/:id", ensureAuth, async (req, res, next) => {
  try {
    let story = await Story.findById({ _id: req.params.id }).lean();
    if (!story) {
      res.render("error/404");
    }
    if (story.user.toString() !== req.user.id.toString()) {
      res.redirect("/stories");
    } else {
      await Story.remove({ _id: req.params.id });
      res.redirect("/dashboard");
    }
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

//@desc show all stories from specific user
//@desc GET /stories/user/:userdId
router.get("/user/:userId", ensureAuth, async(req, res, next) => {
   try {
     const stories=await Story.find({user:req.params.userId,status:'public'}).populate('user').lean()
     if(!stories){
        res.render("error/404");
     }
     res.render('stories/index',{stories})

   } catch (error) {
    
   }
  });

module.exports = router;
