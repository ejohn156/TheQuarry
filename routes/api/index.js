const router = require("express").Router();
const jobsRoutes = require("./Jobs");
const servicesRoutes = require('./Services');
const profilesRoutes = require("./Profiles");
const requestsRoutes = require("./Requests");
const applicationRoutes = require("./Applications");

router.use("/jobs", jobsRoutes);
router.use("/services", servicesRoutes);
router.use("/profiles", profilesRoutes);
router.use("/requests", requestsRoutes);
router.use("/applications", applicationRoutes);

module.exports = router;