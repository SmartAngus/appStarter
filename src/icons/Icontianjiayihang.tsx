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

let Icontianjiayihang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M203.77632 862.336h323.392c0-18.624 2.368-36.672 6.784-53.952H203.77632v53.952z m592.832-215.616h-53.888c18.56 0 36.672 2.368 53.888 6.784v-6.784z m0 377.28v-107.776h107.776V808.32h-107.776v-107.776H688.83232v107.776H581.12032v107.84h107.776V1024h107.776z m-53.888-377.28h-538.88v53.888h396.288a214.912 214.912 0 0 1 142.592-53.888zM203.84032 485.12h592.768v53.888H203.77632v-53.888zM904.32032 11.328A11.2 11.2 0 0 0 893.31232 0H107.07232A11.2 11.2 0 0 0 96.00032 11.328v1001.344c0 6.272 4.928 11.328 11.072 11.328h493.056a217.28 217.28 0 0 1-44.16-53.888H149.88832V53.888H850.56032v621.696c20.288 11.712 38.528 26.688 53.888 44.16V11.2zM203.77632 323.392h592.832v53.888H203.77632v-53.888z m0-161.728h592.832v53.888H203.77632v-53.888z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Icontianjiayihang.defaultProps = {
  size: 18,
};

Icontianjiayihang = React.memo ? React.memo(Icontianjiayihang) : Icontianjiayihang;

export default Icontianjiayihang;
