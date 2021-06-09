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

let Icondangqianzanwujinhangzhongrenwu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M209.344 111.616h595.264L738.176 0h-475.69l-53.12 111.616z m-33.621 41.728A79.723 79.723 0 0 0 96 233.045v708.416a79.744 79.744 0 0 0 79.723 79.723h657.834a85.333 85.333 0 0 0 85.334-85.333V233.067a79.744 79.744 0 0 0-79.744-79.744H175.723zM298.005 507.84h418.667a31.893 31.893 0 1 1 0 63.787H298.005a31.893 31.893 0 1 1 0-63.787z m418.688 290.859H298.027a31.893 31.893 0 1 1 0-63.787h418.666a31.893 31.893 0 1 1 0 63.787z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
    </Svg>
  );
};

Icondangqianzanwujinhangzhongrenwu.defaultProps = {
  size: 18,
};

Icondangqianzanwujinhangzhongrenwu = React.memo ? React.memo(Icondangqianzanwujinhangzhongrenwu) : Icondangqianzanwujinhangzhongrenwu;

export default Icondangqianzanwujinhangzhongrenwu;
