const express = require("express");
const router = express.Router();
const controller = require("controller");

router.get("/upgrades", controller.getUpgrades);
router.post("/upgrades", controller.createUpgrade);
router.put("/upgrades/:id", controller.updateUpgrade);
router.delete("/upgrades/:id", controller.deleteUpgrade);

module.exports = router;