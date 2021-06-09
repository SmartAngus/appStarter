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

let Iconwanchenggongxu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0.000251 511.780665a511.780665 511.780665 0 1 0 1023.561331 0 511.780665 511.780665 0 0 0-1023.561331 0z"
        fill={getIconColor(color, 0, '#52C41A')}
      />
      <Path
        d="M436.183601 753.34114c-14.622305 0-29.244609-5.556476-40.430673-16.669428L244.70452 585.550193a57.173211 57.173211 0 0 1 80.788234-80.788234l110.690847 110.690847 261.739254-261.739255a57.173211 57.173211 0 0 1 80.715122 80.861345L476.614273 736.671712a57.392546 57.392546 0 0 1-40.430672 16.669428z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconwanchenggongxu.defaultProps = {
  size: 18,
};

Iconwanchenggongxu = React.memo ? React.memo(Iconwanchenggongxu) : Iconwanchenggongxu;

export default Iconwanchenggongxu;
