import { AddRequestRepository } from '../../data/repositories/addRequest.repository';
import { AddRequestModel, AddRequestCreationAttributes } from '../../data/models/addRequest';
import { IWithMeta } from '../../data/repositories/base.repository';
import { IAddRequestFilter } from '../../data/repositories/filters/addRequest.filter';
import { IAddRequestMiddleware } from '../middlewares/addRequest.middleware';

export class AddRequestService {
  constructor(private repository: AddRequestRepository) {}

  async getAddRequestById(id: string): Promise<AddRequestModel> {
    return await this.repository.getAddRequestById(id);
  }

  async getAllAddRequests(filter: IAddRequestFilter): Promise<IWithMeta<AddRequestModel>> {
    return await this.repository.getAllAddRequests(filter);
  }

  async createAddRequest(
    inputAddRequest: AddRequestCreationAttributes,
    addRequestMiddleware: IAddRequestMiddleware
  ): Promise<AddRequestModel> {
    await addRequestMiddleware(inputAddRequest);
    return await this.repository.createAddRequest(inputAddRequest);
  }

  async updateAddRequestById(
    inputAddRequest: { id: string; data: AddRequestCreationAttributes },
    addRequestMiddleware: IAddRequestMiddleware
  ): Promise<AddRequestModel> {
    await addRequestMiddleware(inputAddRequest.data);
    const { id, data } = inputAddRequest;
    const oldAddRequest = await this.repository.getAddRequestById(id);
    if (!oldAddRequest) {
      throw {
        error: `Add request with id: ${id} does not exists`,
        status: 404,
      };
    }
    return await this.repository.updateAddRequest(id, data);
  }

  async deleteAddRequestById(id: string): Promise<void> {
    await this.repository.deleteAddRequest(id);
  }
}
