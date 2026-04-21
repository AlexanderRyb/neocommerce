const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    // This finds the root of your project on Vercel
    const root = process.cwd();
    const filePath = path.join(root, 'data', 'productList.json');

    // Read the file manually
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const productsData = JSON.parse(jsonData);

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
    // This will help us see the actual error in the Direct Hit
    return res.status(500).json({ 
      error: "Invocation Failed", 
      message: error.message,
      stack: error.stack
    });
  }
};