const router = require("express").Router();
const ServicesController = require("../../controller/ServiceController");

// Matches with "/api/Services"
router.route("/")
  .get(ServicesController.find)
  router.route("/:id")
  .get(ServicesController.findUsersServices)
  router.route("/filter/:filter")
  .get(ServicesController.findFiltered)
  
router.route('/add')
  .post(ServicesController.create)
  
router.route('/update/:id')
  .post(ServicesController.update)

router.route('/:id')
  .get(ServicesController.findById)

router.route("/delete/:id")
.post(ServicesController.delete)

module.exports = router;