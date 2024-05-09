const express = require("express");
const router = express.Router();

const { verifyToken } = require("../auth/auth");
const { invoiceStatus } = require("../database/invoiceStatus");

router.get("/:id", invoiceStatus);

module.exports = router;