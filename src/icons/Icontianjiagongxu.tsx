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

let Icontianjiagongxu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.133772 2.716807C229.137078 2.716807 0.531549 231.322336 0.531549 513.358404c0 281.996693 228.644903 510.720345 510.759719 510.720344 282.154189 0 510.759719-228.605529 510.759718-510.720344C1021.89349 231.322336 793.248587 2.677433 511.133772 2.677433z m228.487407 510.641597c0 22.482562-18.190795 40.830853-40.830853 40.830853h-146.786327v146.786326a40.830853 40.830853 0 1 1-81.701081 0v-146.786326H323.634714a40.830853 40.830853 0 1 1 0-81.701081h146.786326V325.819972a40.830853 40.830853 0 1 1 81.701081 0v146.786326h146.786327c22.403814 0 40.712731 18.230169 40.712731 40.752106z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Icontianjiagongxu.defaultProps = {
  size: 18,
};

Icontianjiagongxu = React.memo ? React.memo(Icontianjiagongxu) : Icontianjiagongxu;

export default Icontianjiagongxu;
