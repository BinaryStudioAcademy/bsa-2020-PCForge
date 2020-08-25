import React from 'react';
import Box from '@material-ui/core/Box';
import SpecificationField from 'components/BuilderPage/SpecificationField';
import { TypeCpu } from 'common/models/typeCpu';
import { TypeGpu } from 'common/models/typeGpu';
import { TypeRam } from 'common/models/typeRam';
import { TypeMotherboard } from 'common/models/typeMotherboard';
import { TypePowersupplies } from 'common/models/typePowersupplies';
import { GroupName } from 'containers/BuilderPage/config';

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
  </Box>
);

export const SpecificationPowersupply = ({ component }: { component: TypePowersupplies }): JSX.Element => (
  <Box>
    <SpecificationField title="Power" value={`${component.power}W`} />
  </Box>
);

export const SpecificationComponent = {
  [GroupName.cpu]: SpecificationCpu,
  [GroupName.gpu]: SpecificationGpu,
  [GroupName.ram]: SpecificationRam,
  [GroupName.motherboard]: SpecificationMotherboard,
  [GroupName.powersupply]: SpecificationPowersupply,
};
