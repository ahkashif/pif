import bcryptjs from "bcryptjs";
import User from "@/models/userModel";
import nodemailer from "nodemailer";

interface requestTypes {
	email: string;
	emailType: string;
	userId: string;
}

export const sendEmail = async ({ email, emailType, userId }: requestTypes) => {
	const hashedToken = await bcryptjs.hash(userId.toString(), 10);
	try {
		if (emailType === "VERIFY") {
			await User.findByIdAndUpdate(userId, { verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 36000000 });
		} else if ((emailType = "RESET")) {
			await User.findByIdAndUpdate(userId, {
				forgotPasswordToken: hashedToken,
				forgotPasswordTokenExpiry: Date.now() + 36000000,
			});
		}

		const transport = nodemailer.createTransport({
			host: "sandbox.smtp.mailtrap.io",
			port: 2525,
			auth: {
				user: "d5f9e2a1d41ec6",
				pass: "df9775a429bab5",
			},
		});

		const mailOptions = {
			from: "kashifahmed38@gmail.com",
			to: email,
			subject: emailType === "VERIFY" ? "Verify Your Email" : "reset your passowrd",
			text: "Hello world?", // plain text body
			html: `<p>Click <a href="${process.env.DOAMIN!}/verifyEmail?token${hashedToken}">here</a> to ${
				emailType === "VERIFY" ? "verify your email" : "reset your password"
			} or copy and paste the link below in your browser<br> ${process.env.DOAMIN}/verifyEmail?token${hashedToken}</p>`, // html body
		};

		const mailResponse = await transport.sendMail(mailOptions);
		return mailResponse;
	} catch (error) {
		if (error instanceof Error) {
			console.log("Error Occured", error);
		}
	}
};
