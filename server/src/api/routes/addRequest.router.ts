import { FastifyInstance } from 'fastify';
import { FastifyNext, FastifyOptions } from './fastifyTypes';
import {
  GetAllAddRequests,
  GetOneAddRequest,
  PostAddRequestRequest,
  PutAddRequestRequest,
  DeleteAddRequestRequest,
  GetAllAddRequest,
  AddRequestSchema,
  UpdateAddRequestSchema,
  CreateAddRequestSchema,
} from './addRequest.schema';
import {
  GetMultipleQuery,
  GetOneQuery,
  CreateOneQuery,
  UpdateOneQuery,
  DeleteOneQuery,
} from '../../helpers/swagger.helper';
import { IAddRequestFilter } from '../../data/repositories/filters/addRequest.filter';
import { AddRequestMiddleware } from '../middlewares/addRequest.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { AddRequestService } = fastify.services;

  const addRequestMiddleware = AddRequestMiddleware(fastify);

  const getAllSchema = GetMultipleQuery(GetAllAddRequest, IAddRequestFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllAddRequests, reply) => {
    const comments = await AddRequestService.getAllAddRequests(request.query);
    reply.send(comments);
  });

  const getOneSchema = GetOneQuery(AddRequestSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneAddRequest, reply) => {
    const { id } = request.params;
    const comment = await AddRequestService.getAddRequestById(id);
    reply.send(comment);
  });

  const createOneSchema = CreateOneQuery(CreateAddRequestSchema, AddRequestSchema);
  fastify.post('/', createOneSchema, async (request: PostAddRequestRequest, reply) => {
    const comment = await AddRequestService.createAddRequest(request.body, addRequestMiddleware);
    reply.send(comment);
  });

  const deleteOneSchema = UpdateOneQuery(UpdateAddRequestSchema, AddRequestSchema);
  fastify.put('/:id', deleteOneSchema, async (request: PutAddRequestRequest, reply) => {
    const { id } = request.params;
    const newComment = await AddRequestService.updateAddRequestById({ id, data: request.body }, addRequestMiddleware);
    reply.send(newComment);
  });

  const deleteCommentSchema = DeleteOneQuery();
  fastify.delete('/:id', deleteCommentSchema, async (request: DeleteAddRequestRequest, reply) => {
    const { id } = request.params;
    await AddRequestService.deleteAddRequestById(id);
    reply.send({});
  });

  next();
}
