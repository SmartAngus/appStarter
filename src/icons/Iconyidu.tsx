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

let Iconyidu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M956.8 353.6a147.2 147.2 0 0 0-40-30.4l-1.6 1.6L638.4 83.2c-35.2-32-83.2-51.2-134.4-51.2-54.4 0-100.8 17.6-137.6 51.2L108.8 323.2C62.4 345.6 32 390.4 32 440v420.8c0 72 64 131.2 140.8 131.2h678.4c78.4 0 140.8-59.2 140.8-131.2V440c0-32-12.8-62.4-35.2-86.4z m-281.6 270.4l244.8-228.8c9.6 12.8 14.4 28.8 14.4 44.8v427.2l-259.2-243.2zM406.4 121.6c25.6-24 60.8-36.8 96-36.8s70.4 12.8 96 36.8l276.8 241.6-278.4 259.2c-51.2 48-136 48-188.8 0L137.6 369.6 406.4 121.6z m-313.6 760c-1.6-6.4-3.2-14.4-3.2-22.4v-419.2c0-11.2 3.2-24 8-33.6l252.8 235.2-257.6 240z m80 57.6c-17.6 0-33.6-4.8-48-14.4l265.6-248c32 22.4 70.4 33.6 110.4 33.6 49.6 0 96-17.6 132.8-49.6l275.2 256c-16 14.4-35.2 22.4-59.2 22.4H172.8z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconyidu.defaultProps = {
  size: 18,
};

Iconyidu = React.memo ? React.memo(Iconyidu) : Iconyidu;

export default Iconyidu;
