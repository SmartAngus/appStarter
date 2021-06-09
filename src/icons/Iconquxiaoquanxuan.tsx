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

let Iconquxiaoquanxuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M982.372592 511.995246c22.966644 0 41.617899 18.13926 41.6179 40.593909v430.807428a40.813335 40.813335 0 0 1-41.6179 40.593909H407.401931A41.105904 41.105904 0 0 1 365.71089 983.396583c0-22.381506 18.651255-40.520767 41.617899-40.520767h533.425904V552.589155c0-22.454649 18.651255-40.593909 41.691041-40.593909zM790.740086 39.131065c28.671734 0.073142 57.782321 30.939141 57.782321 57.928605v693.168421c0 29.256871-29.183729 57.782321-57.782321 57.855463H97.132812c-27.20889-0.146284-57.782321-28.525449-57.78232-57.855463V97.05967c0-27.062606 30.57343-57.782321 57.78232-57.78232z m-15.359857 73.142178l-662.887559 0.073142v662.668133H775.307086v-662.668133z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconquxiaoquanxuan.defaultProps = {
  size: 18,
};

Iconquxiaoquanxuan = React.memo ? React.memo(Iconquxiaoquanxuan) : Iconquxiaoquanxuan;

export default Iconquxiaoquanxuan;
