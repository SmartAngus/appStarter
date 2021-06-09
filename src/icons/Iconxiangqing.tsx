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

let Iconxiangqing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M555.953231 401.486769H461.902769V307.436308h94.050462v94.050461z m0 376.201846H461.902769V495.458462h94.050462v282.151384zM508.928 72.388923c-258.599385 0-470.252308 211.574154-470.252308 470.252308 0 258.520615 211.652923 470.094769 470.252308 470.094769s470.173538-211.574154 470.173538-470.173538c0-258.599385-211.574154-470.252308-470.252307-470.252308z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconxiangqing.defaultProps = {
  size: 18,
};

Iconxiangqing = React.memo ? React.memo(Iconxiangqing) : Iconxiangqing;

export default Iconxiangqing;
