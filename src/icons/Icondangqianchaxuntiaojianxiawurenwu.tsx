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

let Icondangqianchaxuntiaojianxiawurenwu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1205 1024" width={size} height={size} {...rest}>
      <Path
        d="M1023.605333 321.866667H172.8L0 632v387.061333h1196.266667V632L1023.594667 321.866667z m-273.472 313.6c0 83.861333-68 151.861333-152 151.861333s-152-67.989333-152-151.861333H71.328l138.410667-264h776.661333l138.4 264H750.133333zM584.266667 4h52.128V191.466667h-52.128V4zM230.474667 97.066667l36.864-36.864L399.893333 192.768l-36.864 36.864L230.474667 97.066667z m574.250666 95.786666L937.290667 60.288l36.864 36.864-132.565334 132.554667-36.864-36.853334z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
    </Svg>
  );
};

Icondangqianchaxuntiaojianxiawurenwu.defaultProps = {
  size: 18,
};

Icondangqianchaxuntiaojianxiawurenwu = React.memo ? React.memo(Icondangqianchaxuntiaojianxiawurenwu) : Icondangqianchaxuntiaojianxiawurenwu;

export default Icondangqianchaxuntiaojianxiawurenwu;
