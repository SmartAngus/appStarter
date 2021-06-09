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

let Iconqianzhiyiceng: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1097 1024" width={size} height={size} {...rest}>
      <Path
        d="M73.142857 943.542857a73.142857 73.142857 0 0 0 73.142857 73.142857h804.571429a73.142857 73.142857 0 1 0 0-146.285714H146.285714a73.142857 73.142857 0 0 0-73.142857 73.142857z m-36.571428-365.714286h365.714285a36.571429 36.571429 0 1 1 0 73.142858h-365.714285a36.571429 36.571429 0 1 1 0-73.142858z m658.285714 0h365.714286a36.571429 36.571429 0 1 1 0 73.142858h-365.714286a36.571429 36.571429 0 1 1 0-73.142858zM512 65.828571h73.142857v804.571429H512z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M786.285714 274.285714a35.693714 35.693714 0 0 0-0.365714-50.834285L600.283429 42.934857a73.142857 73.142857 0 0 0-102.692572 0.731429L318.171429 223.085714a36.205714 36.205714 0 0 0 51.2 51.2L548.571429 95.085714l186.075428 179.638857c14.482286 13.970286 37.449143 13.750857 51.638857-0.438857z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconqianzhiyiceng.defaultProps = {
  size: 18,
};

Iconqianzhiyiceng = React.memo ? React.memo(Iconqianzhiyiceng) : Iconqianzhiyiceng;

export default Iconqianzhiyiceng;
