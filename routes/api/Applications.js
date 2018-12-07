const router = require("express").Router();
const ApplicationController = require("../../controller/ApplicationController");


router.route("/")
  .get(ApplicationController.find)
  
router.route("/:filter")
  .get(ApplicationController.findFiltered)
  
 router.route('/add')
 .post(ApplicationController.create)

router.route('/update/:id')
  .post(ApplicationController.update)

router.route('/user/:id')
  .get(ApplicationController.findUsersApplications)
  
router.route('/recipient/:id')
  .get(ApplicationController.findReceivedApplications)

router.route("/delete/:id")
.post(ApplicationController.delete)

router.route("/decline/:id")
.post(ApplicationController.decline)

router.route("/accept/:id")
.post(ApplicationController.accept)

module.exports = router;