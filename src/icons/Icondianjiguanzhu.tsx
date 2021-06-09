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

let Icondianjiguanzhu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M510.208 0a510.208 510.208 0 0 1 510.272 510.208A510.208 510.208 0 1 1 0 510.208 510.208 510.208 0 0 1 510.208 0zM512 256a23.808 23.808 0 0 0-21.376 13.952L424.384 410.24l-147.904 22.528a24.128 24.128 0 0 0-19.328 17.024 25.856 25.856 0 0 0 6.08 25.6l107.072 109.184-25.216 154.24a25.6 25.6 0 0 0 9.536 24.448 22.912 22.912 0 0 0 25.088 1.856l132.352-72.832 132.352 72.832a23.168 23.168 0 0 0 25.088-1.92 25.6 25.6 0 0 0 9.536-24.32l-25.28-154.24 107.072-109.248a25.984 25.984 0 0 0 6.016-25.6 24.256 24.256 0 0 0-19.328-17.024L599.552 410.24 533.376 269.952A23.808 23.808 0 0 0 512 256z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Icondianjiguanzhu.defaultProps = {
  size: 18,
};

Icondianjiguanzhu = React.memo ? React.memo(Icondianjiguanzhu) : Icondianjiguanzhu;

export default Icondianjiguanzhu;
