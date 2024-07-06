import nodemailer from 'nodemailer';
export default class Emailer {
  private transporter: nodemailer.Transporter;
  user: string;

  constructor() {
    const user = import.meta.env.VITE_EMAIL_USER;
    const pass = import.meta.env.VITE_EMAIL_PASS;

    this.user = user;
    this.transporter = nodemailer.createTransport({
      host: 'smtppro.zoho.com',
      port: 465,
      secure: true,
      service: 'zoho',
      auth: {
        user,
        pass,
      },
    });
  }

  async sendEmail(to: string, subject: string, html: string) {
    const mailOptions = {
      from: this.user,
      to: `${to}, ${this.user}`,
      subject,
      html,
    };
    return this.transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ', info.response);
      }
    });
  }
}
