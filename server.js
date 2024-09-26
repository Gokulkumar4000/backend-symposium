const cors = require('cors');
const express = require('express');
const app = express();

// Allow requests only from your Netlify frontend domain
const corsOptions = {
  origin: 'https://symposium-2024.netlify.app', // Replace with your Netlify frontend URL
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions)); // Use CORS with specific options
app.use(express.json());

app.post('/generate-upi-link', (req, res) => {
  const { amount } = req.body;

  const upiId = 'jmahagurunath2004@okicici';
  const name = 'Gokul';
  const lockedAmount = '1.00'; // Locked amount

  const upiLink = `upi://pay?pa=${upiId}&pn=${name}&am=${lockedAmount}&cu=INR&tn=Event+Registration+Fees`;
  res.json({ upiLink });
});

// Use the dynamic PORT or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
