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

let Iconjianqie: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M324.923077 732.553846H708.923077V348.553846L324.923077 732.553846zM236.307692 655.753846L632.123077 259.938462H236.307692v395.815384zM750.276923 141.784615L850.707692 41.353846a58.446769 58.446769 0 1 1 82.707693 82.707692l-106.338462 106.338462V732.553846h59.076923a59.076923 59.076923 0 1 1 0 118.153846h-59.076923v59.076923a59.076923 59.076923 0 1 1-118.153846 0v-59.076923H196.923077a78.769231 78.769231 0 0 1-78.769231-78.76923V259.938462H59.076923a59.076923 59.076923 0 0 1 0-118.153847h59.076923v-59.076923a59.076923 59.076923 0 1 1 118.153846 0v59.076923h513.969231z"
        fill={getIconColor(color, 0, '#2E4257')}
      />
    </Svg>
  );
};

Iconjianqie.defaultProps = {
  size: 18,
};

Iconjianqie = React.memo ? React.memo(Iconjianqie) : Iconjianqie;

export default Iconjianqie;
