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

let Icontianjia: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M535.296 488.704v-256h-46.592v256h-256v46.592h256v256h46.592v-256h256v-46.592h-256zM512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z m0-46.528A465.472 465.472 0 1 0 512 46.528a465.472 465.472 0 0 0 0 930.944z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Icontianjia.defaultProps = {
  size: 18,
};

Icontianjia = React.memo ? React.memo(Icontianjia) : Icontianjia;

export default Icontianjia;
