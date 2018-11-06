const router = require("express").Router();
const UsersController = require("../../controller/UserController");


router.route("/")
  .post(UsersController.create)
  
  router.route("/edit/:id")
  .post(UsersController.update)

// Matches with "/api/Decors/:id"
router.route("/:id")
.get(UsersController.findById)

module.exports = router;