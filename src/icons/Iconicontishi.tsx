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

let Iconicontishi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0a512 512 0 1 0 0 1024A512 512 0 0 0 512 0z m0 937.179429A425.179429 425.179429 0 0 1 512 86.820571a425.179429 425.179429 0 0 1 0 850.358858z"
        fill={getIconColor(color, 0, '#E02020')}
      />
      <Path
        d="M457.142857 310.857143a54.857143 54.857143 0 1 0 109.714286 0 54.857143 54.857143 0 0 0-109.714286 0zM539.428571 438.857143h-54.857142a9.142857 9.142857 0 0 0-9.142858 9.142857v310.857143c0 5.046857 4.096 9.142857 9.142858 9.142857h54.857142a9.142857 9.142857 0 0 0 9.142858-9.142857v-310.857143A9.142857 9.142857 0 0 0 539.428571 438.857143z"
        fill={getIconColor(color, 1, '#E02020')}
      />
    </Svg>
  );
};

Iconicontishi.defaultProps = {
  size: 18,
};

Iconicontishi = React.memo ? React.memo(Iconicontishi) : Iconicontishi;

export default Iconicontishi;
