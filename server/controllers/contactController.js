
const Message = require('../models/Message');
const nodemailer = require('nodemailer');




const createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields (name, email, message) are required' });
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address' });
    }

    
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    
    try {
      const emailService = process.env.EMAIL_SERVICE;
      const emailUser = process.env.EMAIL_USER;
      const emailPass = process.env.EMAIL_PASS;
      const receiverEmail = process.env.RECEIVER_EMAIL || 'kanesarasakajaluxmy@gmail.com';

      
      if (emailUser && emailPass && emailUser !== 'your-email-address@gmail.com' && emailPass !== 'your-gmail-app-password') {
        const transporter = nodemailer.createTransport({
          service: emailService || 'gmail',
          auth: {
            user: emailUser,
            pass: emailPass
          }
        });

        const mailOptions = {
          from: `"Portfolio Contact Form" <${emailUser}>`,
          to: receiverEmail,
          subject: `New Portfolio Message from ${name}`,
          text: `You have received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
              <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px; margin-top: 0;">New Contact Form Message</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #1e40af; margin-top: 20px;">
                <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
              </div>
              <hr style="border: 0; border-top: 1px solid #eee; margin-top: 30px;" />
              <p style="font-size: 0.8rem; color: #999; margin-bottom: 0;">This email was sent automatically from your developer portfolio website.</p>
            </div>
          `
        };

        await transporter.sendMail(mailOptions);
        console.log(`Email notification successfully sent to ${receiverEmail}`);
      } else {
        console.log('Nodemailer not configured or placeholder credentials detected. Skipping email dispatch.');
      }
    } catch (emailError) {
      console.warn('Error sending email notification:', emailError.message);
      
      
    }

    res.status(201).json({ success: true, message: 'Message received' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error saving message', error: error.message });
  }
};

module.exports = {
  createMessage
};
