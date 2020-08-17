import React from 'react';
import Box from '@material-ui/core/Box';
import SpecificationField from 'components/BuilderPage/SpecificationField';
import { TypeCpu } from 'common/models/typeCpu';
import { TypeGpu } from 'common/models/typeGpu';
import { TypeRam } from 'common/models/typeRam';
import { TypeMotherboard } from 'common/models/typeMotherboard';
import { TypePowersupplies } from 'common/models/typePowersupplies';

export const SpecificationCpu = ({ cpu }: { cpu: TypeCpu }): JSX.Element => (
  <Box>
    <SpecificationField title="Vertical Segment" value={cpu.class} />
    <SpecificationField title="Processor Frequency" value={`${cpu.clockspeed / 1000}GHz`} />
    <SpecificationField title="Count cores" value={cpu.cores} />
    <SpecificationField title="Socket" value={cpu.socket.name} />
    <SpecificationField title="TDP" value={cpu.tdp} />
  </Box>
);

export const SpecificationGpu = ({ gpu }: { gpu: TypeGpu }): JSX.Element => (
  <Box>
    <SpecificationField title="Bus interface" value={gpu.interface} />
    <SpecificationField title="Memory size" value={gpu.memorySize} />
    <SpecificationField title="OpenGL" value={gpu.opengl} />
    <SpecificationField title="TDP" value={gpu.tdp} />
  </Box>
);

export const SpecificationRam = ({ ram }: { ram: TypeRam }): JSX.Element => (
  <Box>
    <SpecificationField title="Memory size" value={`${ram.memorySize}Gb`} />
    <SpecificationField title="Ram Frequency" value={`${ram.frequency}MHz`} />
    <SpecificationField title="Ram type" value={ram.ramType.name} />
  </Box>
);

export const SpecificationMotherboard = ({ motherboard }: { motherboard: TypeMotherboard }): JSX.Element => (
  <Box>
    <SpecificationField title="Socket" value={motherboard.socket.name} />
    <SpecificationField title="Ram type" value={motherboard.ramType.name} />
  </Box>
);

export const SpecificationPowersupply = ({ powersupply }: { powersupply: TypePowersupplies }): JSX.Element => (
  <Box>
    <SpecificationField title="Power" value={`${powersupply.power}W`} />
  </Box>
);
