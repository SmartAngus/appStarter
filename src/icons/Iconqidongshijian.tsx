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

let Iconqidongshijian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.04 7.808a501.824 501.824 0 1 1 0 1003.712 501.888 501.888 0 1 1 0-1003.712zM465.92 341.504l-55.808 9.216c7.168 14.336 14.336 30.208 20.992 47.104H263.68V581.12c-0.512 83.456-19.456 151.552-56.32 204.8l41.984 37.888c44.032-68.096 66.56-148.992 67.072-242.688v-21.504h333.824V397.824H485.888c-6.656-20.48-13.312-39.424-19.968-56.32z m178.176 274.944H335.872v206.848h52.224v-23.04h203.776v23.04h52.224V616.448z m-52.224 50.176v83.456H388.096v-83.456h203.776zM596.992 448v62.464H316.416V448h280.576z m100.8-295.68a22.656 22.656 0 0 0-22.592 22.656v146.688a22.656 22.656 0 0 0 22.592 22.656h146.752a22.656 22.656 0 1 0 0-45.312h-124.032V174.976a22.656 22.656 0 0 0-22.72-22.656z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconqidongshijian.defaultProps = {
  size: 18,
};

Iconqidongshijian = React.memo ? React.memo(Iconqidongshijian) : Iconqidongshijian;

export default Iconqidongshijian;
