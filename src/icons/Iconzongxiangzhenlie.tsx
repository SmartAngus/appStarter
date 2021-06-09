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

let Iconzongxiangzhenlie: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1228 1024" width={size} height={size} {...rest}>
      <Path
        d="M312.012176 402.330843h604.77319c2.662395 0 4.81279 2.355195 4.812791 5.32479v194.047612c0 3.071994-2.150396 5.427189-4.812791 5.427189H312.012176c-2.662395 0-4.81279-2.457595-4.81279-5.427189V407.655633c0-2.969594 2.150396-5.324789 4.81279-5.32479zM79.97424 43.93156A44.031912 44.031912 0 0 1 124.210952 0.002048h1060.349879a44.031912 44.031912 0 0 1 0 87.859024H124.210952A43.724713 43.724713 0 0 1 79.87184 43.82916z m0 921.598157A44.031912 44.031912 0 0 1 124.210952 921.600205h1060.349879a44.031912 44.031912 0 0 1 0 87.859024H124.210952a43.724713 43.724713 0 0 1-44.236712-44.031912z"
        fill={getIconColor(color, 0, '#2E4257')}
      />
    </Svg>
  );
};

Iconzongxiangzhenlie.defaultProps = {
  size: 18,
};

Iconzongxiangzhenlie = React.memo ? React.memo(Iconzongxiangzhenlie) : Iconzongxiangzhenlie;

export default Iconzongxiangzhenlie;
