const router = require("express").Router();
const UsersController = require("../../controller/UserController");


router.route("/")
  .post(UsersController.create)
  

// Matches with "/api/Decors/:id"
router.route("/:id")
.get(UsersController.findById)

module.exports = router;