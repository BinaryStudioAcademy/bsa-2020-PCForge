import { Client } from '@elastic/elasticsearch';
const elasticNode = process.env.ELASTIC_NODE || 'http://localhost:9200';

export interface ISearchProperties {
  input: string;
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

  addData(dataInstance) {
    dataInstance = dataInstance.dataValues;
    console.log('ElasticService -> addData -> dataInstance', dataInstance);
    return elasticClient.create({
      index: this.documentIndex,
      id: `${dataInstance.id}`,
      type: 'cpu',
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
    const { body } = await elasticClient.search({
      index: this.documentIndex,
      body: {
        size: searchProperty.countValue || 10000,
        query: {
          query_string: {
            query: `*${searchProperty.input}*`,
            fields: searchProperty.searchFields,
          },
        },
      },
    });

    return body.hits.hits.map((hit) => hit._source.id) as number[];
  }
}
