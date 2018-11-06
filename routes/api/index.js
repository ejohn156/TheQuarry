const router = require("express").Router();
const venuesRoutes = require("./jobs");
const dressesRoutes = require('./services')
const usersRoutes = require("./Users")

router.use("/jobs", venuesRoutes);
router.use("/services", dressesRoutes);
router.use("/users", usersRoutes);


module.exports = router;