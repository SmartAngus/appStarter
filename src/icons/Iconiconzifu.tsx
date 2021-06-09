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

let Iconiconzifu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M800.32 64H224C135.68 64.128 64.128 139.136 64 231.68v561.28c0.384 92.416 71.872 167.04 160 167.168h576.32c88-0.32 159.296-74.88 159.68-167.104V231.68c-0.128-92.416-71.488-167.36-159.68-167.68z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
      <Path
        d="M510.912 256c107.584 1.92 182.784 40.448 225.92 115.392 47.232 102.528 40.768 194.368-19.328 275.2-21.568 31.552-54.848 57.28-100.032 76.928h116.224V768H543.232l3.2-76.928c86.016-27.584 136.64-78.912 151.68-153.92 4.288-7.872 6.528-31.552 6.528-71.04-6.464-70.976-56.96-121.28-151.68-150.912l-48.384-2.944c-86.08 5.952-142.016 40.448-167.808 103.552-10.88 11.904-16.128 39.488-16.128 82.944 12.992 102.528 63.488 166.656 151.68 192.32h6.528V768H291.52v-44.352H407.68C315.2 690.112 264.576 614.08 256 495.808v-14.848c6.464-96.64 50.56-163.712 132.288-201.216 21.44-11.84 56.96-19.648 106.432-23.68h16.192V256z"
        fill={getIconColor(color, 1, '#096DD9')}
      />
    </Svg>
  );
};

Iconiconzifu.defaultProps = {
  size: 18,
};

Iconiconzifu = React.memo ? React.memo(Iconiconzifu) : Iconiconzifu;

export default Iconiconzifu;
