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

let Iconshangduiqi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M574.805333 947.029333V260.778667c0-2.986667 2.474667-5.461333 5.461334-5.461334h197.717333c2.986667 0 5.461333 2.474667 5.461333 5.461334v686.250666a5.461333 5.461333 0 0 1-5.461333 5.461334H580.266667a5.461333 5.461333 0 0 1-5.461334-5.461334zM243.541333 723.114667V260.778667c0-2.986667 2.56-5.461333 5.461334-5.461334h197.717333c2.986667 0 5.461333 2.474667 5.461333 5.461334V722.773333a5.461333 5.461333 0 0 1-5.461333 5.461334H249.002667a5.12 5.12 0 0 1-5.461334-5.12zM33.28 108.117333A36.693333 36.693333 0 0 1 70.144 71.509333h883.712a36.693333 36.693333 0 0 1 0 73.216H70.144a36.437333 36.437333 0 0 1-36.864-36.608z"
        fill={getIconColor(color, 0, '#2E4257')}
      />
    </Svg>
  );
};

Iconshangduiqi.defaultProps = {
  size: 18,
};

Iconshangduiqi = React.memo ? React.memo(Iconshangduiqi) : Iconshangduiqi;

export default Iconshangduiqi;
