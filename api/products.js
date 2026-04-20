import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  try {
    // 1. Try to find the file
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    
    // 2. Check if file actually exists to avoid a crash
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: `File not found at ${filePath}` });
    }

    const fileData = fs.readFileSync(filePath, 'utf8');
    const products = JSON.parse(fileData);

    // ... (rest of your filtering logic) ...

    return res.status(200).json(results);
  } catch (error) {
    // This will show up in your Vercel logs
    return res.status(500).json({ error: error.message });
  }
}