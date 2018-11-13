const router = require("express").Router();
const ProfilesController = require("../../controller/ProfileController");


router.route("/")
  .get(ProfilesController.find)

router.route('/add')
  .post(ProfilesController.create)
  
router.route('/update/:id')
  .post(ProfilesController.update)

router.route('/:id')
  .get(ProfilesController.findById)

router.route("/delete/:id")
.post(ProfilesController.delete)

module.exports = router;