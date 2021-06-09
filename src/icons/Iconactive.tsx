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

let Iconactive: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
      <Path
        d="M352.64 458.24l120.64 120.704 259.264-259.2 60.352 60.352-259.2 259.2-57.6 57.6-60.288-60.352L295.04 515.904l57.6-57.6z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconactive.defaultProps = {
  size: 18,
};

Iconactive = React.memo ? React.memo(Iconactive) : Iconactive;

export default Iconactive;
