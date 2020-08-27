import Mail from 'nodemailer/lib/mailer';
import { triggerServerError } from '../../helpers/global.helper';

export interface SendMessageStatus {
  messageId: string;
  envelope: {
    to: string;
  };
}

export class MailService {
  constructor(private nodemailer: Mail) {}

  public async sendMail(options: Mail.Options): Promise<SendMessageStatus | never> {
    return new Promise((resolve, reject) => {
      this.nodemailer.sendMail(options, (err: Error, info: SendMessageStatus) => {
        if (err) reject(err);
        else resolve(info);
      });
    });
  }

  public async sendEmailVerification(verificationToken: string, to: string): Promise<SendMessageStatus> {
    const verificationLink: string = process.env.APP_CLIENT_URL + '/verify-email/' + verificationToken;
    try {
      const status = await this.sendMail({
        from: 'PC Forge',
        to,
        subject: 'Email verification',
        html: `Thanks for signing up. Please, verify your email by clicking on this <a href="${verificationLink}">link</a>.`,
      });
      return status;
    } catch (e) {
      triggerServerError(`User with mail ${to} does not exist`, 400);
    }
  }

  public async sendResetPassword({
    to,
    userId,
    token,
  }: {
    to: string;
    userId: number;
    token: string;
  }): Promise<SendMessageStatus | never> {
    try {
      const status = await this.sendMail({
        from: 'PC forge',
        to,
        subject: 'Password reset',
        text: `Here is your reset password link: http://localhost:3000/reset-password/${userId}/${token}`,
      });
      return status;
    } catch (err) {
      triggerServerError(`User with mail ${to} does not exist`, 404);
    }
  }
}
