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

let Iconzuoduiqi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M947.029333 449.194667H260.778667a5.461333 5.461333 0 0 1-5.461334-5.461334V246.016c0-2.986667 2.474667-5.461333 5.461334-5.461333h686.250666c2.986667 0 5.461333 2.474667 5.461334 5.461333V443.733333a5.461333 5.461333 0 0 1-5.461334 5.461334zM723.114667 780.458667H260.778667a5.461333 5.461333 0 0 1-5.461334-5.461334V577.28c0-2.986667 2.474667-5.461333 5.461334-5.461333H722.773333c3.072 0 5.461333 2.474667 5.461334 5.461333v197.717333a5.12 5.12 0 0 1-5.12 5.461334zM108.117333 990.72a36.693333 36.693333 0 0 1-36.608-36.864V70.144a36.693333 36.693333 0 0 1 73.216 0v883.712a36.437333 36.437333 0 0 1-36.608 36.864z"
        fill={getIconColor(color, 0, '#2E4257')}
      />
    </Svg>
  );
};

Iconzuoduiqi.defaultProps = {
  size: 18,
};

Iconzuoduiqi = React.memo ? React.memo(Iconzuoduiqi) : Iconzuoduiqi;

export default Iconzuoduiqi;
