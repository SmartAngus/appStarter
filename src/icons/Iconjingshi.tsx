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

let Iconjingshi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0C227.2 0 0 227.2 0 512s227.2 512 512 512 512-227.2 512-512-227.2-512-512-512z m-49.28 200.32c13.44-13.44 24.96-22.4 46.72-22.4 24.32-1.92 46.72 9.6 55.68 26.88 10.24 12.16 16 39.04 13.44 55.04 0 4.48-3.2 34.56-4.48 42.88l-17.92 227.2c0 22.4-4.48 44.8-13.44 62.08-4.48 13.44-17.92 22.4-35.84 22.4-13.44 0-26.88-8.96-31.36-22.4-8.96-22.4-13.44-40.32-13.44-62.08L449.92 307.2c-4.48-40.32-4.48-26.88-4.48-49.28 0-21.76 4.48-39.68 17.28-57.6z m98.56 627.84c-13.44 13.44-31.36 17.92-44.8 17.92-17.92 0-35.84-4.48-49.28-17.92-13.44-13.44-22.4-31.36-22.4-53.12 0-17.92 4.48-35.84 17.92-49.28 13.44-13.44 31.36-22.4 49.28-22.4s35.84 8.96 49.28 22.4c13.44 13.44 17.92 31.36 17.92 49.28-0.64 21.76-5.12 39.68-17.92 53.12z"
        fill={getIconColor(color, 0, '#F7B500')}
      />
    </Svg>
  );
};

Iconjingshi.defaultProps = {
  size: 18,
};

Iconjingshi = React.memo ? React.memo(Iconjingshi) : Iconjingshi;

export default Iconjingshi;
