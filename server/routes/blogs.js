const router = require("express").Router();
const controller = require("../controllers/blogs");

router.post("/", controller.add);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
router.get("/:id", controller.getSingle);
router.get("/", controller.getMany);
router.put("/like/:id", controller.like);
router.put("/rating/:id", controller.rating);

module.exports = router;
