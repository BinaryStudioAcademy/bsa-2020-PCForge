import Mail from 'nodemailer/lib/mailer';

export class MailService {
  constructor(private nodemailer: Mail) {}

  public sendMail(options: Mail.Options): void {
    this.nodemailer.sendMail(options);
  }

  public sendResetPassword({ to, userId, token }: { to: string; userId: number; token: string }): void {
    this.sendMail({
      from: 'PC forge',
      to,
      subject: 'Password reset',
      text: `Here is your reset password link: http://localhost:3000/reset-password/${userId}/${token}`,
    });
  }
}
