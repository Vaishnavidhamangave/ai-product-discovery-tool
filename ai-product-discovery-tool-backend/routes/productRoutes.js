const express = require("express");
const {
  getAllProducts,
  getProductById,
  logAnalytics,
  askChatAssistant
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/analytics", logAnalytics);
router.post("/chat", askChatAssistant);

module.exports = router;
