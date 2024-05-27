const { Router } = require("express")
const userRoutes = require("../routes/user.route")
const router = Router();

router.use('/users', userRoutes);
module.exports = router;