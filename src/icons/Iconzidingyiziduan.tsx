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

let Iconzidingyiziduan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M922.538667 485.461333A411.477333 411.477333 0 1 1 802.986667 221.013333l58.197333-58.197333a493.738667 493.738667 0 1 0 134.570667 249.429333l-73.130667 73.130667z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
      <Path
        d="M389.973333 553.045333l67.242667-269.653333a38.229333 38.229333 0 0 1 46.592-27.989333 35.84 35.84 0 0 1 27.306667 45.568l-44.970667 186.026666 464.896-279.381333a38.229333 38.229333 0 1 1 39.082667 65.024L525.226667 551.936l189.952 44.8a45.994667 45.994667 0 0 1 20.650666 49.493333 38.229333 38.229333 0 0 1-46.592 28.074667l-264.192-62.890667a41.216 41.216 0 0 1-35.072-58.368z"
        fill={getIconColor(color, 1, '#096DD9')}
      />
    </Svg>
  );
};

Iconzidingyiziduan.defaultProps = {
  size: 18,
};

Iconzidingyiziduan = React.memo ? React.memo(Iconzidingyiziduan) : Iconzidingyiziduan;

export default Iconzidingyiziduan;
