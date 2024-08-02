const nodemailer = require("nodemailer");


const mail_send = (mailid, sub, content, regnum) => {

	// const mailid = "susmithaadhavan9@gmail.com"
	const sender = nodemailer.createTransport({
		service: 'gmail',
		port: 465,
		secure: true,
		logger: true,
		secureConnection: false,
		auth: {
			user: 'aathavan972004@gmail.com',
			pass: 'gsgw dxbb jqsq mdfx'
		},
		tls: {
			rejectUnauthorized: true
		}
	});

	let mail = {
		from: "aathavan972004@gmail.com",
		to: mailid,
		subject: sub,
		text: content+" of "+regnum
	};

	mailsend = sender.sendMail(mail, function (error, info) {
		if (error) {
			console.log("error1111")
			console.log(error);
		} else {
			console.log("Email sent successfully to : " + mailid);
		}
	})

}

module.exports = { mail_send }

