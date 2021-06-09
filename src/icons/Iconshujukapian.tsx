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

let Iconshujukapian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1496 1024" width={size} height={size} {...rest}>
      <Path
        d="M1347.741538 14.690462a141.508923 141.508923 0 0 1 141.508924 141.508923v707.584a141.508923 141.508923 0 0 1-141.508924 141.508923H144.856615a141.508923 141.508923 0 0 1-141.508923-141.508923V156.199385A141.508923 141.508923 0 0 1 144.856615 14.690462H1347.741538z m-176.876307 601.403076H321.732923a35.367385 35.367385 0 0 0 0 70.813539h849.132308a35.367385 35.367385 0 1 0 0-70.774154z m-283.057231-282.978461H321.772308a35.367385 35.367385 0 0 0 0 70.734769h566.075077a35.367385 35.367385 0 1 0 0-70.734769z"
        fill={getIconColor(color, 0, '#5A6979')}
      />
    </Svg>
  );
};

Iconshujukapian.defaultProps = {
  size: 18,
};

Iconshujukapian = React.memo ? React.memo(Iconshujukapian) : Iconshujukapian;

export default Iconshujukapian;
