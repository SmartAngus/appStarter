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

let Iconwenben: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1496 1024" width={size} height={size} {...rest}>
      <Path
        d="M1347.741538 14.690462a141.508923 141.508923 0 0 1 141.508924 141.508923v707.584a141.508923 141.508923 0 0 1-141.508924 141.508923H144.856615a141.508923 141.508923 0 0 1-141.508923-141.508923V156.199385A141.508923 141.508923 0 0 1 144.856615 14.690462H1347.741538z m-374.587076 275.692307h-415.901539l-2.520615 134.852923h37.179077l31.507692-110.276923h86.961231c1.260308 64.905846 1.260308 131.072 1.260307 197.238154v27.726769c0 65.536 0 130.441846-1.260307 193.457231l-63.645539 6.301539v21.42523h236.937846v-21.42523l-64.275692-6.301539c-1.260308-64.275692-1.260308-129.811692-1.260308-194.087385v-27.096615c0-66.796308 0-132.332308 1.260308-197.238154h87.591385l32.137846 110.276923h36.548923l-2.520615-134.852923z"
        fill={getIconColor(color, 0, '#5A6979')}
      />
    </Svg>
  );
};

Iconwenben.defaultProps = {
  size: 18,
};

Iconwenben = React.memo ? React.memo(Iconwenben) : Iconwenben;

export default Iconwenben;
