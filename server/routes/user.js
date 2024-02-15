const Router = require("express");
const router = new Router();
const userController = require("../controllers/user.controllers");
const authMiddleware = require("../middleWare/AuthMiddleware");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.check);
/* router.put("/update", userController.updateUser); */
/* router.delete("/delete", userController.deleteUser); */

module.exports = router;
