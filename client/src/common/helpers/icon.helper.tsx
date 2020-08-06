import React, { ReactElement } from 'react';
import * as Icons from '@material-ui/icons';

interface IIcons {
  [k: string]: React.FC;
}

export function getIcon(name: string): ReactElement {
  const IconTag = (Icons as IIcons)[name];
  return <IconTag />;
}
