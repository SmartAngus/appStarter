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

let Iconzuixiaobeifen: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M509.056 0c280.896 0 509.12 228.224 509.12 509.056 0 280.896-228.224 509.12-509.12 509.12C228.224 1018.176 0 789.952 0 509.056 0 228.224 228.224 0 509.056 0z m32.128 270.336c-22.016 57.856-57.856 115.2-97.28 154.112v-36.352H389.12V276.992h-58.368v111.104H276.48v57.856h54.272v152.576c-23.04 10.752-43.008 19.968-59.904 26.112l20.992 62.464A5097.6 5097.6 0 0 0 464.896 591.36l-14.848-49.664c-20.48 9.728-40.448 19.968-60.928 29.184V445.952h54.784v-3.584c11.264 13.824 23.552 31.232 29.696 40.96 22.016-21.504 43.52-50.176 64-80.896h142.336c-4.608 186.88-10.24 265.728-25.088 282.112-5.632 7.168-11.264 8.704-21.504 8.704H620.16a777.6 777.6 0 0 1-63.616-3.072c9.728 16.384 17.408 41.472 18.432 57.856 30.208 0.512 62.976 1.536 81.92-1.536 20.992-3.072 34.816-8.704 49.152-28.16 19.456-27.648 24.576-109.056 30.208-343.04 0.512-7.168 0.512-28.16 0.512-28.16H569.344c10.24-19.456 19.456-39.424 27.136-59.392l-55.296-17.408z m114.688 263.68c-70.656 37.376-146.944 76.8-195.072 97.792l23.04 54.784a5422.464 5422.464 0 0 0 185.856-104.96l-13.824-47.616zM539.136 445.44l-35.84 33.792c28.16 24.576 64 59.392 81.408 79.872l37.376-40.448C604.16 499.2 568.832 468.48 539.136 445.44z"
        fill={getIconColor(color, 0, '#7EB348')}
      />
    </Svg>
  );
};

Iconzuixiaobeifen.defaultProps = {
  size: 18,
};

Iconzuixiaobeifen = React.memo ? React.memo(Iconzuixiaobeifen) : Iconzuixiaobeifen;

export default Iconzuixiaobeifen;
