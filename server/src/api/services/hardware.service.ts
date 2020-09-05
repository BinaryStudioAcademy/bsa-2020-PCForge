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

  async getTopComponentsId(component: Component): Promise<Map<number, number>> {
    const topIdMap: Map<number, number> = new Map();
    const setups = await this.setupRepository.getSetups({ count: null, from: null }, null);
    for (const setup of setups.data) {
      const id = setup[component]?.id;
      if (!id && id !== 0) continue;
      if (topIdMap.has(id)) topIdMap.set(id, topIdMap.get(id) + 1);
      else topIdMap.set(id, 1);
    }
    return topIdMap;
  }

  async getTopComponents<T>(component: Component, filter: TypeFilter): Promise<T> {
    const topIdMap = await this.getTopComponentsId(component);
    const idsTop = [...topIdMap.entries()].sort((a, b) => a[1] - b[1]).map((e) => e[0]);

    if (idsTop.length > filter.from) {
      const id = idsTop.slice(filter.from, filter.from + filter.count);
      const topComponents = await this[component]({ ...filter, id });
      const components = {
        ...topComponents,
        data: topComponents.data.sort((a, b) => topIdMap.get(a.id) - topIdMap.get(b.id)),
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

  async getTopStorages(filter: ISsdFilter): Promise<IWithMeta<SsdModel>> {
    const topHddIdMap = await this.getTopComponents<IWithMeta<HddModel>>(Component.hdd, filter);
    const topSsdIdMap = await this.getTopComponents<IWithMeta<SsdModel>>(Component.ssd, filter);
    const storages = await this.getTopComponents<IWithMeta<SsdModel>>(Component.ssd, filter);
    return storages;
  }
}
