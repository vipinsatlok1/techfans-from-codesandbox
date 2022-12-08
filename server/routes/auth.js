const auth = require("../controllers/auth");
const router = require("express").Router();

router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/me", auth.getuser);

module.exports = router;
