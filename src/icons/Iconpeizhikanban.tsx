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

let Iconpeizhikanban: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 1024L68.352 767.808V256.192L512 0l443.648 256.192v511.616L512 1024z m-300.544-338.496L512 858.688l300.544-173.184V338.56L512 165.312 211.456 338.496v347.008z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
      <Path
        d="M368.896 511.616a143.104 143.104 0 1 0 286.208 0 143.104 143.104 0 0 0-286.208 0z"
        fill={getIconColor(color, 1, '#096DD9')}
      />
    </Svg>
  );
};

Iconpeizhikanban.defaultProps = {
  size: 18,
};

Iconpeizhikanban = React.memo ? React.memo(Iconpeizhikanban) : Iconpeizhikanban;

export default Iconpeizhikanban;
