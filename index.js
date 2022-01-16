require('dotenv').config();
const nodemailer = require('nodemailer');

const io = require('console-read-write');

const transporter = nodemailer.createTransport({
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  },
  service: process.env.MAIL_SERVICE,
  port: process.env.MAIL_PORT
});

const send = async () => {
  console.log('--- Вызвали рассылку ---')

  console.log('Укажите почту, куда отправить письмо')
  let to = await io.read()

  try {
    transporter.sendMail({
      from: process.env.MAIL_USER,
      to: to,
      subject: 'Test message',
      html: `<h1>Wellcome! Nodemailer it works!</h1>`
    }).then(data => {
      console.log(data.messageId)
    })
  } catch (e) {
    console.log(e)
  }
  finally {
    console.log('--- Сообщение отправлено ---')
  }
}

send()