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

let Iconjinrubianjijiemian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1194 1024" width={size} height={size} {...rest}>
      <Path
        d="M77.226667 175.786667h653.141333c42.069333 0 76.202667-38.229333 76.202667-85.333334 0-46.933333-34.048-85.162667-76.032-85.162666H77.226667c-41.984 0-76.202667 38.144-76.202667 85.248 0 47.018667 34.133333 85.162667 76.202667 85.162666z m9.045333 421.376h1022.122667a85.162667 85.162667 0 1 0 0-170.325334H86.272a85.162667 85.162667 0 1 0 0 170.325334z m1022.122667 251.136H86.272a85.162667 85.162667 0 1 0 0 170.325333h1022.122667a85.162667 85.162667 0 1 0 0-170.325333z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconjinrubianjijiemian.defaultProps = {
  size: 18,
};

Iconjinrubianjijiemian = React.memo ? React.memo(Iconjinrubianjijiemian) : Iconjinrubianjijiemian;

export default Iconjinrubianjijiemian;
