const nodemailer = require("nodemailer");

async function main() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "mirusegura@gmail.com", // generated ethereal user
      pass: "xezfrpktrznqwmiu", // generated gmail password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "Bienvenido a Node <mirusegura@gmail.com>", // sender address
    to: "melgutlau@gmail.com, arfernd@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = { main };
