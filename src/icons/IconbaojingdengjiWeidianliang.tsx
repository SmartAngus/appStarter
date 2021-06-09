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

let IconbaojingdengjiWeidianliang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M972.032 890.752v65.024c0 8.256-6.72 14.976-15.04 14.976H52.032v-65.024c0-8.32 6.656-14.976 14.976-14.976h904.96zM846.912 140.736v695.04c0 8.256-6.72 14.976-14.976 14.976H177.024v-441.6A274.816 274.816 0 0 1 305.408 183.04c32.448-22.144 70.336-35.584 113.536-40.384a277.76 277.76 0 0 1 23.488-1.792l13.44-0.192h391.168z m-64 64H455.744l-11.2 0.128c-6.08 0.256-12.224 0.704-18.624 1.472a184.832 184.832 0 0 0-86.4 30.848 211.2 211.2 0 0 0-98.56 174.016v375.552h542.08V204.736z m-605.952 2.24V272c0 8.32-6.72 14.976-15.04 14.976H67.008V222.08c0-8.32 6.72-15.04 14.976-15.04h95.04zM176.64 60.16l67.2 67.2-46.016 45.952a14.976 14.976 0 0 1-21.184 0l-67.2-67.2 45.952-45.952a14.976 14.976 0 0 1 21.248 0zM335.744 19.52c8.32 0 14.976 6.72 14.976 14.976v94.976H285.76a14.976 14.976 0 0 1-15.04-14.976V19.52h65.024z"
        fill={getIconColor(color, 0, '#FA6400')}
      />
    </Svg>
  );
};

IconbaojingdengjiWeidianliang.defaultProps = {
  size: 18,
};

IconbaojingdengjiWeidianliang = React.memo ? React.memo(IconbaojingdengjiWeidianliang) : IconbaojingdengjiWeidianliang;

export default IconbaojingdengjiWeidianliang;
