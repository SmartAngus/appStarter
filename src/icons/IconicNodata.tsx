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

let IconicNodata: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M161.882353 240.941176a112.941176 112.941176 0 1 1 0-225.882352 112.941176 112.941176 0 0 1 0 225.882352z m129.776941-203.294117h662.226824v406.588235a45.176471 45.176471 0 0 1-45.176471 45.176471H50.356706v-135.529412a45.176471 45.176471 0 0 1 45.17647-45.176471h677.647059v-90.352941H291.659294c17.859765-25.6 28.340706-56.771765 28.340706-90.352941s-10.480941-64.752941-28.340706-90.352941zM863.533176 783.058824a112.941176 112.941176 0 1 1 0 225.882352 112.941176 112.941176 0 0 1 0-225.882352z m-129.807058 203.294117H71.559529v-406.588235a45.176471 45.176471 0 0 1 45.176471-45.176471h858.352941v135.529412a45.176471 45.176471 0 0 1-45.17647 45.176471h-677.647059v90.352941h481.520941a157.394824 157.394824 0 0 0-28.340706 90.352941c0 33.581176 10.480941 64.752941 28.310588 90.352941z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

IconicNodata.defaultProps = {
  size: 18,
};

IconicNodata = React.memo ? React.memo(IconicNodata) : IconicNodata;

export default IconicNodata;
