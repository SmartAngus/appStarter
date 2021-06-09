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

let IconbaojingdengjiDianliang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M67.008 890.752h904.96v65.024c0 8.256-6.656 14.976-14.976 14.976H52.032v-65.024c0-8.32 6.656-14.976 14.976-14.976zM176.64 60.096l67.2 67.2-46.016 45.952a14.976 14.976 0 0 1-21.184 0l-67.2-67.2 45.952-45.952a14.976 14.976 0 0 1 21.248 0zM81.92 206.976h95.04V272c0 8.32-6.72 14.976-15.04 14.976H67.008V222.08c0-8.32 6.72-15.04 14.976-15.04zM350.784 34.56v94.976H285.696a14.976 14.976 0 0 1-15.04-14.976V19.52h65.024c8.32 0 14.976 6.72 14.976 14.976zM177.024 416.192v-7.04A274.816 274.816 0 0 1 305.408 183.04c32.448-22.144 70.336-35.584 113.536-40.384a277.76 277.76 0 0 1 35.328-1.92H846.976v694.976c0 8.256-6.72 14.976-14.976 14.976H177.024v-434.56z"
        fill={getIconColor(color, 0, '#FA6400')}
      />
    </Svg>
  );
};

IconbaojingdengjiDianliang.defaultProps = {
  size: 18,
};

IconbaojingdengjiDianliang = React.memo ? React.memo(IconbaojingdengjiDianliang) : IconbaojingdengjiDianliang;

export default IconbaojingdengjiDianliang;
