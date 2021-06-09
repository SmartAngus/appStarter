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

let Iconheng: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1962 1024" width={size} height={size} {...rest}>
      <Path
        d="M-5.82196678-10.65153846m176.16649573 0l1673.58171356 0q176.16649572 0 176.16649573 176.16649572l0 704.6659843q0 176.16649572-176.16649573 176.16649711l-1673.58171356 0q-176.16649572 0-176.16649573-176.16649711l0-704.6659843q0-176.16649572 176.16649573-176.16649572Z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconheng.defaultProps = {
  size: 18,
};

Iconheng = React.memo ? React.memo(Iconheng) : Iconheng;

export default Iconheng;
