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

let Iconyouduiqi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M76.970667 574.805333h686.250666c2.986667 0 5.461333 2.474667 5.461334 5.461334v197.717333a5.461333 5.461333 0 0 1-5.461334 5.461333H76.970667a5.461333 5.461333 0 0 1-5.461334-5.461333V580.266667c0-2.986667 2.56-5.461333 5.461334-5.461334z m223.914666-331.264h462.336c2.986667 0 5.461333 2.56 5.461334 5.461334v197.717333a5.461333 5.461333 0 0 1-5.461334 5.461333H301.226667a5.461333 5.461333 0 0 1-5.461334-5.461333V249.002667a5.12 5.12 0 0 1 5.12-5.461334zM915.882667 33.28a36.693333 36.693333 0 0 1 36.608 36.864v883.712a36.693333 36.693333 0 0 1-73.216 0V70.144a36.437333 36.437333 0 0 1 36.608-36.864z"
        fill={getIconColor(color, 0, '#2E4257')}
      />
    </Svg>
  );
};

Iconyouduiqi.defaultProps = {
  size: 18,
};

Iconyouduiqi = React.memo ? React.memo(Iconyouduiqi) : Iconyouduiqi;

export default Iconyouduiqi;
