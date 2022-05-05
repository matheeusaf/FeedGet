import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "83dba4ce9bb4f9",
      pass: "f16719bfd48630"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
        from: 'Equipe FeedGet <oi@feedget.com>',
        to: 'Matheus Fernandes <matheuswebshoter@gmail.com>',
        subject: subject,
        html: body
    });
    };
}