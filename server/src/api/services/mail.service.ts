import { SendMailOptions } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { promisify } from 'util';
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
