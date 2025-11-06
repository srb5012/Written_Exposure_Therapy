/*
 * File: server.js
 * Purpose: Small Express backend to forward contact form submissions via email.
 *
 * Influenced by:
 *  - express: web framework used to expose an API endpoint
 *  - nodemailer: to send email messages
 *  - cors: to accept cross-origin requests from the frontend
 *  - dotenv: loads environment variables for credentials
 *
 * Influences:
 *  - Exposes POST /api/contact which the frontend can call to send email messages.
 *
 * Notes:
 *  - This file is intended for development/testing and is not part of automated frontend deployments.
 *  - Non-functional header added for documentation only.
 */

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3001; //run the backend on a different port

// Middleware
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// The API route that will receive the form data
app.post('/api/contact', (req, res) => {
    // Get the data from the request body
    const { name, email, message } = req.body;

    // Set up Nodemailer 
    // This is the transport configuration.
    // I'm using Gmail here
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASS, 
        },
    });

    // --- Define the email options ---
    const mailOptions = {
        from: `"${name}" <${email}>`, // Sender's name and email
        to: process.env.RECIPIENT_EMAIL,   // Recipient email address
        subject: `WET Contact Form Submission from ${name}`,
        text: `You have received a new message from your website contact form.\n\n` +
              `Name: ${name}\n` +
              `Email: ${email}\n` +
              `Message:\n${message}`
    };

    // --- Send the email ---
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error: Could not send email.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Message sent successfully!');
        }
    });
});

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});