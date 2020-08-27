import { BaseRepository, RichModel, IWithMeta } from './base.repository';
import { AddRequestModel, AddRequestStatic, AddRequestCreationAttributes, AddRequest } from '../models/addRequest';
import { UserStatic } from '../models/user';
import { mergeFilters } from './filters/helper';
import { IAddRequestFilter } from './filters/addRequest.filter';

export class AddRequestRepository extends BaseRepository<
  AddRequestModel,
  AddRequestCreationAttributes,
  IAddRequestFilter
> {
  constructor(private model: AddRequestStatic, private userModel: UserStatic) {
    super(<RichModel>model, IAddRequestFilter);
  }

  async getAddRequestById(id: string): Promise<AddRequestModel> {
    return await this.getById(id);
  }

  async getAllAddRequests(inputFilter: IAddRequestFilter): Promise<IWithMeta<AddRequestModel>> {
    const filter = mergeFilters<IAddRequestFilter>(new IAddRequestFilter(), inputFilter);
    return await this.getAll(
      {
        group: ['addRequest.id', 'user.id'],
        include: [
          {
            model: this.userModel,
            as: 'user',
          },
        ],
        where: {
          requestedType: filter.requestedType,
        },
      },
      filter
    );
  }

  async createAddRequest(inputAddRequest: AddRequestCreationAttributes): Promise<AddRequestModel> {
    console.log('inputAddRequest');
    console.log(inputAddRequest);
    return this.model.create(inputAddRequest);
  }

  async updateAddRequest(id: string, inputAddRequest: AddRequestCreationAttributes): Promise<AddRequestModel> {
    return await this.updateById(id, inputAddRequest);
  }

  async deleteAddRequest(id: string): Promise<void> {
    await this.deleteById(id);
  }
}
