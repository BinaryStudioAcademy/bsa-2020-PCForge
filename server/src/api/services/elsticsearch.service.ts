import { Client } from '@elastic/elasticsearch';
import { FilterByNameType } from '../../data/repositories/filters/types';
const elasticNode = process.env.ELASTIC_NODE || 'http://localhost:9200';

export interface ISearchProperties {
  input: FilterByNameType;
  searchFields: Array<string>;
  countValue?: number;
}

const elasticClient = new Client({
  node: [elasticNode],
});

export class ElasticService {
  documentIndex = '';

  constructor(index: string) {
    this.documentIndex = index;
  }

  findExistingIndex(index: string) {
    return elasticClient.indices.exists({ index });
  }

  async createIndexIfNotExist(index: string) {
    const existingIndex = await this.findExistingIndex(index);
    if (existingIndex.body) {
      return;
    }
    return elasticClient.indices.create({
      index,
    });
  }

  async removeIndexIfExist(index: string) {
    const existingIndex = await this.findExistingIndex(index);
    if (existingIndex.body) {
      return elasticClient.indices.delete({ index });
    }
    return;
  }

  bulk(dataInstances) {
    const body = [];
    dataInstances.forEach((dataInstance) => {
      body.push({ index: { _index: this.documentIndex, _id: dataInstance.id } }, dataInstance);
    });
    return elasticClient.bulk({ refresh: true, body });
  }

  addData(dataInstance, type) {
    dataInstance = dataInstance.dataValues;
    console.log('ElasticService -> addData -> dataInstance', dataInstance);
    return elasticClient.create({
      index: this.documentIndex,
      id: `${dataInstance.id}`,
      type,
      body: dataInstance,
    });
  }

  updateData(dataInstance) {
    return elasticClient.update({
      index: this.documentIndex,
      type: '_doc',
      id: dataInstance.id,
      body: {
        doc: {
          ...dataInstance,
        },
      },
    });
  }

  delete(id: string) {
    return elasticClient.deleteByQuery({
      index: this.documentIndex,
      body: {
        query: {
          match: { id },
        },
      },
    });
  }

  async searchIDs(searchProperty: ISearchProperties) {
    console.log('ElasticService -> searchIDs -> searchProperty', searchProperty);
    console.log('ElasticService -> searchIDs -> this.documentIndex', this.documentIndex);

    const { body } = await elasticClient.search({
      index: this.documentIndex,
      body: {
        size: 5,
        from: 0,
        query: {
          query_string: {
            query: `*${searchProperty.input}*`,
            fields: searchProperty.searchFields,
          },
        },
      },
    });
    console.log('ElasticService -> searchIDs -> body', body);

    return body.hits.hits.map((hit) => hit._source.id) as number[];
  }
}

export const elasticServices = {
  cpus: new ElasticService('cpus'),
  gpus: new ElasticService('gpus'),
  games: new ElasticService('games'),
  rams: new ElasticService('rams'),
  setups: new ElasticService('setups'),
  news: new ElasticService('news'),
  ssds: new ElasticService('ssds'),
  hdds: new ElasticService('hdds'),
  motherboards: new ElasticService('motherboards'),
  powersupplies: new ElasticService('powersupplies'),
};
