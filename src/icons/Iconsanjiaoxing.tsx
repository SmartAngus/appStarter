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

let Iconsanjiaoxing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M841.159111 608.483556L259.413333 972.117333A113.777778 113.777778 0 0 1 85.333333 875.633778V148.366222A113.777778 113.777778 0 0 1 259.413333 51.882667l581.745778 363.633777a113.777778 113.777778 0 0 1 0 192.967112z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconsanjiaoxing.defaultProps = {
  size: 18,
};

Iconsanjiaoxing = React.memo ? React.memo(Iconsanjiaoxing) : Iconsanjiaoxing;

export default Iconsanjiaoxing;
