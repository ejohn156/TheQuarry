const router = require("express").Router();
const UsersController = require("../../controller/UserController");


router.route("/")
  .get(UsersController.find)

router.route('/add')
  .post(UsersController.create)
  
router.route('/update/:id')
  .post(UsersController.update)

router.route('/:id')
  .get(UsersController.findById)

router.route("/delete/:id")
.post(UsersController.delete)

module.exports = router;