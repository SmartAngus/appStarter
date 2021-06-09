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

let Iconquxiaoguanzhu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M510.72 2.56a510.208 510.208 0 1 0 0 1020.416 510.208 510.208 0 0 0 510.272-510.208A510.208 510.208 0 0 0 510.72 2.56z m51.328 603.264V481.536c-61.696 0-218.88 1.408-218.88 170.56 0 88.576 60.032 162.496 139.904 179.584-128.256-18.176-227.456-132.032-227.456-271.232 0-258.56 263.936-260.736 306.496-260.736V193.856l203.776 206.72-203.84 205.248z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconquxiaoguanzhu.defaultProps = {
  size: 18,
};

Iconquxiaoguanzhu = React.memo ? React.memo(Iconquxiaoguanzhu) : Iconquxiaoguanzhu;

export default Iconquxiaoguanzhu;
