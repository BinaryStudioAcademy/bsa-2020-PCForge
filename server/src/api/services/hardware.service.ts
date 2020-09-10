import { IWithMeta } from '../../data/repositories/base.repository';
import { CpuRepository } from '../../data/repositories/cpu.repository';
import { GpuRepository } from '../../data/repositories/gpu.repository';
import { RamRepository } from '../../data/repositories/ram.repository';
import { HddRepository } from '../../data/repositories/hdd.repository';
import { SsdRepository } from '../../data/repositories/ssd.repository';
import { MotherboardRepository } from '../../data/repositories/motherboard.repository';
import { PowerSupplyRepository } from '../../data/repositories/powerSupply.repository';
import { SetupRepository } from '../../data/repositories/setup.repository';
import { IGpuFilter } from '../../data/repositories/filters/gpu.filter';
import { ICpuFilter } from '../../data/repositories/filters/cpu.filter';
import { IRamFilter } from '../../data/repositories/filters/ram.filter';
import { IMotherboardFilter } from '../../data/repositories/filters/motherboard.filter';
import { IPowerSupplyFilter } from '../../data/repositories/filters/powerSupply.filter';
import { IHddFilter } from '../../data/repositories/filters/hdd.filter';
import { ISsdFilter } from '../../data/repositories/filters/ssd.filter';
import { CpuModel } from '../../data/models/cpu';
import { GpuModel } from '../../data/models/gpu';
import { RamModel } from '../../data/models/ram';
import { MotherboardModel } from '../../data/models/motherboard';
import { PowerSupplyModel } from '../../data/models/powersupply';
import { HddModel } from '../../data/models/hdd';
import { SsdModel } from '../../data/models/ssd';
import { IStorageFilter } from '../../data/repositories/filters/storage.filter';

enum Component {
  cpu = 'cpu',
  gpu = 'gpu',
  ram = 'ram',
  hdd = 'hdd',
  ssd = 'ssd',
  motherboard = 'motherboard',
  powerSupply = 'powerSupply',
}

type TypeFilter =
  | ICpuFilter
  | IGpuFilter
  | IRamFilter
  | IMotherboardFilter
  | IPowerSupplyFilter
  | IHddFilter
  | ISsdFilter;

export class HardwareService {
  constructor(
    private cpuRepository: CpuRepository,
    private gpuRepository: GpuRepository,
    private ramRepository: RamRepository,
    private motherboardRepository: MotherboardRepository,
    private powerSupplyRepository: PowerSupplyRepository,
    private hddRepository: HddRepository,
    private ssdRepository: SsdRepository,
    private setupRepository: SetupRepository
  ) {}

  [Component.cpu] = this.cpuRepository.getAllCpus.bind(this.cpuRepository);
  [Component.gpu] = this.gpuRepository.getAllGpus.bind(this.gpuRepository);
  [Component.ram] = this.ramRepository.getAllRams.bind(this.ramRepository);
  [Component.hdd] = this.hddRepository.getAllHdds.bind(this.hddRepository);
  [Component.ssd] = this.ssdRepository.getAllSsds.bind(this.ssdRepository);
  [Component.motherboard] = this.motherboardRepository.getAllMotherboards.bind(this.motherboardRepository);
  [Component.powerSupply] = this.powerSupplyRepository.getAllPowerSupplies.bind(this.powerSupplyRepository);

  async getTopComponentsId(component: Component): Promise<Map<{ id: number; component: Component }, number>> {
    const topIdMap: Map<{ id: number; component: Component }, number> = new Map();
    const setups = await this.setupRepository.getAll(null, { count: null, from: null });
    for (const setup of setups.data) {
      const id = setup[component]?.id;
      if (!id && id !== 0) continue;
      if (topIdMap.has({ id, component })) topIdMap.set({ id, component }, topIdMap.get({ id, component }) + 1);
      else topIdMap.set({ id, component }, 1);
    }
    return topIdMap;
  }

  async getTopComponents<T>(component: Component, filter: TypeFilter): Promise<T> {
    const topIdMap = await this.getTopComponentsId(component);
    const idsTop = [...topIdMap.entries()].sort((a, b) => a[1] - b[1]).map((e) => e[0].id);

    if (idsTop.length > filter.from) {
      const id = idsTop.slice(filter.from, filter.from + filter.count);
      const topComponents = await this[component]({ ...filter, id });
      const components = {
        ...topComponents,
        data: topComponents.data.sort(
          (a, b) => topIdMap.get({ id: a.id, component }) - topIdMap.get({ id: b.id, component })
        ),
      };
      if (id.length < filter.count) {
        const addComponents = await this[component]({
          ...filter,
          excludedId: idsTop,
          from: 0,
          count: filter.count - id.length,
        });
        components.meta.countAfterFiltering =
          components.meta.countAfterFiltering + addComponents.meta.countAfterFiltering;
        components.data = components.data.concat(addComponents.data);
      }
      return components;
    } else {
      const components = await this[component]({
        ...filter,
        excludedId: idsTop,
        from: filter.from - idsTop.length,
      });
      return components;
    }
  }

  async getTopCpus(filter: ICpuFilter): Promise<IWithMeta<CpuModel>> {
    const cpus = await this.getTopComponents<IWithMeta<CpuModel>>(Component.cpu, filter);
    return cpus;
  }

  async getTopGpus(filter: IGpuFilter): Promise<IWithMeta<GpuModel>> {
    const gpus = await this.getTopComponents<IWithMeta<GpuModel>>(Component.gpu, filter);
    return gpus;
  }

  async getTopRams(filter: IRamFilter): Promise<IWithMeta<RamModel>> {
    const rams = await this.getTopComponents<IWithMeta<RamModel>>(Component.ram, filter);
    return rams;
  }

