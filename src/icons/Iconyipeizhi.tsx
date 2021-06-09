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

let Iconyipeizhi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1092 1024" width={size} height={size} {...rest}>
      <Path
        d="M648.533333 651.264l198.656 77.824a17.066667 17.066667 0 0 1 4.778667 29.354667l-51.950933 42.530133 97.6896 111.069867a33.450667 33.450667 0 0 1-3.413334 47.786666 32.768 32.768 0 0 1-22.528 8.874667 35.498667 35.498667 0 0 1-25.941333-11.605333l-98.781867-112.708267-61.6448 50.5856a17.066667 17.066667 0 0 1-27.306666-14.336l-32.768-210.944a17.066667 17.066667 0 0 1 23.210666-18.432zM795.306667 10.24A32.768 32.768 0 0 1 819.2 27.306667l246.442667 426.666666a34.133333 34.133333 0 0 1 0 34.133334L955.733333 686.762667a34.816 34.816 0 0 1-47.104 12.288 33.450667 33.450667 0 0 1-12.288-46.421334l103.082667-181.589333-226.645333-392.533333H319.488L92.842667 471.04l226.645333 391.850667h245.76a34.133333 34.133333 0 1 1 0 68.266666H299.690667a32.768 32.768 0 0 1-26.624-17.066666L23.893333 488.106667a34.133333 34.133333 0 0 1 0-34.133334L273.066667 27.306667a32.768 32.768 0 0 1 29.354666-17.066667h492.885334z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconyipeizhi.defaultProps = {
  size: 18,
};

Iconyipeizhi = React.memo ? React.memo(Iconyipeizhi) : Iconyipeizhi;

export default Iconyipeizhi;
