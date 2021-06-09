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

let Iconhouzhiyiceng: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1097 1024" width={size} height={size} {...rest}>
      <Path
        d="M73.142857 80.457143a73.142857 73.142857 0 0 1 73.142857-73.142857h804.571429a73.142857 73.142857 0 1 1 0 146.285714H146.285714a73.142857 73.142857 0 0 1-73.142857-73.142857z m-36.571428 365.714286h365.714285a36.571429 36.571429 0 1 0 0-73.142858h-365.714285a36.571429 36.571429 0 1 0 0 73.142858z m658.285714 0h365.714286a36.571429 36.571429 0 1 0 0-73.142858h-365.714286a36.571429 36.571429 0 1 0 0 73.142858z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 958.171429h73.142857v-804.571429H512z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M786.285714 749.714286a35.693714 35.693714 0 0 1-0.365714 50.834285l-185.636571 180.516572a73.142857 73.142857 0 0 1-102.692572-0.731429L318.171429 800.914286a36.205714 36.205714 0 0 1 51.2-51.2L548.571429 928.914286l186.075428-179.638857a36.864 36.864 0 0 1 51.638857 0.438857z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

Iconhouzhiyiceng.defaultProps = {
  size: 18,
};

Iconhouzhiyiceng = React.memo ? React.memo(Iconhouzhiyiceng) : Iconhouzhiyiceng;

export default Iconhouzhiyiceng;
