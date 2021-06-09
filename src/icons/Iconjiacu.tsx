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

let Iconjiacu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M140 57h419.5c91.5 0 162.9 21.8 214.2 65.4 47.9 41.1 71.8 96.2 71.8 165.5 0 50.5-12.4 94.1-37.2 130.9-23.9 32.5-59 57.7-105.2 75.7 59.9 11.1 105.2 35.5 136 73.1C869 604.4 884 653.5 884 715.1c0 92.4-31.7 160.4-94.9 204-53.9 35.9-130 53.9-228.3 53.9H140V57z m150.1 123.2v261.7h229.6c62.4 0 107.8-10.7 136-32.1 26.5-22.2 39.8-56.9 39.8-103.9 0-43.6-13.3-75.3-39.8-94.9-28.2-20.5-72.7-30.8-133.4-30.8H290.1z m0 384.9v284.8H539c57.3 0 101.8-9 133.4-26.9 41.1-23.1 61.6-59.8 61.6-110.3 0-52.2-15-89.8-44.9-112.9-30.8-23.1-79.5-34.6-146.2-34.6H290.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconjiacu.defaultProps = {
  size: 18,
};

Iconjiacu = React.memo ? React.memo(Iconjiacu) : Iconjiacu;

export default Iconjiacu;
