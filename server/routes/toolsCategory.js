const router = require("express").Router();
const controller = require("../controllers/toolsCategory");

router.post("/", controller.add);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
router.get("/:id", controller.getSingle);
router.get("/", controller.getMany);

module.exports = router;
