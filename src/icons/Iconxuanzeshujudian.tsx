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

let Iconxuanzeshujudian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1433 1024" width={size} height={size} {...rest}>
      <Path
        d="M175.0016 573.2352a143.9744 143.9744 0 1 1 0-288.0512 143.9744 143.9744 0 0 1 0 288.0512z m217.8048 439.1936a143.9744 143.9744 0 1 1 0-288.0512 143.9744 143.9744 0 0 1 0 288.0512z m865.792-199.7824a143.9744 143.9744 0 1 1 0-288.0512 143.9744 143.9744 0 0 1 0 288.0512z m-164.7616-260.3008a200.704 200.704 0 0 0-36.864 116.224c0 41.984 12.9024 81.1008 34.9184 113.4592H668.3648l-118.784-232.2432H335.1552a200.704 200.704 0 0 0 36.1472-115.2c0-42.8032-13.312-82.5344-36.1472-115.2h333.2096l118.784 233.984 306.688-1.024zM859.136 11.6736h518.3488V184.32c0 31.744-25.8048 57.5488-57.5488 57.5488H801.3824V69.2224c0-31.744 25.8048-57.6512 57.6512-57.6512z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconxuanzeshujudian.defaultProps = {
  size: 18,
};

Iconxuanzeshujudian = React.memo ? React.memo(Iconxuanzeshujudian) : Iconxuanzeshujudian;

export default Iconxuanzeshujudian;
