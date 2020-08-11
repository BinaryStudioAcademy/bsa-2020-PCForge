import { ICpuFilter } from 'models/api.filters';
import { CpuModel } from 'models/api.models';
import Api, { IErrorResponse, IWithMetaResponse } from '../helpers/apiHelper';

const url = '/api/cpus';

export const getAllCpus = async (filter: ICpuFilter): Promise<IWithMetaResponse<CpuModel> | IErrorResponse> => {
  // const response = await callWebApi({
  //   endpoint,
  //   type: 'GET',
  //   query: filter,
  // });
  // return response.json();

  const response = await Api.get<IWithMetaResponse<CpuModel>, ICpuFilter>({ url, filter });
  return response;
};

// export const getCpu = async (id: number): Promise<TypeCpu> => {
//   const response = await callWebApi({
//     endpoint: `${endpoint}/${id}`,
//     type: 'GET',
//   });
//   return response.json();
// };

// export const updateCpu = async (request: TypeCpu): Promise<TypeCpu> => {
//   const response = await callWebApi({
//     endpoint: `${endpoint}/${request.id}`,
//     type: 'PUT',
//     request,
//   });
//   return response.json();
// };

// export const deleteCpu = async (id: number): Promise<{}> => {
//   const response = await callWebApi({
//     endpoint: `${endpoint}/${id}`,
//     type: 'DELETE',
//   });
//   return response.json();
// };

// async getCpuById(id: string): Promise<CpuModel> {
//   const cpu = await this.repository.getCpuById(id);
//   return cpu;
// }

// async getAllCpus(filter: ICpuFilter): Promise<IWithMeta<CpuModel>> {
//   const cpus = await this.repository.getAllCpus(filter);
//   return cpus;
// }

// async createCpu(inputCpu: CpuCreationAttributes): Promise<CpuModel> {
//   const cpu = await this.repository.createCpu(inputCpu);
//   return cpu;
// }

// async updateCpuById(inputCpu: { id: string; data: CpuCreationAttributes }): Promise<CpuModel> {
//   const { id, data } = inputCpu;
//   const oldCpu = await this.repository.getCpuById(id);
//   if (!oldCpu) {
//     throw new Error(`Cpu with id: ${id} does not exists`);
//   }
//   const cpu = await this.repository.updateCpuById(id, data);
//   return cpu;
// }

// async deleteCpuById(inputCpu: { id: string }): Promise<void> {
//   const { id } = inputCpu;
//   await this.repository.deleteCpuById(id);
// }
