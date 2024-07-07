import nodemailer from 'nodemailer';

export default class Emailer {
  private transporter: nodemailer.Transporter;
  user: string;

  constructor(user: string, password: string) {
    this.user = user;
    this.transporter = nodemailer.createTransport({
      host: 'smtppro.zoho.com',
      port: 465,
      secure: true,
      service: 'zoho',
      auth: {
        user,
        pass: password,
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
      console.group('Email Sender')
      if (error) {

        console.error(error);
      } else {
        console.log('Email sent: ', info.response);
      }
      console.groupEnd()
    });
  }
}
