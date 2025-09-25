const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3003;

// Middleware
app.use(cors());
app.use(express.json());

// Gmail transporter - using environment variables for security
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'notification12457@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'pupn utci ozye dsse'
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
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_FROM || 'notification12457@gmail.com',
      to: process.env.EMAIL_TO || 'debajyotiupadhayaya@gmail.com',
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully!' });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Email server running on http://localhost:${PORT}`);
});