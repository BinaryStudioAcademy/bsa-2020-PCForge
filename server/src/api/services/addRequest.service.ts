import { AddRequestRepository } from '../../data/repositories/addRequest.repository';
import { AddRequestModel, AddRequestCreationAttributes } from '../../data/models/addRequest';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IAddRequestFilter } from '../../data/repositories/filters/addRequest.filter';
import { IAddRequestMiddleware } from '../middlewares/addRequest.middleware';
import { triggerServerError } from '../../helpers/global.helper';
import { BaseService } from './base.service';

export class AddRequestService extends BaseService<
  AddRequestModel,
  AddRequestCreationAttributes,
  AddRequestRepository
> {
  constructor(private repository: AddRequestRepository) {
    super(repository);
  }

  async getAddRequestById(id: string): Promise<AddRequestModel> {
    const addRequest = await this.repository.getAddRequestById(id);
    if (!addRequest) {
      triggerServerError(`Add request with id: ${id} does not exists`, 404);
    }
    return addRequest;
  }

  async getAllAddRequests(filter: IAddRequestFilter): Promise<IWithMeta<AddRequestModel>> {
    return await this.repository.getAllAddRequests(filter);
  }
  async getUserRequests(filter: IAddRequestFilter): Promise<IWithMeta<AddRequestModel>> {
    return await this.repository.getUserRequests(filter);
  }

  async createAddRequest(
    inputAddRequest: AddRequestCreationAttributes,
    addRequestMiddleware: IAddRequestMiddleware
  ): Promise<AddRequestModel> {
    await addRequestMiddleware(inputAddRequest);
    const request = await super.create(inputAddRequest);
    return request;
  }

  async updateAddRequestById(
    { id, data }: { id: string; data: AddRequestCreationAttributes },
    addRequestMiddleware: IAddRequestMiddleware
  ): Promise<AddRequestModel> {
    await addRequestMiddleware(data);
    if (!Object.keys(data).length) {
      triggerServerError('No valid fields to update specified', 400);
    }
    const request = await super.updateById(id, data);
    return request;
  }

  async deleteAddRequestById(id: string): Promise<AddRequestModel> {
    return await super.deleteById(id);
  }
}
