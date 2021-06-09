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

let Iconiconbuer: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64a448 448 0 1 0 0 896A448 448 0 0 0 512 64z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
      <Path
        d="M749.12 333.248a43.392 43.392 0 0 0-62.4 0L488.96 535.808l-93.632-96a43.392 43.392 0 0 0-62.4 0 46.016 46.016 0 0 0 0 64l124.8 128c17.28 17.6 45.248 17.6 62.464 0l228.928-234.624a46.08 46.08 0 0 0 0-64z"
        fill={getIconColor(color, 1, '#096DD9')}
      />
    </Svg>
  );
};

Iconiconbuer.defaultProps = {
  size: 18,
};

Iconiconbuer = React.memo ? React.memo(Iconiconbuer) : Iconiconbuer;

export default Iconiconbuer;
