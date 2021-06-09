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

let Iconbaocun: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M791.332571 8.777143H121.051429C59.611429 8.777143 9.362286 59.172571 9.362286 120.612571v781.897143c0 61.44 50.322286 111.689143 111.689143 111.689143h781.897142c61.44 0 111.689143-50.176 111.689143-111.689143V232.155429L791.405714 8.850286zM512 902.509714c-95.012571 0-167.497143-72.484571-167.497143-167.570285 0-94.939429 72.484571-167.570286 167.497143-167.570286s167.497143 72.630857 167.497143 167.570286c0 95.085714-72.484571 167.497143-167.497143 167.497142m167.497143-558.445714H121.051429V120.539429h558.592v223.378285z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconbaocun.defaultProps = {
  size: 18,
};

Iconbaocun = React.memo ? React.memo(Iconbaocun) : Iconbaocun;

export default Iconbaocun;
