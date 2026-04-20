import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  try {
    // This moves up from /api to the root, then into /data
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    
    // Fallback check: if process.cwd() fails, try relative to __dirname
    let finalPath = filePath;
    if (!fs.existsSync(finalPath)) {
        finalPath = path.join(__dirname, '..', 'data', 'products.json');
    }

    if (!fs.existsSync(finalPath)) {
      return res.status(404).json({ 
        error: "File not found",
        attemptedPath: finalPath 
      });
    }

    const fileData = fs.readFileSync(finalPath, 'utf8');
    const products = JSON.parse(fileData);
    
    // ... your filtering logic ...
    return res.status(200).json(results);
    
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}