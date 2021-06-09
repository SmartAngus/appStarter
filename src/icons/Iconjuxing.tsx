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

let Iconjuxing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 0m36.571429 0l950.857142 0q36.571429 0 36.571429 36.571429l0 950.857142q0 36.571429-36.571429 36.571429l-950.857142 0q-36.571429 0-36.571429-36.571429l0-950.857142q0-36.571429 36.571429-36.571429Z"
        fill={getIconColor(color, 0, '#5A6979')}
      />
    </Svg>
  );
};

Iconjuxing.defaultProps = {
  size: 18,
};

Iconjuxing = React.memo ? React.memo(Iconjuxing) : Iconjuxing;

export default Iconjuxing;
