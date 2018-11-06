const router = require("express").Router();
const ServicesController = require("../../controller/ServiceController");

// Matches with "/api/Services"
router.route("/")
  .post(ServicesController.find)

router.route('/add')
  .post(ServicesController.create)
  

// Matches with "/api/Services/:id"
router.route("/:id")
.post(ServicesController.delete)

module.exports = router;