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

let Iconchakanxiangqing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1365 1024" width={size} height={size} {...rest}>
      <Path
        d="M1310.122667 397.056a759.722667 759.722667 0 0 0-127.744-178.688 720.981333 720.981333 0 0 0-1033.813334 0A759.722667 759.722667 0 0 0 20.821333 397.056a191.146667 191.146667 0 0 0 0 173.568c33.706667 65.450667 76.8 125.696 127.744 178.773333a720.981333 720.981333 0 0 0 1033.813334 0 759.722667 759.722667 0 0 0 127.744-178.773333 191.146667 191.146667 0 0 0 0-173.568zM665.514667 703.317333a219.392 219.392 0 1 1 0-438.869333 219.392 219.392 0 0 1 0 438.869333z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconchakanxiangqing.defaultProps = {
  size: 18,
};

Iconchakanxiangqing = React.memo ? React.memo(Iconchakanxiangqing) : Iconchakanxiangqing;

export default Iconchakanxiangqing;
