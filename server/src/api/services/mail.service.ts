import Mail from 'nodemailer/lib/mailer';

export class MailService {
  constructor(private nodemailer: Mail) {}

  public async sendMail(): Promise<void> {
    console.log('mail send');
  }
}
