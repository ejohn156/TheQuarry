const router = require("express").Router();
const JobsController = require("../../controller/JobController");


router.route("/")
  .get(JobsController.find)

router.route("/:filter")
  .get(JobsController.findFiltered)
  
 router.route('/add')
 .post(JobsController.create)
  
router.route('/update/:id')
  .post(JobsController.update)

router.route('/:id')
  .get(JobsController.findById)

router.route("/delete/:id")
.post(JobsController.delete)

module.exports = router;