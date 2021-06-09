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

let Iconshezhi1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 713.856A202.624 202.624 0 1 0 310.4 512 202.112 202.112 0 0 0 512 713.856zM40.704 512c0-33.472 3.2-66.88 9.472-99.776a176.704 176.704 0 0 0 135.616-91.328c29.376-53.12 31.872-117.056 6.784-172.288A466.304 466.304 0 0 1 369.28 40.704a172.288 172.288 0 0 0 290.368 0 467.584 467.584 0 0 1 176 109.184 190.848 190.848 0 0 0 8.32 171.008A176 176 0 0 0 974.912 409.6a519.68 519.68 0 0 1-3.712 217.344 178.304 178.304 0 0 0-126.72 90.88 190.848 190.848 0 0 0-13.056 157.056 468.16 468.16 0 0 1-182.464 108.416 171.776 171.776 0 0 0-271.552 0 463.68 463.68 0 0 1-179.584-106.88 191.36 191.36 0 0 0-12.032-159.936A176.96 176.96 0 0 0 54.848 625.088 518.912 518.912 0 0 1 40.768 512z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconshezhi1.defaultProps = {
  size: 18,
};

Iconshezhi1 = React.memo ? React.memo(Iconshezhi1) : Iconshezhi1;

export default Iconshezhi1;
