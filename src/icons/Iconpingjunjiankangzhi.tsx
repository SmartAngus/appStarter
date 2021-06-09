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

let Iconpingjunjiankangzhi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1025 1024" width={size} height={size} {...rest}>
      <Path
        d="M733.2256 0H331.5616A292.48 292.48 0 0 0 39.3376 292.16v99.584a28.544 28.544 0 1 0 57.088 0V292.16A235.328 235.328 0 0 1 331.6256 57.088h401.664a235.328 235.328 0 0 1 235.072 235.072v401.728a235.328 235.328 0 0 1-235.072 235.072H331.5616a235.328 235.328 0 0 1-235.136-235.072V574.528H212.6496a28.544 28.544 0 0 0 25.984-16.768l26.048-57.6 107.328 261.504a28.544 28.544 0 0 0 53.504-1.92l139.008-419.008 58.496 206.912c3.456 12.288 14.72 20.8 27.456 20.8h224.64a28.544 28.544 0 1 0 0-57.152h-203.008L594.0896 235.712a28.544 28.544 0 0 0-54.592-1.28l-144 434.24L292.2016 417.28a28.544 28.544 0 0 0-52.416-0.896l-45.696 101.056H29.9936a28.544 28.544 0 1 0 0 57.088h9.344v119.36a292.48 292.48 0 0 0 292.224 292.16h401.664A292.48 292.48 0 0 0 1025.4496 693.888V292.16A292.48 292.48 0 0 0 733.2256 0z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconpingjunjiankangzhi.defaultProps = {
  size: 18,
};

Iconpingjunjiankangzhi = React.memo ? React.memo(Iconpingjunjiankangzhi) : Iconpingjunjiankangzhi;

export default Iconpingjunjiankangzhi;
