const express = require('express');
const emailRouter = express.Router();
const nodeMailer = require('nodemailer');

const _sendEmail = ((data, smtpConfig, hostMail) => {
    const mailOption = {
      from: hostMail, // If using gmail , the from address will always be overwrite as the gmail address
      to: 'majingze0508@gmail.com',
      subject: data.Subject,
      html: data.Message
    };
    const transporter = nodeMailer.createTransport(smtpConfig);

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOption, (err) => {
        if (err) {
          reject(err);
        }
        resolve('send email succeed');
      });
    });
});

emailRouter.post('/', (req, res) => {
  if (!req.body) {
    return res.status(400).send('there is no form data');
  }
  const data = req.body;
  const smtpConfig = {
    service: 'gmail',
    auth: {
      user: 'test@gmail.com',
      pass: 'password',
    },
  }
  const hostMail = `${data.Name} <${data.Email}>`

  return _sendEmail(data, smtpConfig, hostMail)
    .then((result) => {
      return res.json({status: 200, result: 'succeed'});
    })
    .catch((err) => {
      return res.json({status: 400, result: 'failed'});
    });
});
module.exports = emailRouter;
