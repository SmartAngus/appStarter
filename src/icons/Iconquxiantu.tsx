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

let Iconquxiantu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1179 1024" width={size} height={size} {...rest}>
      <Path
        d="M86.264242 916.169697m41.797819 0l919.893333 0q41.797818 0 41.797818 41.797818l0 0.03103q0 41.797818-41.797818 41.797819l-919.893333 0q-41.797818 0-41.797819-41.797819l0-0.03103q0-41.797818 41.797819-41.797818Z"
        fill={getIconColor(color, 0, '#5A6979')}
      />
      <Path
        d="M1077.248 41.208242a41.797818 41.797818 0 0 1 80.740848 21.721213l-8.905696 32.643878c-117.697939 424.742788-247.187394 639.410424-406.43491 639.410425-95.790545 0-150.745212-38.198303-229.344969-135.292122l-22.745212-28.765091c-66.56-85.02303-101.189818-112.267636-158.471758-112.267636-102.648242 0-180.379152 78.475636-233.844364 247.156364a41.797818 41.797818 0 1 1-79.747878-25.258667c63.332848-199.773091 168.091152-305.524364 313.592242-305.524364 86.140121 0 136.440242 35.467636 209.826909 126.107152l22.217697 28.113454c72.083394 92.12897 110.778182 122.104242 178.517333 122.104243 106.744242 0 224.721455-201.69697 334.599758-610.148849z"
        fill={getIconColor(color, 1, '#5A6979')}
      />
    </Svg>
  );
};

Iconquxiantu.defaultProps = {
  size: 18,
};

Iconquxiantu = React.memo ? React.memo(Iconquxiantu) : Iconquxiantu;

export default Iconquxiantu;
