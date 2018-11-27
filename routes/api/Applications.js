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

router.route('/:id')
  .get(ApplicationController.findById)

router.route("/delete/:id")
.post(ApplicationController.delete)

module.exports = router;