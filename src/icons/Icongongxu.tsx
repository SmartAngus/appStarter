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

let Icongongxu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M557.310955 0.00192a47.99991 47.99991 0 0 1 48.447909 47.487911v297.151443H379.327289a55.999895 55.999895 0 0 0-56.703894 55.551896V1024H0V47.489831A47.99991 47.99991 0 0 1 48.447909 0.00192z m417.727217 423.423206c27.071949 0 48.959908 21.56796 48.959908 47.99991v550.654968H412.735226V471.425036c0-26.55995 22.015959-47.99991 48.831909-47.99991z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Icongongxu.defaultProps = {
  size: 18,
};

Icongongxu = React.memo ? React.memo(Icongongxu) : Icongongxu;

export default Icongongxu;
