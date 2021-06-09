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

let Icontianjiaxindetuxing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1365 1024" width={size} height={size} {...rest}>
      <Path
        d="M910.250667 625.749333h170.666666V853.333333h-170.666666V625.749333zM625.749333 398.250667h170.666667V853.333333h-170.666667V398.250667z m-341.333333-113.834667h170.666667V853.333333h-170.666667V284.416zM170.666667 91.050667a22.784 22.784 0 0 0-22.784 22.698666v796.501334c0 12.544 10.24 22.698667 22.784 22.698666h1024c12.544 0 22.784-10.24 22.784-22.698666V113.749333A22.784 22.784 0 0 0 1194.666667 91.050667H170.666667zM170.666667 0h1024c62.805333 0 113.749333 50.944 113.749333 113.749333v796.501334A113.749333 113.749333 0 0 1 1194.666667 1024H170.666667a113.749333 113.749333 0 0 1-113.749334-113.749333V113.749333C56.917333 50.944 107.861333 0 170.666667 0z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Icontianjiaxindetuxing.defaultProps = {
  size: 18,
};

Icontianjiaxindetuxing = React.memo ? React.memo(Icontianjiaxindetuxing) : Icontianjiaxindetuxing;

export default Icontianjiaxindetuxing;
