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
import { allowForAuthorized, allowForVerified } from '../middlewares/allowFor.middleware';
import {
  UserRequestNotificationMiddleware,
  UserRequestAdminNotificationMiddleware,
} from '../middlewares/requestNotification.middleware';

export function router(fastify: FastifyInstance, opts: FastifyOptions, next: FastifyNext): void {
  const { AddRequestService, UserService } = fastify.services;
  const preHandler = userRequestMiddleware(fastify);
  fastify.addHook('preHandler', preHandler);

  const addRequestMiddleware = AddRequestMiddleware(fastify);
  const sendDeleteAddRequestNotification = UserRequestNotificationMiddleware(fastify.services);
  const sendDeleteAddRequestAdminNotification = UserRequestAdminNotificationMiddleware(fastify.services);

  const getAllSchema = getMultipleQuery(GetAllAddRequest, IAddRequestFilter.schema);
  fastify.get('/', getAllSchema, async (request: GetAllAddRequests, reply) => {
    allowForAuthorized(request);
    if (request.query.userId) {
      const comments = await AddRequestService.getUserRequests(request.query);
      reply.send(comments);
    }
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
    allowForVerified(request);
    request.body.userId = request.user.id;
    const comment = await AddRequestService.createAddRequest(request.body, addRequestMiddleware);

    const admins = await UserService.getAdmins();

    sendDeleteAddRequestAdminNotification(admins);
    reply.send(comment);
  });

  const deleteOneSchema = updateOneQuery(UpdateAddRequestSchema, AddRequestSchema);
  fastify.put('/:id', deleteOneSchema, async (request: PutAddRequestRequest, reply) => {
    allowForVerified(request);
    const { id } = request.params;
    request.body.userId = request.user.id;
    const newComment = await AddRequestService.updateAddRequestById({ id, data: request.body }, addRequestMiddleware);
    reply.send(newComment);
  });

  const deleteCommentSchema = deleteOneQuery(AddRequestSchema);
  fastify.delete('/:id', deleteCommentSchema, async (request: DeleteAddRequestRequest, reply) => {
    allowForVerified(request);
    const { id } = request.params;
    const { type } = request.body;

    const addRequest = await AddRequestService.deleteAddRequestById(id);

    const userId = addRequest.userId;
    sendDeleteAddRequestNotification(userId.toString(), type);
    reply.send(addRequest);
  });

  next();
}
