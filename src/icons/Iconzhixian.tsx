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

let Iconzhixian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M895.999451 0a127.999817 127.999817 0 1 1-65.060478 238.262517L238.263248 830.938242a127.999817 127.999817 0 1 1-45.202221-45.202222L785.736752 193.060296A127.999817 127.999817 0 0 1 895.999451 0z"
        fill={getIconColor(color, 0, '#5A6979')}
      />
    </Svg>
  );
};

Iconzhixian.defaultProps = {
  size: 18,
};

Iconzhixian = React.memo ? React.memo(Iconzhixian) : Iconzhixian;

export default Iconzhixian;
