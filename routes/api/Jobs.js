const router = require("express").Router();
const JobsController = require("../../controller/JobController");

// Matches with "/api/Jobs"
router.route("/")
  .post(JobsController.find)

router.route('/add')
  .post(JobsController.create)
  

// Matches with "/api/Jobs/:id"
router.route("/:id")
.post(JobsController.delete)

module.exports = router;