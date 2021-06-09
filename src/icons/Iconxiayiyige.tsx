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

let Iconxiayiyige: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 1024h512a256 256 0 0 0 256-256V256a256 256 0 0 0-256-256H256a256 256 0 0 0-256 256v512a256 256 0 0 0 256 256z m16-492.16a57.152 57.152 0 0 1 80 0l103.04 104.32V248.96a56.96 56.96 0 0 1 113.92 0v387.2l103.04-104.32a57.152 57.152 0 0 1 80 0c21.76 22.72 21.76 58.56 0 81.28l-198.4 200.96a56.192 56.192 0 0 1-41.6 18.56 53.76 53.76 0 0 1-40.96-18.56L272 613.12a58.752 58.752 0 0 1 0-81.28z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconxiayiyige.defaultProps = {
  size: 18,
};

Iconxiayiyige = React.memo ? React.memo(Iconxiayiyige) : Iconxiayiyige;

export default Iconxiayiyige;
