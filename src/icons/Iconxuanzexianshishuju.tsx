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

let Iconxuanzexianshishuju: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1194 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 1024H341.333333a64 64 0 0 1-53.162666-99.242667l256-384a64 64 0 0 1 106.325333 0l256 384A64 64 0 0 1 853.333333 1024z m-392.362666-128h272.725333L597.333333 691.2l-136.362666 204.8zM1109.333333 768h-128a64 64 0 1 1 0-128h64v-512H149.333333v512h64a64 64 0 1 1 0 128H85.333333a64 64 0 0 1-64-64V64A64 64 0 0 1 85.333333 0h1024a64 64 0 0 1 64 64v640A64 64 0 0 1 1109.333333 768z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconxuanzexianshishuju.defaultProps = {
  size: 18,
};

Iconxuanzexianshishuju = React.memo ? React.memo(Iconxuanzexianshishuju) : Iconxuanzexianshishuju;

export default Iconxuanzexianshishuju;
