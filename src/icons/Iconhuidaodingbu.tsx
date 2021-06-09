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

let Iconhuidaodingbu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M117.921684 891.796211H916.210526v111.130947a10.078316 10.078316 0 0 1-10.13221 10.13221H107.789474v-111.184842c0-5.551158 4.527158-10.078316 10.13221-10.078315zM582.925474 332.261053v488.825263c0 16.707368-13.581474 30.288842-30.342737 30.288842H421.241263v-507.149474L241.879579 517.497263a30.288842 30.288842 0 0 1-42.900211-0.754526L107.789474 422.265263 493.029053 50.122105a30.288842 30.288842 0 0 1 42.846315 0.754527l90.758737 94.046315 0.10779-0.107789 259.664842 268.988631c11.641263 12.018526 11.317895 31.258947-0.754526 42.846316l-94.423579 91.297684-208.303158-215.740631z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconhuidaodingbu.defaultProps = {
  size: 18,
};

Iconhuidaodingbu = React.memo ? React.memo(Iconhuidaodingbu) : Iconhuidaodingbu;

export default Iconhuidaodingbu;
