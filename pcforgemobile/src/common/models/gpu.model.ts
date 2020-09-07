export interface Gpu {
    id: number;
    name: string;
    interface: string;
    memorySize: number;
    coreClocks: number;
    opengl: string;
    tdp: number;
    performance: number;
    createdAt: Date;
    updatedAt: Date;
}
  
export interface GpuCreationAttributes {
    name: string;
    interface: string;
    memorySize: number;
    coreClocks: number;
    opengl: string;
    tdp: number;
    performance: number;
}
  