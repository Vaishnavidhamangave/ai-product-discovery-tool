const products = require("../data/products.json");

// GET /api/products
exports.getAllProducts = (req, res) => {
  res.json(products);
};

// GET /api/products/:id
exports.getProductById = (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ message: "Product not found" });
};

// POST /api/products/analytics
exports.logAnalytics = (req, res) => {
  console.log("📊 Analytics Logged:", req.body);
  res.status(200).json({ message: "Analytics logged successfully" });
};

// POST /api/products/chat (for AI assistant)
exports.askChatAssistant = async (req, res) => {
  const { message } = req.body;
  // Simulate ChatGPT integration
  const reply = `🤖 AI says: You asked "${message}", here’s what I think...`;
  res.json({ reply });
};
