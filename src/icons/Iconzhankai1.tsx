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

let Iconzhankai1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
      <Path
        d="M657.28 513.152c12.074667 3.285333 21.418667 13.226667 24.405333 25.813333a36.309333 36.309333 0 0 1-10.154666 34.645334l-137.898667 141.610666a33.194667 33.194667 0 0 1-48.042667-0.384l-134.101333-141.568a36.394667 36.394667 0 0 1-8.96-34.474666 34.688 34.688 0 0 1 24.405333-25.088 33.109333 33.109333 0 0 1 32.981334 9.813333L510.122667 640l113.749333-116.736c8.533333-9.514667 21.333333-13.354667 33.408-10.069333z m0-213.333333c12.074667 3.285333 21.418667 13.226667 24.405333 25.813333a36.309333 36.309333 0 0 1-10.154666 34.645333l-137.898667 141.610667a33.194667 33.194667 0 0 1-48.042667-0.384L351.488 359.936a36.394667 36.394667 0 0 1-8.96-34.474667 34.688 34.688 0 0 1 24.405333-25.088 33.109333 33.109333 0 0 1 32.981334 9.813334L510.122667 426.666667l113.749333-116.736c8.533333-9.514667 21.333333-13.354667 33.408-10.069334z"
        fill={getIconColor(color, 1, '#096DD9')}
      />
    </Svg>
  );
};

Iconzhankai1.defaultProps = {
  size: 18,
};

Iconzhankai1 = React.memo ? React.memo(Iconzhankai1) : Iconzhankai1;

export default Iconzhankai1;
