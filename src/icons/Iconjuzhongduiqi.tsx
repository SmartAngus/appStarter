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

let Iconjuzhongduiqi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M114.13333333 142.4h795.73333334v85.33333333H114.13333333v-85.33333333z m0 441.6h795.73333334v85.33333333H114.13333333v-85.33333333z m170.66666667-226.13333333h454.4v85.33333333H284.8v-85.33333333z m0 438.4h454.4v85.33333333H284.8v-85.33333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconjuzhongduiqi.defaultProps = {
  size: 18,
};

Iconjuzhongduiqi = React.memo ? React.memo(Iconjuzhongduiqi) : Iconjuzhongduiqi;

export default Iconjuzhongduiqi;
