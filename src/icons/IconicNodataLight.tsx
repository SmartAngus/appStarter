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

let IconicNodataLight: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M147.393939 232.727273a116.363636 116.363636 0 1 1 0-232.727273 116.363636 116.363636 0 0 1 0 232.727273zM281.103515 23.272727h682.294303v418.909091a46.545455 46.545455 0 0 1-46.545454 46.545455H32.488727v-139.636364a46.545455 46.545455 0 0 1 46.545455-46.545454h698.181818v-93.09091H281.103515c18.40097-26.375758 29.199515-58.492121 29.199515-93.090909s-10.798545-66.715152-29.199515-93.090909zM870.306909 791.272727a116.363636 116.363636 0 1 1 0 232.727273 116.363636 116.363636 0 0 1 0-232.727273z m-133.740606 209.454546H54.30303v-418.909091a46.545455 46.545455 0 0 1 46.545455-46.545455h884.363636v139.636364a46.545455 46.545455 0 0 1-46.545454 46.545454H240.484848v93.09091h496.112485a162.164364 162.164364 0 0 0-29.199515 93.090909c0 34.598788 10.798545 66.715152 29.168485 93.090909z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
    </Svg>
  );
};

IconicNodataLight.defaultProps = {
  size: 18,
};

IconicNodataLight = React.memo ? React.memo(IconicNodataLight) : IconicNodataLight;

export default IconicNodataLight;
