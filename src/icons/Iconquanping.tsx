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

let Iconquanping: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128.768 808.618667l215.552-223.317334a10.666667 10.666667 0 0 1 15.104-0.256l84.48 81.493334-220.074667 227.84h86.954667c5.888 0 10.666667 4.778667 10.666667 10.666666v96h-298.666667v-0.426666H22.101333V712.618667c0-5.888 4.778667-10.666667 10.666667-10.666667h96v106.666667z m766.293333 86.784V713.216c0-5.973333 4.693333-10.666667 10.581334-10.666667h96v298.666667h-0.768v0.853333H712.874667a10.666667 10.666667 0 0 1-10.666667-10.666666v-96h192.853333z m0.597334-681.557334L680.021333 437.162667a10.666667 10.666667 0 0 1-15.104 0.256l-84.394666-81.578667L800.512 128H713.557333a10.666667 10.666667 0 0 1-10.666666-10.581333V21.333333h298.666666v0.341334h0.768V309.76a10.666667 10.666667 0 0 1-10.666666 10.666667h-96v-106.666667zM128 126.037333v182.101334a10.666667 10.666667 0 0 1-10.666667 10.666666H21.333333v-298.666666h0.341334V19.370667H309.76c5.973333 0 10.666667 4.778667 10.666667 10.666666v96H128.085333z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconquanping.defaultProps = {
  size: 18,
};

Iconquanping = React.memo ? React.memo(Iconquanping) : Iconquanping;

export default Iconquanping;
