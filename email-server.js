const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3003;

// Middleware
app.use(cors());
app.use(express.json());

// Gmail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'notification12457@gmail.com',
    pass: 'pupn utci ozye dsse'
  }
});

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Email server is running!' });
});

// Send email route
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: 'notification12457@gmail.com',
      to: 'debajyotiupadhayaya@gmail.com',
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully!' });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});