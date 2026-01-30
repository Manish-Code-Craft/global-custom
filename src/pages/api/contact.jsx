// pages/api/contact.js
import nodemailer from 'nodemailer';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { phone,name, email, message, subject } = req.body;

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
    const info = await transporter.sendMail({
      from: `${name} <${email}>`, 
      to: 'imports@globalcust.co.uk', 
      subject: `${name} - Enquiry ${subject}`, 
      text: message, 
      html: `Hello GlobalCust Team,<br><br>
      Enquery From: <b>${name}</b><br><br>
      Contact Number: <b>${phone}</b><br><br>
      Email: <b>${email}</b><br><br>
      Subject: <b>${subject}</b><br><br>
      Message:<br><b>${message}</b><br><br><br><br>
      <b style="color:green">Best Regards</b><br>${name}<br><br>
      Page Link: <b>${req.headers.referer}</b>`
    });
    res.status(200).json({ status: 'success' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
