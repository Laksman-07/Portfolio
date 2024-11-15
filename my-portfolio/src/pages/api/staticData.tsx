import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Path to the JSON file in the public folder
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);

    // Send the JSON data as a response
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

export default handler;
