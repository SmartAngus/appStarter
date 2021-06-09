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

let Iconzhuzhuangtu1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1088 1024" width={size} height={size} {...rest}>
      <Path
        d="M1016.672 912.8a43.104 43.104 0 1 1 0 86.24H68.064a43.104 43.104 0 1 1 0-86.24h948.608zM599.872 280.416c31.744 0 57.472 25.728 57.472 57.472v402.432c0 31.776-25.728 57.504-57.472 57.504h-115.008a57.504 57.504 0 0 1-57.472-57.504V337.92c0-31.744 25.728-57.472 57.472-57.472h115.008z m-344.96-172.48c31.744 0 57.504 25.728 57.504 57.472v574.912c0 31.776-25.76 57.504-57.504 57.504H139.936a57.504 57.504 0 0 1-57.504-57.504V165.44c0-31.744 25.76-57.472 57.504-57.472h114.976zM944.832 21.696c31.712 0 57.472 25.728 57.472 57.504v661.12c0 31.776-25.76 57.504-57.504 57.504h-114.976a57.504 57.504 0 0 1-57.504-57.504V79.2c0-31.776 25.76-57.504 57.504-57.504h114.976z"
        fill={getIconColor(color, 0, '#5A6979')}
      />
    </Svg>
  );
};

Iconzhuzhuangtu1.defaultProps = {
  size: 18,
};

Iconzhuzhuangtu1 = React.memo ? React.memo(Iconzhuzhuangtu1) : Iconzhuzhuangtu1;

export default Iconzhuzhuangtu1;
