/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let Iconshangyiyige: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 0h512a256 256 0 0 1 256 256v512a256 256 0 0 1-256 256H256a256 256 0 0 1-256-256V256a256 256 0 0 1 256-256z m16 492.16c22.208 21.76 57.792 21.76 80 0l103.04-104.32v387.2a56.96 56.96 0 0 0 113.92 0V387.84l103.04 104.32c22.208 21.76 57.792 21.76 80 0a58.752 58.752 0 0 0 0-81.28l-198.4-200.96A56.192 56.192 0 0 0 512 191.36a53.76 53.76 0 0 0-40.96 18.56L272 410.88a58.752 58.752 0 0 0 0 81.28z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconshangyiyige.defaultProps = {
  size: 18,
};

Iconshangyiyige = React.memo ? React.memo(Iconshangyiyige) : Iconshangyiyige;

export default Iconshangyiyige;
