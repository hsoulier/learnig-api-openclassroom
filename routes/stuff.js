const express = require("express")
const router = express.Router()

const stuffController = require("../controllers/stuff")
const auth = require("../middlewares/auth")
const multer = require("../middlewares/multer-config")

router.get("/", auth, stuffController.getAllThing)
router.get("/:id", auth, stuffController.getOneThing)
router.post("/", auth, multer, stuffController.createThing)
router.put("/:id", auth, multer, stuffController.modifyThing)
router.delete("/:id", auth, stuffController.deleteThing)

module.exports = router
