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

let Icongaoyu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M725.617778 391.395556l-183.182222-154.168889a50.403556 50.403556 0 0 0-62.008889 0l-183.182223 154.168889c-27.306667 23.324444-7.964444 63.146667 30.72 63.146666h69.973334v285.013334c0 31.288889 25.6 56.888889 56.888889 56.888888h113.777777c31.288889 0 56.888889-25.6 56.888889-56.888888v-284.444445-0.568889h69.404445c38.684444 0 58.026667-39.822222 30.72-63.146666z"
        fill={getIconColor(color, 0, '#E02020')}
      />
    </Svg>
  );
};

Icongaoyu.defaultProps = {
  size: 18,
};

Icongaoyu = React.memo ? React.memo(Icongaoyu) : Icongaoyu;

export default Icongaoyu;
