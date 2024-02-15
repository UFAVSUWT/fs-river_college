const Router = require("express");
const router = new Router();
const newsController = require("../controllers/news.controller");
const checkRole = require("../middleWare/CheckRoleMiddleware");

router.post("/", checkRole("ADMIN"), newsController.create);
router.put("/:id", checkRole("ADMIN"), newsController.editNews);
router.get("/", newsController.getAll);
router.get("/:id", newsController.getOne);
router.delete("/:id", checkRole("ADMIN"), newsController.deliteNews);

module.exports = router;
