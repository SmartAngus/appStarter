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

let Iconxinzengchaxuntiaojian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M989.622857 766.756571a35.620571 35.620571 0 0 0-25.234286-10.971428h-135.314285V620.397714a35.986286 35.986286 0 0 0-36.571429-35.254857c-20.114286 0-36.571429 15.872-36.571428 35.254857v135.387429H620.470857a35.986286 35.986286 0 0 0-35.181714 36.571428c0 20.114286 15.798857 36.571429 35.181714 36.571429h135.460572v135.606857a35.84 35.84 0 0 0 36.571428 34.962286h0.146286a35.620571 35.620571 0 0 0 36.571428-35.254857v-135.314286h135.533715a35.84 35.84 0 0 0 34.962285-36.571429 36.864 36.864 0 0 0-10.093714-25.6zM512 926.354286H134.070857a36.644571 36.644571 0 0 1-36.571428-36.571429V133.997714c0-20.114286 16.457143-36.571429 36.571428-36.571428h755.858286c20.114286 0 36.571429 16.457143 36.571428 36.571428v377.856h73.142858V85.723429a61.659429 61.659429 0 0 0-61.44-61.44H85.796571a61.659429 61.659429 0 0 0-61.44 61.44v852.48c0 33.718857 27.721143 61.44 61.44 61.44H512v-73.289143z m-36.571429 36.571428a36.571429 36.571429 0 1 0 73.142858 0 36.571429 36.571429 0 0 0-73.142858 0zM926.500571 512a36.571429 36.571429 0 1 0 73.142858 0 36.571429 36.571429 0 0 0-73.142858 0z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconxinzengchaxuntiaojian.defaultProps = {
  size: 18,
};

Iconxinzengchaxuntiaojian = React.memo ? React.memo(Iconxinzengchaxuntiaojian) : Iconxinzengchaxuntiaojian;

export default Iconxinzengchaxuntiaojian;
