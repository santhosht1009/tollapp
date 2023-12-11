const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Use cors middleware to handle CORS headers
app.use(cors());
app.use(bodyParser.json());

// Handle preflight requests
app.options('/tollguru', cors());

app.post('/tollguru', async (req, res) => {
  try {
    const tollguruResponse = await axios.post('https://apis.tollguru.com/toll/v2/origin-destination-waypoints', req.body, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'q3mF3HTJGNFGqqJ4RT4p9rHR6b98FTn4',
      },
    });

    res.json(tollguruResponse.data);
  } catch (error) {
    console.error('Error making TollGuru API request:', error);

    // Log the error details
    console.error('Error details:', error);

    // Respond with a meaningful error message
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
