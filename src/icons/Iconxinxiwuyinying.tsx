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

let Iconxinxiwuyinying: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M560.298667 356.522667H458.410667V254.72h101.888v101.802667z m0 407.552H458.410667V458.410667h101.888v305.664zM509.44 0C229.205333 0 0 229.205333 0 509.44c0 280.064 229.205333 509.269333 509.44 509.269333 280.064 0 509.269333-229.205333 509.269333-509.354666C1018.709333 229.205333 789.504 0 509.44 0z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconxinxiwuyinying.defaultProps = {
  size: 18,
};

Iconxinxiwuyinying = React.memo ? React.memo(Iconxinxiwuyinying) : Iconxinxiwuyinying;

export default Iconxinxiwuyinying;
