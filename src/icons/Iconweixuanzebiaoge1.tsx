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

let Iconweixuanzebiaoge1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 0h1024v256H0z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
      <Path
        d="M0 0h64v1024H0z"
        fill={getIconColor(color, 1, '#E0E7F5')}
      />
      <Path
        d="M0 960h1024v64H0v-64zM0 0h1024v64H0V0z"
        fill={getIconColor(color, 2, '#E0E7F5')}
      />
      <Path
        d="M960 0h64v1024h-64V0zM64 448h896V512H64v-64z"
        fill={getIconColor(color, 3, '#E0E7F5')}
      />
      <Path
        d="M320 256H384v704h-64V256zM640 256h64v704H640V256z"
        fill={getIconColor(color, 4, '#E0E7F5')}
      />
      <Path
        d="M64 704h896V768H64z"
        fill={getIconColor(color, 5, '#E0E7F5')}
      />
    </Svg>
  );
};

Iconweixuanzebiaoge1.defaultProps = {
  size: 18,
};

Iconweixuanzebiaoge1 = React.memo ? React.memo(Iconweixuanzebiaoge1) : Iconweixuanzebiaoge1;

export default Iconweixuanzebiaoge1;
