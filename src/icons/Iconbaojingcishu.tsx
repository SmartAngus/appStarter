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

let Iconbaojingcishu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M144.64 314.56v682.112h738.816V314.56H144.64z m656 599.296H227.456v-516.48h573.056v516.48zM197.12 172.288h635.264v82.88H197.12V172.288zM274.56 16.256h480.512V99.2H274.56V16.256z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconbaojingcishu.defaultProps = {
  size: 18,
};

Iconbaojingcishu = React.memo ? React.memo(Iconbaojingcishu) : Iconbaojingcishu;

export default Iconbaojingcishu;
