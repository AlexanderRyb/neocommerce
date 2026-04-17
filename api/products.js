// Using require for stability in Node environments
const products = require("../data/products.json");

export default function handler(req, res) {
  const { q, category, min, max } = req.query;
  let results = [...products];

  if (q) {
    const query = q.toLowerCase();
    results = results.filter(p => p.name.toLowerCase().includes(query));
  }
  if (category) {
    results = results.filter(p => p.category === category);
  }
  if (min) {
    results = results.filter(p => p.price >= Number(min));
  }
  if (max) {
    results = results.filter(p => p.price <= Number(max));
  }

  return res.status(200).json(results);
}