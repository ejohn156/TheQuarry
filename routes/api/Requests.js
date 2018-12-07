const router = require("express").Router();
const RequestController = require("../../controller/RequestController");


router.route("/")
  .get(RequestController.find)
  
router.route("/:filter")
  .get(RequestController.findFiltered)
  
 router.route('/add')
 .post(RequestController.create)

router.route('/update/:id')
  .post(RequestController.update)

router.route('/:id')
  .get(RequestController.findById)

router.route("/delete/:id")
.post(RequestController.delete)

router.route("/decline/:id")
.post(RequestController.decline)

router.route("/accept/:id")
.post(RequestController.accept)

router.route('/recipient/:id')
  .get(RequestController.findReceivedRequests)

module.exports = router;