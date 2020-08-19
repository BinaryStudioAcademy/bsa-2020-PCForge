import { BaseRepository, RichModel, IWithMeta } from "./base.repository";
import { AddRequestModel, AddRequestStatic, AddRequestCreationAttributes } from "../models/addRequest";
import { mergeFilters } from "./filters/helper";
import { IAddRequestFilter } from "./filters/addRequest.filter";

export class AddRequestRepository extends BaseRepository<AddRequestModel, IAddRequestFilter> {
  constructor(private model: AddRequestStatic) {
    super(<RichModel>model, IAddRequestFilter);
  }

  async getAddRequestById(id: string): Promise<AddRequestModel> {
    return await this.getById(id);
  }

  async getAllAddRequests(inputFilter: IAddRequestFilter): Promise<IWithMeta<AddRequestModel>> {
    const filter = mergeFilters<IAddRequestFilter>(new IAddRequestFilter(), inputFilter);
    return await this.getAll(
      {
        group: ['addRequest.id'],
        where: {
          requestedType: filter.requestedType,
        },
      },
      filter
    );
  }

  async createAddRequest(inputAddRequest: AddRequestCreationAttributes): Promise<AddRequestModel> {
    return this.model.create(inputAddRequest);
  }

  async updateAddRequest(id: string, inputAddRequest: AddRequestCreationAttributes): Promise<AddRequestModel> {
    return await this.updateById(id, inputAddRequest);
  }

  async deleteAddRequest(id: string): Promise<void> {
    await this.deleteById(id);
  }
}
