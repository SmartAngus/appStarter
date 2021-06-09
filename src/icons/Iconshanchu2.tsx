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

let Iconshanchu2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M980.16 313.792a567.296 567.296 0 0 0-108.352-161.6c-45.568-46.464-101.44-82.56-161.6-109.184a499.84 499.84 0 0 0-197.76-41.28 506.24 506.24 0 0 0-197.76 41.28c-60.16 26.624-113.472 62.72-161.664 108.288-47.296 46.464-83.392 102.4-110.08 162.56a499.84 499.84 0 0 0-41.216 197.76c0 67.84 14.592 134.912 41.28 197.76 26.624 60.16 62.72 113.408 108.288 161.6A518.4 518.4 0 0 0 312.96 979.2a499.84 499.84 0 0 0 197.76 41.28 506.24 506.24 0 0 0 197.76-41.28 567.296 567.296 0 0 0 161.6-108.288 518.4 518.4 0 0 0 108.352-161.664 499.84 499.84 0 0 0 41.28-197.76c1.728-67.072-12.928-134.976-39.552-197.76z m-241.6 456.576L514.176 545.92l-220.16 219.2-33.472-33.536L480.64 511.552 255.36 287.168l33.536-33.536L513.28 478.08l220.992-220.096 33.536 33.536-220.16 220.16 224.448 224.384-33.536 34.368z"
        fill={getIconColor(color, 0, '#E02020')}
      />
    </Svg>
  );
};

Iconshanchu2.defaultProps = {
  size: 18,
};

Iconshanchu2 = React.memo ? React.memo(Iconshanchu2) : Iconshanchu2;

export default Iconshanchu2;
