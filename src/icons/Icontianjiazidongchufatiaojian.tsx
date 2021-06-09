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

let Icontianjiazidongchufatiaojian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1260 1024" width={size} height={size} {...rest}>
      <Path
        d="M59.076923 169.905231h823.611077a105.865846 105.865846 0 0 0 185.265231 0h132.647384a48.994462 48.994462 0 0 0 0-97.988923h-130.756923a105.787077 105.787077 0 0 0-94.523077-58.840616c-41.353846 0-77.193846 23.945846-94.523077 58.840616H59.076923a48.994462 48.994462 0 0 0 0 97.988923z m1141.523692 291.446154H414.562462a105.550769 105.550769 0 0 0-191.645539 0H59.076923a48.994462 48.994462 0 0 0 0 98.067692h168.723692a105.708308 105.708308 0 0 0 182.193231 0h790.606769a48.994462 48.994462 0 0 0 0-97.988923z m0 389.513846H408.024615a105.550769 105.550769 0 0 0-178.333538 0H59.076923a48.994462 48.994462 0 0 0 0 98.067692h162.264615a105.629538 105.629538 0 0 0 194.63877 0h784.541538a48.994462 48.994462 0 0 0 0-98.067692z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Icontianjiazidongchufatiaojian.defaultProps = {
  size: 18,
};

Icontianjiazidongchufatiaojian = React.memo ? React.memo(Icontianjiazidongchufatiaojian) : Icontianjiazidongchufatiaojian;

export default Icontianjiazidongchufatiaojian;
