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

let Iconqiehuanguanlian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1280 1024" width={size} height={size} {...rest}>
      <Path
        d="M304.810667 442.368a53.589333 53.589333 0 0 1-75.690667 75.690667l-213.333333-213.333334a53.333333 53.333333 0 0 1 0-75.690666l213.333333-213.333334a53.589333 53.589333 0 0 1 75.690667 75.690667L128.853333 266.922667l175.957334 175.445333zM53.76 320.256a53.333333 53.333333 0 1 1 0-106.666667h640a53.333333 53.333333 0 0 1 0 106.666667h-640zM975.786667 517.973333a53.589333 53.589333 0 1 1 75.690666-75.690666l213.333334 213.333333a53.333333 53.333333 0 0 1 0 75.690667l-213.333334 213.333333a53.589333 53.589333 0 0 1-75.690666-75.690667l175.957333-175.445333-175.957333-175.530667z m251.221333 122.197334a53.333333 53.333333 0 0 1 0 106.666666h-640a53.333333 53.333333 0 0 1 0-106.666666h640z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconqiehuanguanlian.defaultProps = {
  size: 18,
};

Iconqiehuanguanlian = React.memo ? React.memo(Iconqiehuanguanlian) : Iconqiehuanguanlian;

export default Iconqiehuanguanlian;
