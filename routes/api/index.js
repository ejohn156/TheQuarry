const router = require("express").Router();
const jobsRoutes = require("./Jobs");
const servicesRoutes = require('./Services')
const usersRoutes = require("./Users")

router.use("/jobs", jobsRoutes);
router.use("/services", servicesRoutes);
router.use("/users", usersRoutes);


module.exports = router;