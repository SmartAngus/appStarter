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

let Iconweitianjiashebei1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1224 1024" width={size} height={size} {...rest}>
      <Path
        d="M1082.36 724.736c10.88 17.52 5.608 40.64-11.904 51.52l-313.864 196.208c-49.648 30.944-113.232 46.416-176.824 46.416-63.592 0-127.176-15.472-176.824-46.416L88.912 776.256c-17.52-10.88-22.784-34-11.904-51.52 10.88-17.512 34-22.784 51.52-11.896L442.56 909.04c74.296 46.416 199.944 46.416 274.248 0l314.032-196.208c17.52-10.88 40.64-5.616 51.52 11.896zM756.6 52.288l222.16 138.808V279.44L716.976 115.88c-37.232-23.296-87.216-35.024-137.2-35.024-50 0-99.984 11.56-137.216 34.856L128.696 312.08c-30.608 19.04-47.44 42.68-47.44 66.312 0 23.632 16.832 47.264 47.44 66.304L442.72 640.912c74.304 46.424 199.952 46.424 274.248 0l261.784-163.56v88.336l-222.16 138.816c-49.656 30.944-113.24 46.416-176.832 46.416s-127.176-15.472-176.824-46.416L88.912 508.296C35.68 474.968 6.272 428.896 6.272 378.4c0-50.496 29.416-96.576 82.64-129.904L402.944 52.288c99.12-61.888 254.528-62.056 353.648 0z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
      <Path
        d="M1019.392 509.624v-112.96h-109.248c-13.584 0-21.4-12.752-21.4-29.208 0-15.224 5.76-29.624 20.16-29.624h114.192v-110.08c0-16.048 11.936-25.096 29.624-25.096 16.464 0 29.216 7.408 29.216 21.392v109.664h117.072c16.456 0 17.28 19.76 17.28 33.328 0 13.584-4.528 29.216-20.984 29.216h-113.36v113.368c0.4 13.992-12.352 21.4-29.224 21.4s-33.328-3.704-33.328-21.4z"
        fill={getIconColor(color, 1, '#F5222D')}
      />
    </Svg>
  );
};

Iconweitianjiashebei1.defaultProps = {
  size: 18,
};

Iconweitianjiashebei1 = React.memo ? React.memo(Iconweitianjiashebei1) : Iconweitianjiashebei1;

export default Iconweitianjiashebei1;
