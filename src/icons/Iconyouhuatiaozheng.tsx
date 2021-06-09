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

let Iconyouhuatiaozheng: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M880.32 232.448L560.192 45.12a95.68 95.68 0 0 0-96.64 0L143.68 232.448A96.64 96.64 0 0 0 96 315.904v397.632c0 34.816 18.624 66.944 48.704 84.032l320 181.952c29.312 16.64 65.28 16.64 94.528 0l320-181.952c30.208-17.216 48.768-49.28 48.768-84.032V315.904a96.64 96.64 0 0 0-47.68-83.456zM864 713.6a32.192 32.192 0 0 1-16.256 28.032l-320 181.952a31.744 31.744 0 0 1-31.488 0l-320-181.952a32.192 32.192 0 0 1-16.256-28.032V315.904c0-11.456 6.08-22.08 15.872-27.776l319.872-187.392a31.808 31.808 0 0 1 32.192 0l320.192 187.392c9.792 5.76 15.872 16.32 15.872 27.776v397.632zM512 320a192 192 0 1 0 0 384 192 192 0 0 0 0-384z m0 320a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconyouhuatiaozheng.defaultProps = {
  size: 18,
};

Iconyouhuatiaozheng = React.memo ? React.memo(Iconyouhuatiaozheng) : Iconyouhuatiaozheng;

export default Iconyouhuatiaozheng;
