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

let Iconniantie: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832.292571 773.412571a49.737143 49.737143 0 0 1 0-99.474285 48.128 48.128 0 0 0 48.054858-48.201143V194.413714A48.128 48.128 0 0 0 832.365714 146.285714H400.969143a48.128 48.128 0 0 0-48.128 48.128 49.737143 49.737143 0 0 1-99.547429 0A147.968 147.968 0 0 1 400.969143 46.811429h431.323428a147.968 147.968 0 0 1 147.602286 147.602285v431.323429a147.968 147.968 0 0 1-147.602286 147.675428z m-220.672 215.771429H198.509714A155.794286 155.794286 0 0 1 42.569143 833.097143v-414.72a155.794286 155.794286 0 0 1 155.940571-156.013714h413.110857a155.794286 155.794286 0 0 1 155.940572 155.940571v414.72c1.609143 86.308571-69.632 156.013714-155.940572 156.013714z"
        fill={getIconColor(color, 0, '#2E4257')}
      />
    </Svg>
  );
};

Iconniantie.defaultProps = {
  size: 18,
};

Iconniantie = React.memo ? React.memo(Iconniantie) : Iconniantie;

export default Iconniantie;
