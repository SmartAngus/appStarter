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

let Iconxiaduiqi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M449.194667 76.970667v686.250666a5.461333 5.461333 0 0 1-5.461334 5.461334H246.016a5.461333 5.461333 0 0 1-5.461333-5.461334V76.970667c0-2.986667 2.474667-5.461333 5.461333-5.461334H443.733333c2.986667 0 5.461333 2.56 5.461334 5.461334z m331.264 223.914666v462.336a5.461333 5.461333 0 0 1-5.461334 5.461334H577.28a5.461333 5.461333 0 0 1-5.461333-5.461334V301.226667c0-3.072 2.474667-5.461333 5.461333-5.461334h197.717333a5.12 5.12 0 0 1 5.461334 5.12z m210.261333 614.997334a36.693333 36.693333 0 0 1-36.864 36.608H70.144a36.693333 36.693333 0 0 1 0-73.216h883.712a36.437333 36.437333 0 0 1 36.864 36.608z"
        fill={getIconColor(color, 0, '#2E4257')}
      />
    </Svg>
  );
};

Iconxiaduiqi.defaultProps = {
  size: 18,
};

Iconxiaduiqi = React.memo ? React.memo(Iconxiaduiqi) : Iconxiaduiqi;

export default Iconxiaduiqi;
