const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
  transporter.verify((error, success) => {
    if (error) {
      console.error('SMTP connection error:', error.message);
      console.error('Troubleshooting: Make sure you use a Google App Password (not your regular Gmail password) and 2-Step Verification is enabled.');
    } else {
      console.log('SMTP connection ready (emails will be sent successfully)');
    }
  });
} else {
  console.log('SMTP transporter not configured: EMAIL_USER or EMAIL_PASSWORD missing in env');
}

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Error:', err));

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

app.get('/api/portfolio', (req, res) => {
  res.json({
    name: 'Prathap B S',
    role: 'Full Stack Developer',
    bio: 'BTech CSBS student at GITAM University — building fast, beautiful, production-grade web apps with the MERN stack.',
    email: 'pbs@gitam.in',
    phone: '+91 98801 99938',
    location: 'Bengaluru, IN',
    social: {
      github: 'https://github.com/Prathap-bs',
      linkedin: 'https://www.linkedin.com/in/prathap-b-s/'
    }
  });
});

app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'pbs@gitam.in',
        subject: `New Portfolio Message from ${contact.name}`,
        text: `You received a new message from your portfolio website:

Name: ${contact.name}
Email: ${contact.email}
Message: ${contact.message}
`
      };
      transporter.sendMail(mailOptions)
        .then(() => console.log('Email notification sent to pbs@gitam.in'))
        .catch(emailErr => console.error('Email notification failed to send:', emailErr.message));
    } else {
      console.log('Email notification skipped (EMAIL_USER or EMAIL_PASSWORD not set in env)');
    }

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error('Contact form server error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'UPI QR Payment System',
      description: 'Full-stack solution for small businesses to manage multiple UPI accounts and generate predefined-amount QR codes.',
      tags: ['Full Stack', 'QR Code', 'Vercel'],
      link: 'https://upi-pink.vercel.app/',
      icon: 'payment'
    },
    {
      id: 2,
      title: 'AI SOS Gesture Detection',
      description: 'Real-time emergency gesture recognition with 93% accuracy using MediaPipe and OpenCV.',
      tags: ['React', 'TypeScript', 'OpenCV', 'MediaPipe'],
      link: 'https://ai-powered-gesture-detection-62.lovable.app/',
      icon: 'gesture'
    },
    {
      id: 3,
      title: 'CIVIX — Citizen Interaction Platform',
      description: 'Civic-tech platform enabling citizens to raise requests with local government and authorities.',
      tags: ['Web App', 'Civic Tech', 'Government'],
      icon: 'civix'
    },
    {
      id: 4,
      title: 'Simon Says Game',
      description: 'Browser-based memory game with dynamic pattern generation and real-time input validation.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/Prathap-bs/symonsaysgame',
      icon: 'game'
    },
    {
      id: 5,
      title: 'Travel & Tour Website',
      description: 'Fully functional travel platform with responsive design built on WordPress.',
      tags: ['WordPress', 'Responsive'],
      link: 'https://tourandtravel8819.wordpress.com/prathap/',
      icon: 'travel'
    }
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
