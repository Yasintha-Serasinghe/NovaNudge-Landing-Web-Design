const express = require('express');
import fetch from 'node-fetch';


const app = express();
const port = 3001;

app.use('/proxy', async (req, res) => {
  const imageUrl = req.query.url;

  try {
    const imageResponse = await fetch(imageUrl);

    if (!imageResponse.ok) {
      throw new Error('Image not found');
    }

    // Set Content-Disposition header to 'inline'
    res.setHeader('Content-Disposition', 'inline');
    
    // Pipe the image directly from the original server to the client
    imageResponse.body.pipe(res);
  } catch (error) {
    console.error('Error fetching image:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
