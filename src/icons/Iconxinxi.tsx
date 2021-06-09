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

let Iconxinxi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M516.962462 738.461538a55.926154 55.926154 0 0 0 38.596923-14.493538 52.617846 52.617846 0 0 0 15.123692-37.966769c0-15.123692-5.513846-27.569231-15.123692-37.100308a54.980923 54.980923 0 0 0-38.596923-14.572308c-15.281231 0-27.569231 4.804923-37.179077 14.493539a46.395077 46.395077 0 0 0-15.911385 37.179077c0 15.202462 4.804923 27.569231 15.911385 37.179077 9.609846 9.767385 22.055385 15.281231 37.100307 15.28123z m30.956307-170.614153l14.178462-289.161847a30.72 30.72 0 0 0-30.72-32.295384h-28.514462a30.798769 30.798769 0 0 0-30.72 32.295384l14.178462 289.161847a30.798769 30.798769 0 0 0 61.597538 0zM492.307692 984.615385a492.307692 492.307692 0 1 1 0-984.615385 492.307692 492.307692 0 0 1 0 984.615385z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconxinxi.defaultProps = {
  size: 18,
};

Iconxinxi = React.memo ? React.memo(Iconxinxi) : Iconxinxi;

export default Iconxinxi;
