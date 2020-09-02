import Mail from 'nodemailer/lib/mailer';
import mustache from 'mustache';
import path from 'path';
import { triggerServerError, readStringFile } from '../../helpers/global.helper';

export interface SendMessageStatus {
  messageId: string;
  envelope: {
    to: string;
  };
}

const loginLink: string = process.env.APP_CLIENT_URL + '/login';
const templatesPath = path.resolve(__dirname, '../', 'templates');
const emailVerificationTemplate = readStringFile(templatesPath + '/verify-email.template.mustache');
const resetPasswordTemplate = readStringFile(templatesPath + '/password-reset.template.mustache');

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
    const rendered = mustache.render(emailVerificationTemplate, { link: verificationLink, loginLink, email: to });
    try {
      const status = await this.sendMail({
        from: 'PC Forge',
        to,
        subject: 'Email verification',
        html: rendered,
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
    const renderData = {
      loginLink,
      link: `${process.env.APP_CLIENT_URL || 'http://localhost:3000'}/reset-password/${userId}/${token}`,
    };
    const rendered = mustache.render(resetPasswordTemplate, renderData);
    try {
      const status = await this.sendMail({
        from: 'PC forge',
        to,
        subject: 'Password reset',
        html: rendered,
      });
      return status;
    } catch (err) {
      triggerServerError(`User with mail ${to} does not exist`, 404);
    }
  }
}
