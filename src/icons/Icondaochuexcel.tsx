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

let Icondaochuexcel: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 0h1024v256H0z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
      <Path
        d="M0 0h64v1024H0z"
        fill={getIconColor(color, 1, '#096DD9')}
      />
      <Path
        d="M0 960h1024v64H0v-64zM0 0h1024v64H0V0z"
        fill={getIconColor(color, 2, '#096DD9')}
      />
      <Path
        d="M960 0h64v1024h-64V0zM64 448h896v64H64V448z"
        fill={getIconColor(color, 3, '#096DD9')}
      />
      <Path
        d="M320 256h64v704H320V256z m320 0h64v704h-64V256z"
        fill={getIconColor(color, 4, '#096DD9')}
      />
      <Path
        d="M64 704h896v64H64z"
        fill={getIconColor(color, 5, '#096DD9')}
      />
    </Svg>
  );
};

Icondaochuexcel.defaultProps = {
  size: 18,
};

Icondaochuexcel = React.memo ? React.memo(Icondaochuexcel) : Icondaochuexcel;

export default Icondaochuexcel;
