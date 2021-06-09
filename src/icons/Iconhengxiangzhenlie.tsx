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

let Iconhengxiangzhenlie: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M420.608427 763.989333V260.010667c0-2.218667 1.962667-4.010667 4.437333-4.010667h161.706667c2.56 0 4.522667 1.792 4.522666 4.010667v503.978666c0 2.218667-2.048 4.010667-4.522666 4.010667H425.04576c-2.474667 0-4.437333-1.792-4.437333-4.010667z m-298.666667 193.365334A36.693333 36.693333 0 0 1 85.33376 920.490667V36.864a36.693333 36.693333 0 0 1 73.216 0v883.626667a36.437333 36.437333 0 0 1-36.693333 36.864z m768 0A36.693333 36.693333 0 0 1 853.33376 920.490667V36.864a36.693333 36.693333 0 0 1 73.216 0v883.626667a36.437333 36.437333 0 0 1-36.693333 36.864z"
        fill={getIconColor(color, 0, '#2E4257')}
      />
    </Svg>
  );
};

Iconhengxiangzhenlie.defaultProps = {
  size: 18,
};

Iconhengxiangzhenlie = React.memo ? React.memo(Iconhengxiangzhenlie) : Iconhengxiangzhenlie;

export default Iconhengxiangzhenlie;
