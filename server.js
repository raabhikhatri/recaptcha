const express = require('express');
const CaptchaGenerator = require('captcha-generator');
const app = express();
const port = 3000;

let currentCaptcha = '';

app.use(express.json());
app.use(express.static('public')); // Serve static files like HTML, CSS, JS

// Endpoint to generate captcha
app.post('/generate-captcha', (req, res) => {
  const captcha = CaptchaGenerator.generate();
  currentCaptcha = captcha.text; // Save captcha for verification later
  res.json({
    captcha: captcha.buffer.toString('base64'), // Sending captcha image as base64
  });
});

// Endpoint to verify captcha
app.post('/verify-captcha', (req, res) => {
  const { userInput } = req.body;
  
  if (userInput === currentCaptcha) {
    res.json({ success: true, message: "Captcha verified successfully!" });
  } else {
    res.json({ success: false, message: "Incorrect captcha." });
  }
});

app.listen(port, () => {
  console.log(`Captcha API running at http://localhost:${port}`);
});
