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

let Iconzhankai: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M414.573714 926.208a54.857143 54.857143 0 1 1-97.645714 49.298286l-219.428571-438.857143a54.857143 54.857143 0 0 1 0-49.371429l219.428571-438.857143a54.857143 54.857143 0 0 1 97.645714 49.444572L207.725714 512l206.848 414.208z m493.714286 0a54.857143 54.857143 0 1 1-97.645714 49.298286l-219.428572-438.857143a54.857143 54.857143 0 0 1 0-49.371429l219.428572-438.857143a54.857143 54.857143 0 1 1 97.645714 49.444572L701.44 512l206.848 414.208z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconzhankai.defaultProps = {
  size: 18,
};

Iconzhankai = React.memo ? React.memo(Iconzhankai) : Iconzhankai;

export default Iconzhankai;
