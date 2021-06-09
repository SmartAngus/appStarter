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

let Iconshu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M772.48785066-11.37777813m0 91.02222293l0 864.7111104q0 91.02222187-91.02222187 91.02222293l-364.0888896 0q-91.02222187 0-91.02222187-91.02222293l0-864.7111104q0-91.02222187 91.02222187-91.02222293l364.0888896 0q91.02222187 0 91.02222187 91.02222293Z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconshu.defaultProps = {
  size: 18,
};

Iconshu = React.memo ? React.memo(Iconshu) : Iconshu;

export default Iconshu;
