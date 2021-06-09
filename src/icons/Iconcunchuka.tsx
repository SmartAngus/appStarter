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

let Iconcunchuka: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M908.068571 301.348571L669.988571 63.122286a35.108571 35.108571 0 0 0-24.868571-10.24H200.411429A105.325714 105.325714 0 0 0 95.085714 158.208v717.385143c0 58.148571 47.250286 105.325714 105.325715 105.325714h612.132571a105.325714 105.325714 0 0 0 105.325714-105.325714v-550.034286a35.108571 35.108571 0 0 0-9.801143-24.210286zM278.674286 472.210286v-217.234286A35.84 35.84 0 0 1 305.956571 219.428571a35.108571 35.108571 0 0 1 42.861715 34.304v216.868572a36.205714 36.205714 0 0 1-34.157715 36.717714 35.108571 35.108571 0 0 1-36.059428-35.108571zM451.584 253.805714v216.795429a36.132571 36.132571 0 0 1-34.377143 36.717714 35.108571 35.108571 0 0 1-35.84-35.108571v-217.234286A35.84 35.84 0 0 1 408.722286 219.428571a35.108571 35.108571 0 0 1 42.861714 34.377143z m172.397714 657.261715H389.558857a40.96 40.96 0 0 1-40.96-40.96 35.108571 35.108571 0 0 1 35.108572-35.108572h245.467428a35.108571 35.108571 0 0 1 35.108572 35.108572 40.96 40.96 0 0 1-40.228572 40.96z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconcunchuka.defaultProps = {
  size: 18,
};

Iconcunchuka = React.memo ? React.memo(Iconcunchuka) : Iconcunchuka;

export default Iconcunchuka;
