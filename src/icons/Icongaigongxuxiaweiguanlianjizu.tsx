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

let Icongaigongxuxiaweiguanlianjizu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M415.001098 471.843137v538.724392h585.647686V471.843137A46.943373 46.943373 0 0 0 953.72549 424.919843H461.803922a46.923294 46.923294 0 0 0-46.802824 46.923294z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
      <Path
        d="M382.996078 347.858824h216.96753V57.103059A46.481569 46.481569 0 0 0 553.562353 10.641569H66.017882A46.481569 46.481569 0 0 0 19.576471 57.103059v955.351843h309.087372V402.191059a54.211765 54.211765 0 0 1 54.332235-54.332235z"
        fill={getIconColor(color, 1, '#E0E7F5')}
      />
    </Svg>
  );
};

Icongaigongxuxiaweiguanlianjizu.defaultProps = {
  size: 18,
};

Icongaigongxuxiaweiguanlianjizu = React.memo ? React.memo(Icongaigongxuxiaweiguanlianjizu) : Icongaigongxuxiaweiguanlianjizu;

export default Icongaigongxuxiaweiguanlianjizu;
