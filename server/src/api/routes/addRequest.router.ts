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
  getMultipleQuery,
  getOneQuery,
  createOneQuery,
  updateOneQuery,
  deleteOneQuery,
} from '../../helpers/swagger.helper';
import { IAddRequestFilter } from '../../data/repositories/filters/addRequest.filter';
import { AddRequestMiddleware } from '../middlewares/addRequest.middleware';
import { userRequestMiddleware } from '../middlewares/userRequest.middlewarre';
import { allowForAuthorized } from '../middlewares/allowFor.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { AddRequestService } = fastify.services;
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const addRequestMiddleware = AddRequestMiddleware(fastify);

  const getAllSchema = getMultipleQuery(GetAllAddRequest, IAddRequestFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllAddRequests, reply) => {
    allowForAuthorized(request);
    const comments = await AddRequestService.getAllAddRequests(request.query);
    reply.send(comments);
  });

  const getOneSchema = getOneQuery(AddRequestSchema);
  fastify.get('/:id', getOneSchema, async (request: GetOneAddRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const comment = await AddRequestService.getAddRequestById(id);
    reply.send(comment);
  });

  const createOneSchema = createOneQuery(CreateAddRequestSchema, AddRequestSchema);
  fastify.post('/', createOneSchema, async (request: PostAddRequestRequest, reply) => {
    allowForAuthorized(request);
    const comment = await AddRequestService.createAddRequest(request.body, addRequestMiddleware);
    console.log(comment);
    reply.send(comment);
  });

  const deleteOneSchema = updateOneQuery(UpdateAddRequestSchema, AddRequestSchema);
  fastify.put('/:id', deleteOneSchema, async (request: PutAddRequestRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const newComment = await AddRequestService.updateAddRequestById({ id, data: request.body }, addRequestMiddleware);
    reply.send(newComment);
  });

  const deleteCommentSchema = deleteOneQuery(AddRequestSchema);
  fastify.delete('/:id', deleteCommentSchema, async (request: DeleteAddRequestRequest, reply) => {
    allowForAuthorized(request);
    const { id } = request.params;
    const addRequest = await AddRequestService.deleteAddRequestById(id);
    reply.send(addRequest);
  });

  next();
}
