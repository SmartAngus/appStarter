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

let Iconjinhangzhonggongxu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 8.96A507.52 507.52 0 1 0 512 1024 507.52 507.52 0 0 0 512 8.96z m176.768 711.616l-14.976 14.912a31.744 31.744 0 0 1-44.8 0L473.28 579.904a31.616 31.616 0 0 1-23.616-30.592V232.128c0-17.536 14.208-31.744 31.744-31.744h21.12c17.536 0 31.744 14.208 31.744 31.744v289.152l154.432 154.432a31.744 31.744 0 0 1 0 44.8z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconjinhangzhonggongxu.defaultProps = {
  size: 18,
};

Iconjinhangzhonggongxu = React.memo ? React.memo(Iconjinhangzhonggongxu) : Iconjinhangzhonggongxu;

export default Iconjinhangzhonggongxu;
