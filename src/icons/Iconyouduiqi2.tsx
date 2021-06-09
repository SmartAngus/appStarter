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

let Iconyouduiqi2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M96 128h832v96H96zM96 576h832v96H96zM352 352h576v96H352zM352 800h576v96H352z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconyouduiqi2.defaultProps = {
  size: 18,
};

Iconyouduiqi2 = React.memo ? React.memo(Iconyouduiqi2) : Iconyouduiqi2;

export default Iconyouduiqi2;
