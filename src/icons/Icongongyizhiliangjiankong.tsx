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

let Icongongyizhiliangjiankong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M181.333333 256a106.666667 106.666667 0 1 1 0-213.333333 106.666667 106.666667 0 0 1 0 213.333333zM303.872 64h625.493333v384a42.666667 42.666667 0 0 1-42.666666 42.666667H75.946667v-128a42.666667 42.666667 0 0 1 42.666666-42.666667h640v-85.333333H303.786667c16.896-24.149333 26.794667-53.589333 26.794666-85.333334s-9.898667-61.184-26.794666-85.333333zM844.032 768a106.666667 106.666667 0 1 1 0 213.333333 106.666667 106.666667 0 0 1 0-213.333333z m-122.624 192H96v-384a42.666667 42.666667 0 0 1 42.666667-42.666667h810.666666v128a42.666667 42.666667 0 0 1-42.666666 42.666667h-640v85.333333h454.826666a148.650667 148.650667 0 0 0-26.794666 85.333334c0 31.744 9.898667 61.184 26.709333 85.333333z"
        fill={getIconColor(color, 0, '#A6A6A6')}
      />
    </Svg>
  );
};

Icongongyizhiliangjiankong.defaultProps = {
  size: 18,
};

Icongongyizhiliangjiankong = React.memo ? React.memo(Icongongyizhiliangjiankong) : Icongongyizhiliangjiankong;

export default Icongongyizhiliangjiankong;
