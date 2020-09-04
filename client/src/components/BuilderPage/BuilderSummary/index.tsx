import React from 'react';
import { Box, Card, CardContent, LinearProgress, Typography } from '@material-ui/core';
import styles from 'components/BuilderPage/BuilderSummary/styles.module.scss';
import { TypeSetup } from 'containers/BuilderPage/reducer';
import ComponentItem from 'components/BuilderPage/BuilderSummary/ComponentItem';
import {
  SpecificationCpu,
  SpecificationGpu,
  SpecificationMotherboard,
  SpecificationPowersupply,
  SpecificationRam,
  SpecificationHdd,
  SpecificationSsd,
} from 'components/BuilderPage/Specifications';

interface IProps {
  setup: TypeSetup;
}

const BuilderSummary = ({ setup }: IProps): JSX.Element => {
  const { cpu, gpu, ram, motherboard, powersupply, hdd, ssd } = setup;
  const isSetupEmpty = !Object.values(setup).some((value) => value);

  const partsCount = Object.values(setup).length;

  const buildProgress =
    (Object.values(setup).reduce((progress, item) => {
      item && (progress += 1);
      return progress;
    }, 0) *
      100) /
    partsCount;

  return (
    <Card className={styles.summaryWrapper}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Build Summary
        </Typography>
        {isSetupEmpty ? (
          <Typography className={styles.noComponents} variant="subtitle1">
            No selected components
          </Typography>
        ) : (
          <Box className={styles.componentWrapper}>
            <ComponentItem
              title={cpu ? cpu.name : ''}
              specification={cpu ? <SpecificationCpu component={cpu} /> : null}
            />
            <ComponentItem
              title={gpu ? gpu.name : ''}
              specification={gpu ? <SpecificationGpu component={gpu} /> : null}
            />
            <ComponentItem
              title={ram ? ram.name : ''}
              specification={ram ? <SpecificationRam component={ram} /> : null}
            />
            <ComponentItem
              title={motherboard ? motherboard.name : ''}
              specification={motherboard ? <SpecificationMotherboard component={motherboard} /> : null}
            />
            <ComponentItem
              title={powersupply ? powersupply.name : ''}
              specification={powersupply ? <SpecificationPowersupply component={powersupply} /> : null}
            />
            <ComponentItem
              title={hdd ? hdd.name : ''}
              specification={hdd ? <SpecificationHdd component={hdd} /> : null}
            />
            <ComponentItem
              title={ssd ? ssd.name : ''}
              specification={ssd ? <SpecificationSsd component={ssd} /> : null}
            />
          </Box>
        )}
        <Box className={styles.progressWrapper}>
          <Typography className={styles.progressTitle} variant="h5" component="h2">
            Build Progress
          </Typography>
          <LinearProgress className={styles.progressBar} variant="determinate" value={buildProgress} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default BuilderSummary;
