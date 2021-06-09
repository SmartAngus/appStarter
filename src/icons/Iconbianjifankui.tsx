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

let Iconbianjifankui: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832.768 341.184c0-18.88 15.872-34.24 35.392-34.24 19.904 0 36.096 15.68 36.096 34.88v550.144c0 60.928-51.456 110.72-114.56 110.72H157.248c-63.104 0-114.56-49.792-114.56-110.72V203.008c0-60.992 51.456-110.72 114.56-110.72h493.696c20.672 0 37.376 16.128 37.376 36.096a40 40 0 0 1-40.704 39.296H149.12a34.688 34.688 0 0 0-35.136 33.92v691.84c0 18.816 15.936 33.984 35.136 33.984h648.512c19.392 0 35.136-15.36 35.136-33.92V341.12zM444.096 442.24H215.552a28.864 28.864 0 0 1-29.248-28.288V400.64c0-15.488 13.184-28.224 29.248-28.224h228.48c16.064 0 29.248 12.736 29.248 28.224v13.376a28.672 28.672 0 0 1-29.184 28.288V442.24z m214.336 210.048h-442.88a28.864 28.864 0 0 1-29.248-28.224v-13.44c0-15.488 13.184-28.224 29.248-28.224h442.88c16 0 29.248 12.8 29.248 28.224v13.44a28.864 28.864 0 0 1-29.248 28.224z m314.304-573.184l-366.272 355.84a30.272 30.272 0 0 1-41.472 0.192l-9.792-9.472a27.84 27.84 0 0 1-0.256-40.128l366.464-355.84a30.272 30.272 0 0 1 41.472-0.192L972.8 39.04c11.456 11.072 11.456 28.992 0 40.128v-0.064z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconbianjifankui.defaultProps = {
  size: 18,
};

Iconbianjifankui = React.memo ? React.memo(Iconbianjifankui) : Iconbianjifankui;

export default Iconbianjifankui;
