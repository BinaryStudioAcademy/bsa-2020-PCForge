import webApi from 'api/webApiHelper';
import { PCSetup } from 'common/models/setup';

export type TypeResponseAll = {
    meta: {
        globalCount: number;
        countAfterFiltering: number;
    };
    data: PCSetup[];
}

export interface ITopSetupFilter {
    from?: number;
    count?: number;
}

const endpoint = '/setups';

export const getTopSetups = async (filter: ITopSetupFilter): Promise<TypeResponseAll> => {
    return await webApi.get(endpoint, filter);
}