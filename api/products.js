const productsData = require("../data/products.json");

module.exports = (req, res) => {
  try {
    const { q, category, min, max } = req.query;
    let results = [...productsData];

    if (q) {
      const query = q.toLowerCase();
      results = results.filter(p => p.name.toLowerCase().includes(query));
    }

    if (category && category !== "all") {
      results = results.filter(p => p.category === category);
    }

    if (min) {
      results = results.filter(p => p.price >= Number(min));
    }

    if (max) {
      results = results.filter(p => p.price <= Number(max));
    }

    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};