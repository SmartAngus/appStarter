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

let Iconzidingyi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M784 544a240 240 0 1 1 0 480 240 240 0 0 1 0-480zM384 544a64 64 0 0 1 64 64v320a64 64 0 0 1-64 64H64a64 64 0 0 1-64-64V608a64 64 0 0 1 64-64h320z m0-544a64 64 0 0 1 64 64v320a64 64 0 0 1-64 64H64a64 64 0 0 1-64-64V64a64 64 0 0 1 64-64h320z m544 0a64 64 0 0 1 64 64v320a64 64 0 0 1-64 64H608a64 64 0 0 1-64-64V64a64 64 0 0 1 64-64h320z"
        fill={getIconColor(color, 0, '#5A6979')}
      />
    </Svg>
  );
};

Iconzidingyi.defaultProps = {
  size: 18,
};

Iconzidingyi = React.memo ? React.memo(Iconzidingyi) : Iconzidingyi;

export default Iconzidingyi;
