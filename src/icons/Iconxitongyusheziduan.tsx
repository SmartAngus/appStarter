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

let Iconxitongyusheziduan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1109 1024" width={size} height={size} {...rest}>
      <Path
        d="M922.538667 485.461333A411.477333 411.477333 0 1 1 802.986667 221.013333l58.197333-58.197333a493.738667 493.738667 0 1 0 134.570667 249.429333l-73.130667 73.130667z m-4.096-251.306666L512.768 639.744l-213.333333-213.333333-58.112 58.197333 213.333333 213.333333 58.112 58.197334 58.197333-58.197334 389.12-389.12 73.045334-73.045333-58.197334-58.197333-56.490666 56.576z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconxitongyusheziduan.defaultProps = {
  size: 18,
};

Iconxitongyusheziduan = React.memo ? React.memo(Iconxitongyusheziduan) : Iconxitongyusheziduan;

export default Iconxitongyusheziduan;
