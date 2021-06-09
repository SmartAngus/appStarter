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

let IconCsVdaoru: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M921.578113 921.602432H102.397568V102.421887h358.391488V0.024319H102.397568A102.397568 102.397568 0 0 0 0 102.421887v819.180545A102.397568 102.397568 0 0 0 102.397568 1024h819.180545a102.397568 102.397568 0 0 0 102.397568-102.397568V563.210944h-102.397568v358.391488zM383.99088 320.144717v266.553669a53.310734 53.310734 0 0 0 4.287898 20.287518 53.310734 53.310734 0 0 0 28.799316 28.799316c6.399848 2.687936 13.247685 4.159901 20.22352 4.2239h266.553669a53.310734 53.310734 0 0 0 0-106.621468H566.386548l441.973503-441.973503A53.502729 53.502729 0 1 0 932.585851 15.703947L490.612348 457.67745v-137.596732a53.310734 53.310734 0 0 0-106.621468 0z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

IconCsVdaoru.defaultProps = {
  size: 18,
};

IconCsVdaoru = React.memo ? React.memo(IconCsVdaoru) : IconCsVdaoru;

export default IconCsVdaoru;
