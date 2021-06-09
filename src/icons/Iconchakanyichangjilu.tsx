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

let Iconchakanyichangjilu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1228 1024" width={size} height={size} {...rest}>
      <Path
        d="M1204.224 54.613333v720.896l-524.288-0.068266v65.536l131.072 0.068266v131.072H417.792v-131.072l131.072-0.068266v-65.536l-524.288 0.068266V54.613333h1179.648zM679.936 513.365333H548.864v131.072h131.072V513.365333z m0-327.68H548.864v262.144h131.072V185.685333z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconchakanyichangjilu.defaultProps = {
  size: 18,
};

Iconchakanyichangjilu = React.memo ? React.memo(Iconchakanyichangjilu) : Iconchakanyichangjilu;

export default Iconchakanyichangjilu;
