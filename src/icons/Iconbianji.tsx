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

let Iconbianji: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M646.784 49.472H147.392C69.632 49.472 5.12 111.104 5.12 187.712v687.744c0 76.608 63.936 138.24 142.848 138.24h711.936c78.912 0 142.848-61.632 142.848-138.24V396.224h-71.424v479.232c0 38.592-32.256 69.12-72 69.12H147.968c-39.744 0-72-31.104-72-69.12V187.712c0-38.016 32.256-69.12 70.848-69.12h499.392V49.472h0.576zM452.672 506.816a32.256 32.256 0 0 0-10.368 24.192c0 9.216 4.032 17.856 10.368 24.192a37.312 37.312 0 0 0 50.688 0L1007.36 68.48a32.256 32.256 0 0 0 10.368-24.192 34.496 34.496 0 0 0-10.368-24.192 37.312 37.312 0 0 0-50.688 0L452.672 506.816z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconbianji.defaultProps = {
  size: 18,
};

Iconbianji = React.memo ? React.memo(Iconbianji) : Iconbianji;

export default Iconbianji;
