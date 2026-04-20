// Direct import ensures the data is bundled into the function
import productsData from "../data/products.json";

export default function handler(req, res) {
  try {
    const { q, category, min, max } = req.query;
    
    // productsData is already a JS object because of the import
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
    console.error("Backend Error:", error);
    return res.status(500).json({ error: "Server encountered an error processing data." });
  }
}