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

let Icondisanfangshujuronghe: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M307.2 562.569846l196.923077 113.585231-140.524308 243.475692L80.659692 756.420923V259.623385L510.818462 11.342769l86.016 49.624616L307.2 562.569846z m356.430769-462.926769L523.027692 343.04l191.251693 110.434462-289.555693 501.602461 85.858462 49.624615 430.237538-248.280615V259.623385l-277.267692-159.980308z"
        fill={getIconColor(color, 0, '#A6A6A6')}
      />
    </Svg>
  );
};

Icondisanfangshujuronghe.defaultProps = {
  size: 18,
};

Icondisanfangshujuronghe = React.memo ? React.memo(Icondisanfangshujuronghe) : Icondisanfangshujuronghe;

export default Icondisanfangshujuronghe;
