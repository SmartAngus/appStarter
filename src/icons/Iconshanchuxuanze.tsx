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

let Iconshanchuxuanze: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1097 1024" width={size} height={size} {...rest}>
      <Path
        d="M570.514286 0c-285.257143 0-512 226.742857-512 512s226.742857 512 512 512 512-226.742857 512-512-226.742857-512-512-512zM317.074286 548.205714A35.328 35.328 0 0 1 280.868571 512c0-20.699429 15.506286-36.205714 36.205715-36.205714h506.88c20.699429 0 36.205714 15.506286 36.205714 36.205714a35.328 35.328 0 0 1-36.205714 36.205714h-506.88z"
        fill={getIconColor(color, 0, '#F56560')}
      />
    </Svg>
  );
};

Iconshanchuxuanze.defaultProps = {
  size: 18,
};

Iconshanchuxuanze = React.memo ? React.memo(Iconshanchuxuanze) : Iconshanchuxuanze;

export default Iconshanchuxuanze;
