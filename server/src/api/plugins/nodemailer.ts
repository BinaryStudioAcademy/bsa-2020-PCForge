import fp from 'fastify-plugin';
import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export default fp((fastify, opts: SMTPTransport.Options, next) => {
  try {
    const transporter: Mail = createTransport(new SMTPTransport(opts));
    fastify.decorate('nodemailer', transporter).addHook('onClose', onClose);
  } catch (err) {
    return next(err);
  }

  next();
});

const onClose = (fastify, done) => {
  fastify.nodemailer.close(done);
};
