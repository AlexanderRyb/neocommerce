import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  try {
    // This looks for the file starting from the project root
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const products = JSON.parse(fileData);

    const { q, category, min, max } = req.query;
    let results = [...products];

    // search (name)
    if (q) {
      const query = q.toLowerCase();
      results = results.filter(p => p.name.toLowerCase().includes(query));
    }

    // category
    if (category && category !== "all") {
      results = results.filter(p => p.category === category);
    }

    // min price
    if (min) {
      results = results.filter(p => p.price >= Number(min));
    }

    // max price
    if (max) {
      results = results.filter(p => p.price <= Number(max));
    }

    return res.status(200).json(results);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to load products" });
  }
}