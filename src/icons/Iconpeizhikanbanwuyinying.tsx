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

let Iconpeizhikanbanwuyinying: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M507.648 0l443.648 256.192v511.616L507.648 1024 64 767.808V256.192L507.648 0z m0 165.312L207.104 338.496v347.008l300.544 173.184 300.544-173.184V338.56L507.648 165.312z m0 203.2a143.104 143.104 0 1 1 0 286.272 143.104 143.104 0 0 1 0-286.272z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconpeizhikanbanwuyinying.defaultProps = {
  size: 18,
};

Iconpeizhikanbanwuyinying = React.memo ? React.memo(Iconpeizhikanbanwuyinying) : Iconpeizhikanbanwuyinying;

export default Iconpeizhikanbanwuyinying;
