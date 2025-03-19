const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow frontend requests

const API_KEY = 'YOUR_API_KEY'; // 🔹 Replace with your MailboxLayer API Key

app.get('/check-email', async (req, res) => {
    const email = req.query.email;
    try {
        const response = await axios.get(`https://api.mailboxlayer.com/check?access_key=${API_KEY}&email=${email}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'API request failed', details: error.message });
    }
});

app.listen(3000, () => console.log('✅ Server running on port 3000'));
