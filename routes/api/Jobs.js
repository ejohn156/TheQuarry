const router = require("express").Router();
const JobsController = require("../../controller/JobController");


router.route("/")
  .get(JobsController.find)
  .post(JobsController.create)

// router.route('/add')
  
  
router.route('/update/:id')
  .post(JobsController.update)

router.route('/:id')
  .get(JobsController.findById)

router.route("/delete/:id")
.post(JobsController.delete)

module.exports = router;