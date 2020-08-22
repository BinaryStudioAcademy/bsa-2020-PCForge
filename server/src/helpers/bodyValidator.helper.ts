import { ContentTypeParserDoneFunction } from 'fastify/types/content-type-parser';
import isEmpty from 'lodash/isEmpty';

export const validateBody = (body: string | Buffer, done: ContentTypeParserDoneFunction): void | never => {
  try {
    if (body instanceof Buffer) throw new Error('body cant be Buffer type');
    const json = JSON.parse(body);
    if (isEmpty(json)) throw new Error('body cant be empty');
    done(null, json);
  } catch (err) {
    err.statusCode = 400;
    done(err, undefined);
  }
};
