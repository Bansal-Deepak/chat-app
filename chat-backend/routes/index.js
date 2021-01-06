const { router: authRouter } = require("./auth");
const router = require("express").Router();
router.get("/home", (req, res) => {
  res.send("home");
});
router.use("/", authRouter);
module.exports = {
  router,
};
