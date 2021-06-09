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

let Iconshanchu1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M983.259429 161.645714H40.740571a40.374857 40.374857 0 0 0 0 80.749715H121.417143v659.748571c0 69.412571 71.094857 121.270857 134.656 121.270857h511.707428c63.414857 0 107.739429-49.883429 107.739429-121.197714V242.395429h107.666286a40.374857 40.374857 0 0 0 0-80.822858z m-188.489143 740.571429c0 18.432-4.681143 40.374857-26.916572 40.374857H256.146286c-25.161143 0-53.833143-21.504-53.833143-40.374857V242.395429h592.457143v659.748571zM390.802286 80.822857h242.395428a40.374857 40.374857 0 0 0 0-80.822857H390.802286a40.374857 40.374857 0 0 0 0 80.822857zM377.417143 875.300571a40.374857 40.374857 0 0 0 40.374857-40.448V350.134857a40.374857 40.374857 0 0 0-80.749714 0v484.717714c0 22.308571 18.066286 40.448 40.374857 40.448z m242.395428 0a40.374857 40.374857 0 0 0 40.374858-40.448V350.134857a40.374857 40.374857 0 0 0-80.822858 0v484.717714c0 22.308571 18.139429 40.448 40.448 40.448z"
        fill={getIconColor(color, 0, '#D0021B')}
      />
    </Svg>
  );
};

Iconshanchu1.defaultProps = {
  size: 18,
};

Iconshanchu1 = React.memo ? React.memo(Iconshanchu1) : Iconshanchu1;

export default Iconshanchu1;
