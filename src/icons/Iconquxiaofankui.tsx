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

let Iconquxiaofankui: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M490.944 92.288c20.672 0 37.376 16.128 37.376 36.096a40 40 0 0 1-40.704 39.296H181.12a34.688 34.688 0 0 0-35.136 33.92v691.84c0 18.816 15.936 33.984 35.136 33.984h648.512c19.392 0 35.136-15.36 35.136-33.92V469.12c0-18.88 15.872-34.24 35.392-34.24 19.904 0 36.096 15.68 36.096 34.88v422.144c0 60.928-51.456 110.72-114.56 110.72H189.248c-63.104 0-114.56-49.792-114.56-110.72V203.008c0-60.992 51.456-110.72 114.56-110.72H490.88zM690.432 582.4c16 0 29.248 12.8 29.248 28.224v13.44a28.864 28.864 0 0 1-29.248 28.224h-442.88a28.864 28.864 0 0 1-29.248-28.224v-13.44c0-15.488 13.184-28.224 29.248-28.224h442.88z m-214.4-209.984c16.064 0 29.248 12.736 29.248 28.224v13.376a28.672 28.672 0 0 1-29.184 28.288V442.24H247.552a28.864 28.864 0 0 1-29.248-28.288V400.64c0-15.488 13.184-28.224 29.248-28.224h228.48zM961.28 9.472a32.256 32.256 0 0 1 0.64 44.992L824.256 192l137.6 137.6a32.256 32.256 0 0 1-45.568 45.568l-137.6-137.6-137.28 137.28a32.256 32.256 0 0 1-45.568-45.632L733.056 192 596.096 54.976a32.256 32.256 0 0 1 45.632-45.504l136.896 136.896 137.6-137.536a32.256 32.256 0 0 1 44.992 0.64z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconquxiaofankui.defaultProps = {
  size: 18,
};

Iconquxiaofankui = React.memo ? React.memo(Iconquxiaofankui) : Iconquxiaofankui;

export default Iconquxiaofankui;
