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

let Iconzu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M1024 0v72.89368h-170.727411L426.688361 950.637718h170.571211v72.89368H0v-72.89368h170.727411L597.311639 72.89368H426.740428V0z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconzu.defaultProps = {
  size: 18,
};

Iconzu = React.memo ? React.memo(Iconzu) : Iconzu;

export default Iconzu;