  async getTopMotherboards(filter: IMotherboardFilter): Promise<IWithMeta<MotherboardModel>> {
    const motherboards = await this.getTopComponents<IWithMeta<MotherboardModel>>(Component.motherboard, filter);
    return motherboards;
  }

  async getTopPowerSupplies(filter: IPowerSupplyFilter): Promise<IWithMeta<PowerSupplyModel>> {
    const powerSupplies = await this.getTopComponents<IWithMeta<PowerSupplyModel>>(Component.powerSupply, filter);
    return powerSupplies;
  }

  async getTopHdds(filter: IHddFilter): Promise<IWithMeta<HddModel>> {
    const hdds = await this.getTopComponents<IWithMeta<HddModel>>(Component.hdd, filter);
    return hdds;
  }

  async getTopSsds(filter: ISsdFilter): Promise<IWithMeta<SsdModel>> {
    const ssds = await this.getTopComponents<IWithMeta<SsdModel>>(Component.ssd, filter);
    return ssds;
  }

  async getStorages(
    filter: ISsdFilter,
    excludedSsdId: number[],
    excludedHddId: number[],
    from: number,
    count: number
  ): Promise<IWithMeta<SsdModel>> {
    const countSsd = Math.floor(count / 2);
    const countHdd = count - countSsd;
    let ssds = await this[Component.ssd]({
      ...filter,
      excludedId: excludedSsdId,
      from: 0,
      count: countSsd,
    });
    let hdds = await this[Component.hdd]({
      ...filter,
      excludedId: excludedSsdId,
      from: 0,
      count: countHdd,
    });
    if (ssds.data.length < countSsd && hdds.data.length === countHdd) {
      hdds = await this[Component.hdd]({
        ...filter,
        excludedId: excludedSsdId,
        from: 0,
        count: count - ssds.data.length,
      });
    } else if (ssds.data.length === countSsd && hdds.data.length < countHdd) {
      ssds = await this[Component.ssd]({
        ...filter,
        excludedId: excludedSsdId,
        from: 0,
        count: count - hdds.data.length,
      });
    }
    for (const ssd of ssds.data) {
      ssd.dataValues.type = Component.ssd;
    }
    const storages = {
      meta: {
        globalCount: ssds.meta.globalCount + hdds.meta.globalCount,
        countAfterFiltering: ssds.meta.countAfterFiltering + hdds.meta.countAfterFiltering,
      },
      data: [
        ...ssds.data.map((e) => {
          e.setDataValue('type', Component.ssd);
          return e;
        }),
        ...hdds.data.map((e) => {
          e.setDataValue('type', Component.hdd);
          return e;
        }),
      ],
    };
    return storages;
  }

  addTypeAndM2(data, type: Component): SsdModel[] {
    const ssdData = data.map((e) => {
      e.setDataValue('type', type);
      if (type === Component.hdd) e.setDataValue('m2', false);
      return e;
    });
    return ssdData;
  }

  async getTopStorages(filter: IStorageFilter): Promise<IWithMeta<SsdModel>> {
    if (filter.type === Component.ssd) {
      const storages = await this.getTopSsds(filter);
      return {
        ...storages,
        data: this.addTypeAndM2(storages.data, Component.ssd),
      };
    }

    if (filter.type === Component.hdd) {
      const storages = await this.getTopHdds(filter);
      return {
        ...storages,
        data: this.addTypeAndM2(storages.data, Component.hdd),
      };
    }

    const topSsdIdMap = await this.getTopComponentsId(Component.ssd);
    const topHddIdMap = await this.getTopComponentsId(Component.hdd);
    const topStoragesIdMap = new Map([...topHddIdMap, ...topSsdIdMap].sort((a, b) => a[1] - b[1]));

    if (topStoragesIdMap.size > filter.from) {
      const topIds = [...topStoragesIdMap].slice(filter.from, filter.from + filter.count).map((e) => e[0]);
      const ssd = await this[Component.ssd]({
        ...filter,
        id: topIds.filter((e) => e.component === Component.ssd).map((e) => e.id),
      });
      const ssdStorage = {
        meta: ssd.meta,
        data: ssd.data.map((e) => {
          e.setDataValue('type', Component.ssd);
          return e;
        }),
      };
      const hdd = await this[Component.hdd]({
        ...filter,
        id: topIds.filter((e) => e.component === Component.hdd).map((e) => e.id),
      });
      const hddStorage = {
        meta: hdd.meta,
        data: hdd.data.map((e) => {
          e.setDataValue('type', Component.hdd);
          return e;
        }),
      };
      const storages = {
        meta: {
          globalCount: ssdStorage.meta.globalCount + hddStorage.meta.globalCount,
          countAfterFiltering: ssdStorage.meta.countAfterFiltering + hddStorage.meta.countAfterFiltering,
        },
        data: ssdStorage.data.concat(hddStorage.data),
      };
      if (topIds.length < filter.count) {
        const addStorages = await this.getStorages(
          filter,
          [...topSsdIdMap].map((e) => e[0].id),
          [...topHddIdMap].map((e) => e[0].id),
          0,
          filter.count - topIds.length
        );
        storages.meta.countAfterFiltering = storages.meta.countAfterFiltering + addStorages.meta.countAfterFiltering;
        storages.data = storages.data.concat(addStorages.data);
      }
      return storages;
    } else {
      const storages = await this.getStorages(
        filter,
        [...topSsdIdMap].map((e) => e[0].id),
        [...topHddIdMap].map((e) => e[0].id),
        filter.from - topStoragesIdMap.size,
        filter.count
      );
      return storages;
    }
  }
}
