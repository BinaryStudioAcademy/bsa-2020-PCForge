import React, { ReactElement } from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function HomeIcon(props: SvgIconProps): ReactElement {
  return (
    <SvgIcon {...props} viewBox="0 0 31 31">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="white"
        d="M27.125 11.3307L18.1102 2.31587C16.5969 0.802588 14.1434 0.802587 12.6301 2.31587L3.875 11.071V29.8191H12.9167V22.0691C12.9167 20.6424 14.0733 19.4858 15.5 19.4858C16.9267 19.4858 18.0833 20.6424 18.0833 22.0691V29.8191H27.125V11.3307ZM14.4568 4.14256L6.45833 12.1411V27.2358H10.3333V22.0691C10.3333 19.2156 12.6465 16.9024 15.5 16.9024C18.3535 16.9024 20.6667 19.2156 20.6667 22.0691V27.2358H24.5417V12.4007L16.2835 4.14256C15.7791 3.63813 14.9613 3.63814 14.4568 4.14256Z"
      />
    </SvgIcon>
  );
}
