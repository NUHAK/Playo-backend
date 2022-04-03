const express = require("express");
const router = express.Router();
const {
  getAllDistricts,
  setDistricts,
  getDistrict,
  deleteDistrict,
} = require("../controllers/districtController");

router.get("/", getAllDistricts);
router.get("/:id", getDistrict);
router.post("/", setDistricts);
router.patch("/:id", deleteDistrict);

module.exports = router;
