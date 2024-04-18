const express = require("express");
const router = express.Router();
const apiController = require("../controller/apiController");

// Routes for API

router.post("/", apiController.create); //create
router.get("/", apiController.getAll); //read
router.put("/:id", apiController.update);//update
router.get("/:systemname", apiController.getBySystemName);//search
router.get("/:description", apiController.getByDescription);//update

module.exports = router;
