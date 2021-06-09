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

let Iconshanchu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M426.666667 90.709333v-42.666666a21.333333 21.333333 0 0 1 21.333333-21.333334H597.333333v64h320v74.666667a10.666667 10.666667 0 0 1-10.666666 10.666667H106.666667v-74.752c0-5.888 4.778667-10.666667 10.666666-10.666667H426.666667zM213.333333 229.376H853.333333v725.333333a42.666667 42.666667 0 0 1-42.666666 42.666667H170.666667v-725.333333a42.666667 42.666667 0 0 1 42.666666-42.666667z m181.333334 170.666667a10.666667 10.666667 0 0 0-10.666667 10.666666v416h74.666667a10.666667 10.666667 0 0 0 10.666666-10.752V400.128h-74.666666z m170.666666 0a10.666667 10.666667 0 0 0-10.666666 10.666666v416h74.666666a10.666667 10.666667 0 0 0 10.666667-10.752V400.128h-74.666667z"
        fill={getIconColor(color, 0, '#E02020')}
      />
    </Svg>
  );
};

Iconshanchu.defaultProps = {
  size: 18,
};

Iconshanchu = React.memo ? React.memo(Iconshanchu) : Iconshanchu;

export default Iconshanchu;
