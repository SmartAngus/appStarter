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

let Iconshebeiguanli: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M100.949333 0h403.029334c55.637333 0 100.778667 45.141333 100.778666 100.693333v806.144a100.693333 100.693333 0 0 1-100.693333 100.693334H100.864a100.693333 100.693333 0 0 1-100.693333-100.693334V100.693333C0.170667 45.141333 45.226667 0 100.864 0z m201.557334 503.808a151.125333 151.125333 0 1 0 0-302.250667 151.125333 151.125333 0 0 0 0 302.250667zM151.381333 705.28v100.778667h302.250667v-100.693334H151.381333z m704.853334-463.445333L687.104 126.549333 772.266667 1.621333l180.053333 122.88c34.474667 23.381333 55.04 62.293333 55.04 104.021334v551.338666c0 41.386667-20.224 80.128-54.272 103.68l-180.394667 124.672-85.930666-124.330666 169.472-117.248v-524.8z"
        fill={getIconColor(color, 0, '#A6A6A6')}
      />
    </Svg>
  );
};

Iconshebeiguanli.defaultProps = {
  size: 18,
};

Iconshebeiguanli = React.memo ? React.memo(Iconshebeiguanli) : Iconshebeiguanli;

export default Iconshebeiguanli;
