import express from "express";
import cors from "cors";
import { manageRoutes } from "./controller/manageRoutes.js";

const app = express();
const port = 8000;

app.use(cors());
app.use("/images", express.static("images"));
app.use(manageRoutes());



// app.get("/api/home/meditation",(req,res)=>{
//   res.status(200).json(carouselData);
// })


import nodemailer from 'nodemailer';
app.use(express.json());
app.post('/subscribe', async (req, res) => {
  if (!req.body || !req.body.email) {
    return res.status(400).send('Email is required');
  }

  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    auth: {
      user: 'shalini@itobuz.com',
      pass: 'aall yhmq boqg hcfd'
    }
  });

  const mailOptions = {
    from: 'shalini@itobuz.com',
    to: email,
    subject: 'Subscription Confirmation',
    text: 'Thank you for subscribing to our newsletter!'
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

