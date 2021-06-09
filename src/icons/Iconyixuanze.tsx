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

let Iconyixuanze: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0.896 79.36v187.904h62.912V79.36h188.8V16.448H63.808c-65.28 0-62.912 64.576-62.912 62.912z m62.912 691.392H0.896v189.696c0-1.6-2.368 62.976 62.912 62.976h188.8v-62.976H63.808v-189.696z m881.152-503.488h62.912V79.36c0 1.664 2.304-62.912-62.912-62.912h-189.312v62.912h189.312v187.904z m62.912 693.184v-189.696h-62.912v189.696h-189.312v62.976h189.312c65.28 0 62.912-64.64 62.912-62.976z m-315.328-290.688L501.056 478.528l130.432-58.176-378.88-153.28 143.296 377.472 61.44-123.52 192.128 191.872a30.464 30.464 0 1 0 43.072-43.136z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconyixuanze.defaultProps = {
  size: 18,
};

Iconyixuanze = React.memo ? React.memo(Iconyixuanze) : Iconyixuanze;

export default Iconyixuanze;
