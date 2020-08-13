import webApi from 'api/webApiHelper';

interface IResponse {
  imageUrl: string;
}

export const uploadImage = async (image: Blob): Promise<string> => {
  const response = (await webApi.image(`/image`, image)) as IResponse;
  return response.imageUrl;
};
