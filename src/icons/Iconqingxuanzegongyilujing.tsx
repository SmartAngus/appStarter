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

let Iconqingxuanzegongyilujing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M145.454545 232.727273C81.186909 232.727273 29.090909 180.631273 29.090909 116.363636S81.186909 0 145.454545 0s116.363636 52.096 116.363637 116.363636-52.096 116.363636-116.363637 116.363637zM279.156364 23.272727h682.298181v418.909091a46.545455 46.545455 0 0 1-46.545454 46.545455h-884.363636V349.090909a46.545455 46.545455 0 0 1 46.545454-46.545454h698.181818v-93.09091H279.168A162.164364 162.164364 0 0 0 308.363636 116.363636c0-34.606545-10.798545-66.699636-29.207272-93.090909z m589.207272 768c64.267636 0 116.363636 52.096 116.363637 116.363637s-52.096 116.363636-116.363637 116.363636-116.363636-52.096-116.363636-116.363636 52.096-116.363636 116.363636-116.363637z m-133.701818 209.454546H52.363636V581.818182a46.545455 46.545455 0 0 1 46.545455-46.545455h884.363636v139.636364a46.545455 46.545455 0 0 1-46.545454 46.545454H238.545455v93.09091h496.104727a162.164364 162.164364 0 0 0-29.195637 93.090909c0 34.618182 10.798545 66.699636 29.207273 93.090909z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
    </Svg>
  );
};

Iconqingxuanzegongyilujing.defaultProps = {
  size: 18,
};

Iconqingxuanzegongyilujing = React.memo ? React.memo(Iconqingxuanzegongyilujing) : Iconqingxuanzegongyilujing;

export default Iconqingxuanzegongyilujing;
