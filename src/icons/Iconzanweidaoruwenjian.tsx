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

let Iconzanweidaoruwenjian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1108 1024" width={size} height={size} {...rest}>
      <Path
        d="M1104.685589 368.064877c0-24.407671-6.943562-31.407342-31.182904-31.407343H34.731836C10.492493 336.657534 0 343.657205 0 371.627836v547.46126C0 992.298082 31.182904 1024 100.436164 1024h907.292055c69.463671 0 100.436164-31.407342 100.436165-101.137534-3.478795-188.640438-3.478795-370.000658-3.478795-554.797589zM31.393315 280.547945h1017.870027C1108.164384 280.547945 1108.164384 280.547945 1108.164384 225.869151c0-64.722411-27.774247-88.849534-90.294357-88.849535H578.489863c-55.548493 0-55.548493 0-55.548493-54.678794 0-57.961205-27.788274-82.018192-86.549041-82.018192H90.294356C27.774247-3.100055 3.745315 20.816658 0 82.340822v167.585315C0.490959 277.195397 7.434521 280.547945 31.393315 280.547945z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
    </Svg>
  );
};

Iconzanweidaoruwenjian.defaultProps = {
  size: 18,
};

Iconzanweidaoruwenjian = React.memo ? React.memo(Iconzanweidaoruwenjian) : Iconzanweidaoruwenjian;

export default Iconzanweidaoruwenjian;
