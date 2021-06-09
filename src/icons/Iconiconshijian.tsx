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

let Iconiconshijian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64a448 448 0 1 0 0 896A448 448 0 0 0 512 64z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
      <Path
        d="M698.88 537.472a37.632 37.632 0 0 1-37.504 37.504h-174.72a37.44 37.44 0 0 1-36.864-30.592 37.952 37.952 0 0 1-1.664-11.2V295.488c0-20.608 16.896-37.504 37.504-37.504h5.568c20.608 0 37.504 16.896 37.504 37.504v198.912h132.8c20.608 0 37.504 16.896 37.504 37.504v5.568h-0.128z"
        fill={getIconColor(color, 1, '#096DD9')}
      />
    </Svg>
  );
};

Iconiconshijian.defaultProps = {
  size: 18,
};

Iconiconshijian = React.memo ? React.memo(Iconiconshijian) : Iconiconshijian;

export default Iconiconshijian;
