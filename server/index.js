import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));
app.use(express.json());

// Create Gmail transporter using App Password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,      // your Gmail: anujraj24go@gmail.com
    pass: process.env.GMAIL_APP_PASS,  // Gmail App Password (not account password)
  },
});

// Verify transporter connection on startup
transporter.verify((error) => {
  if (error) {
    console.error('❌ Mail transporter error:', error.message);
  } else {
    console.log('✅ Mail server ready');
  }
});

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
  }

  // Email received in your inbox
  const mailToMe = {
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `📬 Portfolio: ${subject || 'New Message'} — from ${name}`,
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: auto; background: #0f0f11; color: #e5e7eb; padding: 32px; border-radius: 16px; border: 1px solid #27272a;">
        <h2 style="color: #3b82f6; margin-bottom: 4px;">📬 New Portfolio Message</h2>
        <p style="color: #6b7280; font-size: 13px; margin-bottom: 24px;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; width: 80px;">From</td>
            <td style="padding: 10px 0; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #9ca3af; font-size: 13px;">Email</td>
            <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #9ca3af; font-size: 13px;">Subject</td>
            <td style="padding: 10px 0;">${subject || '—'}</td>
          </tr>
        </table>
        
        <hr style="border: none; border-top: 1px solid #27272a; margin: 20px 0;" />
        
        <h3 style="color: #e5e7eb; margin-bottom: 12px;">Message</h3>
        <div style="background: #18181b; border-radius: 10px; padding: 16px; line-height: 1.7; color: #d1d5db;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        
        <div style="margin-top: 24px; text-align: center;">
          <a href="mailto:${email}?subject=Re: ${subject || 'Your message'}"
            style="display: inline-block; background: #3b82f6; color: white; padding: 10px 24px; border-radius: 30px; text-decoration: none; font-weight: 600; font-size: 14px;">
            Reply to ${name}
          </a>
        </div>
      </div>
    `,
  };

  // Auto-reply to sender
  const mailToSender = {
    from: `"Anuj Raj" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `Got your message, ${name}! 🚀`,
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: auto; background: #0f0f11; color: #e5e7eb; padding: 32px; border-radius: 16px; border: 1px solid #27272a;">
        <h2 style="color: #3b82f6;">Hey ${name}! 👋</h2>
        <p style="line-height: 1.7; color: #d1d5db;">
          Thanks for reaching out! I've received your message and will get back to you as soon as possible — usually within 24 hours.
        </p>
        <div style="background: #18181b; border-radius: 10px; padding: 16px; margin: 20px 0; line-height: 1.7; color: #9ca3af; font-size: 13px; border-left: 3px solid #3b82f6;">
          <strong style="color: #e5e7eb;">Your message:</strong><br/><br/>
          ${message.replace(/\n/g, '<br>')}
        </div>
        <p style="color: #6b7280; font-size: 13px;">— Anuj Raj · anujraj24go@gmail.com</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailToMe);
    await transporter.sendMail(mailToSender);
    return res.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Send error:', err);
    return res.status(500).json({ success: false, error: 'Failed to send email. Please try again.' });
  }
});

app.get('/api/health', (_, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`🚀 Mail server running on http://localhost:${PORT}`));
