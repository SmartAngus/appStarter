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

let Iconyichugongxu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M516.608 31.232a482.304 482.304 0 1 1 0 964.608 482.304 482.304 0 0 1 0-964.608z m0 92.16a390.144 390.144 0 1 0 0 780.288 390.144 390.144 0 0 0 0-780.288z m199.68 356.352a46.08 46.08 0 1 1 0 92.16h-399.36a46.08 46.08 0 1 1 0-92.16h399.36z"
        fill={getIconColor(color, 0, '#E02020')}
      />
    </Svg>
  );
};

Iconyichugongxu.defaultProps = {
  size: 18,
};

Iconyichugongxu = React.memo ? React.memo(Iconyichugongxu) : Iconyichugongxu;

export default Iconyichugongxu;
