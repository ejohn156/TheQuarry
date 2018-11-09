const router = require("express").Router();
const jobsRoutes = require("./Jobs");
const servicesRoutes = require('./Services')
const profilesRoutes = require("./Profiles")

router.use("/jobs", jobsRoutes);
router.use("/services", servicesRoutes);
router.use("/profiles", profilesRoutes);


module.exports = router;