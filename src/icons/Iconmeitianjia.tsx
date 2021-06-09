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

let Iconmeitianjia: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M209.344 111.616h595.264L738.176 0H262.485333l-53.12 111.616zM175.722667 153.344A79.722667 79.722667 0 0 0 96 233.045333v708.416a79.744 79.744 0 0 0 79.722667 79.722667h657.834666a85.333333 85.333333 0 0 0 85.333334-85.333333V233.066667a79.744 79.744 0 0 0-79.744-79.744H175.722667z m122.282666 354.496h418.666667a31.893333 31.893333 0 1 1 0 63.786667H298.005333a31.893333 31.893333 0 1 1 0-63.786667z m418.688 290.858667H298.026667a31.893333 31.893333 0 1 1 0-63.786667h418.666666a31.893333 31.893333 0 1 1 0 63.786667z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
    </Svg>
  );
};

Iconmeitianjia.defaultProps = {
  size: 18,
};

Iconmeitianjia = React.memo ? React.memo(Iconmeitianjia) : Iconmeitianjia;

export default Iconmeitianjia;
