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

let Icondiyu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M270.4 646.528l206.08 173.44c19.2 16 50.56 16 69.76 0l206.08-173.44c30.72-26.24 8.96-71.04-34.56-71.04h-78.72v-320.64c0-35.2-28.8-64-64-64h-128c-35.2 0-64 28.8-64 64v320.64h-78.08c-43.52 0-65.28 44.8-34.56 71.04z"
        fill={getIconColor(color, 0, '#E02020')}
      />
    </Svg>
  );
};

Icondiyu.defaultProps = {
  size: 18,
};

Icondiyu = React.memo ? React.memo(Icondiyu) : Icondiyu;

export default Icondiyu;
