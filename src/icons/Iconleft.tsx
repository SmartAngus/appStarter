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

let Iconleft: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 117.76h1024v102.4H0zM0 348.16h614.4v102.4H0zM0 578.56h1024v102.4H0zM0 808.96h614.4v102.4H0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconleft.defaultProps = {
  size: 18,
};

Iconleft = React.memo ? React.memo(Iconleft) : Iconleft;

export default Iconleft;
