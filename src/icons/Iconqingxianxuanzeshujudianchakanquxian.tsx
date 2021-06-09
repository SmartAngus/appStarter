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

let Iconqingxianxuanzeshujudianchakanquxian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1396 1024" width={size} height={size} {...rest}>
      <Path
        d="M145.463855 567.277382a145.445236 145.445236 0 1 1 0-290.909091 145.445236 145.445236 0 0 1 0 290.909091z m219.992436 443.634036a145.445236 145.445236 0 1 1 0-290.909091 145.445236 145.445236 0 0 1 0 290.909091z m874.551854-201.821091a145.445236 145.445236 0 1 1 0-290.909091 145.445236 145.445236 0 0 1 0 290.909091z m-166.427927-262.851491c-23.440291 33.1776-37.217745 73.690764-37.217745 117.406255 0 42.449455 12.995491 81.901382 35.244218 114.539054h-427.845818l-119.994182-234.551854H307.274473a202.696145 202.696145 0 0 0 36.491636-116.363636c0-43.268655-13.479564-83.372218-36.491636-116.363637h336.505018l119.994182 236.376437 309.806545-1.042619zM836.365964 0h523.636363v174.545455c0 32.134982-26.065455 58.181818-58.181818 58.181818H778.184145V58.181818C778.184145 26.046836 804.230982 0 836.365964 0z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
    </Svg>
  );
};

Iconqingxianxuanzeshujudianchakanquxian.defaultProps = {
  size: 18,
};

Iconqingxianxuanzeshujudianchakanquxian = React.memo ? React.memo(Iconqingxianxuanzeshujudianchakanquxian) : Iconqingxianxuanzeshujudianchakanquxian;

export default Iconqingxianxuanzeshujudianchakanquxian;
