import React from 'react';
import Box from '@material-ui/core/Box';
import SpecificationField from 'components/BuilderPage/SpecificationField';
import { TypeCpu } from 'common/models/typeCpu';
import { TypeGpu } from 'common/models/typeGpu';
import { TypeRam } from 'common/models/typeRam';
import { TypeMotherboard } from 'common/models/typeMotherboard';
import { TypePowersupplies } from 'common/models/typePowersupplies';
import { TypeHdd } from 'common/models/typeHdd';
import { TypeSsd } from 'common/models/typeSsd';
import { GroupName } from 'containers/BuilderPage/config';
import { TypeStorage } from '../../../common/models/typeStorage';

export const SpecificationCpu = ({ component }: { component: TypeCpu }): JSX.Element => (
  <Box>
    <SpecificationField title="Vertical Segment" value={component.class} />
    <SpecificationField title="Processor Frequency" value={`${component.clockspeed / 1000}GHz`} />
    <SpecificationField title="Count cores" value={component.cores} />
    <SpecificationField title="Socket" value={component.socket.name} />
    <SpecificationField title="TDP" value={component.tdp} />
  </Box>
);

export const SpecificationGpu = ({ component }: { component: TypeGpu }): JSX.Element => (
  <Box>
    <SpecificationField title="Bus interface" value={component.interface} />
    <SpecificationField title="Memory size" value={component.memorySize} />
    <SpecificationField title="OpenGL" value={component.opengl} />
    <SpecificationField title="TDP" value={component.tdp} />
  </Box>
);

export const SpecificationRam = ({ component }: { component: TypeRam }): JSX.Element => (
  <Box>
    <SpecificationField title="Memory size" value={`${component.memorySize}Gb`} />
    <SpecificationField title="Ram Frequency" value={`${component.frequency}MHz`} />
    <SpecificationField title="Ram type" value={component.ramType.name} />
  </Box>
);

export const SpecificationMotherboard = ({ component }: { component: TypeMotherboard }): JSX.Element => (
  <Box>
    <SpecificationField title="Socket" value={component.socket.name} />
    <SpecificationField title="Ram type" value={component.ramType.name} />
    <SpecificationField title="SATA" value={`SATA${component.sata}`} />
    <SpecificationField title="M2" value={component.m2 ? 'available' : 'n/a'} />
  </Box>
);

export const SpecificationPowersupply = ({ component }: { component: TypePowersupplies }): JSX.Element => (
  <Box>
    <SpecificationField title="Power" value={`${component.power}W`} />
  </Box>
);

export const SpecificationHdd = ({ component }: { component: TypeHdd }): JSX.Element => (
  <Box>
    <SpecificationField title="Capacity" value={`${component.capacity}Gb`} />
    <SpecificationField title="Interface SATA" value={`SATA ${component.sata}`} />
    <SpecificationField title="Speed" value={`${component.rpm}RPM`} />
    <SpecificationField title="Form Factor" value={`${component.size}in`} />
    {!!component.ram && <SpecificationField title="On-Board Cache" value={`${component.ram}Mb`} />}
  </Box>
);

export const SpecificationSsd = ({ component }: { component: TypeSsd }): JSX.Element => (
  <Box>
    <SpecificationField title="Capacity" value={`${component.capacity}Gb`} />
    <SpecificationField title="Interface SATA" value={`SATA ${component.sata ? component.sata : 'none'}`} />
    <SpecificationField title="Interface M2" value={component.m2 ? 'yes' : 'no'} />
    <SpecificationField title="Form Factor" value={`${component.size}${component.size < 6 ? 'in' : 'mm'}`} />
  </Box>
);

export const SpecificationStorage = ({ component }: { component: TypeStorage }): JSX.Element => (
  <Box>
    <SpecificationField title="Capacity" value={`${component.capacity}Gb`} />
    <SpecificationField title="Type" value={component.type} />
    <SpecificationField title="Interface SATA" value={`SATA ${component.sata ? component.sata : 'none'}`} />
    <SpecificationField title="Interface M2" value={component.m2 ? 'yes' : 'no'} />
    <SpecificationField title="Form Factor" value={`${component.size}${component.size < 6 ? 'in' : 'mm'}`} />
  </Box>
);

export const SpecificationComponent = {
  [GroupName.cpu]: SpecificationCpu,
  [GroupName.gpu]: SpecificationGpu,
  [GroupName.ram]: SpecificationRam,
  [GroupName.motherboard]: SpecificationMotherboard,
  [GroupName.powersupply]: SpecificationPowersupply,
  [GroupName.hdd]: SpecificationHdd,
  [GroupName.ssd]: SpecificationSsd,
  [GroupName.storage]: SpecificationStorage,
};
