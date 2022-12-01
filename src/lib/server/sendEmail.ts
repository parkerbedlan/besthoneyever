import nodemailer from 'nodemailer';
import { SENDER_EMAIL_ADDRESS, SENDER_PASSWORD, RECEIVER_EMAIL_ADDRESS } from '$env/static/private';

export async function sendEmail({
	customerEmailAddress,
	product
}: {
	customerEmailAddress: string;
	product: string;
}) {
	console.log('sending email');

	const transport = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: SENDER_EMAIL_ADDRESS,
			pass: SENDER_PASSWORD
		}
	});

	console.log('successful transport creation');

	// send mail with defined transport object
	const info = await transport.sendMail({
		from: `"Best Honey Ever" <${SENDER_EMAIL_ADDRESS}>`,
		to: RECEIVER_EMAIL_ADDRESS,
		subject: `A customer wants some ${product}!`,
		html: `
		<h1>New ${product} customer</h1>
		<h2>${customerEmailAddress} wants some ${product}</h2>
		<h3>Customer: ${customerEmailAddress}</h3>
		<h3>Product requested: ${product}</h3>
		`
	});

	console.log('Message sent: %s', info);
}
