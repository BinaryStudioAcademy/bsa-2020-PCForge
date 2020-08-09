import React, { ReactElement } from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function AdminToolsIcon(props: SvgIconProps): ReactElement {
  return (
    <SvgIcon {...props} width="30" height="30" viewBox="0 0 30 30">
      <path
        fill="white"
        d="M11.2674 13.75C10.577 13.75 10.0174 14.3096 10.0174 15C10.0174 15.6904 10.577 16.25 11.2674 16.25L20.2146 16.25L16.1612 20.3034L17.9289 22.0712L25 15.0001L17.9289 7.92908L16.1612 9.69684L20.2143 13.75L11.2674 13.75Z"
      />
      <path
        fill="white"
        d="M12.5 5L12.5 7.5L7.50001 7.5L7.50001 22.5L12.5 22.5L12.5 25L7.50001 25C6.11929 25 5.00001 23.8807 5.00001 22.5L5.00001 7.5C5.00001 6.11929 6.1193 5 7.50001 5L12.5 5Z"
      />
    </SvgIcon>
  );
}