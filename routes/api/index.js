const router = require("express").Router();
const venuesRoutes = require("./Jobs");
const dressesRoutes = require('./Services')
const usersRoutes = require("./Users")

router.use("/jobs", venuesRoutes);
router.use("/services", dressesRoutes);
router.use("/user", usersRoutes);


module.exports = router;