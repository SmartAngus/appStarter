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

let Iconjieshushijian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.04 7.808a501.824 501.824 0 1 1 0 1003.712 501.888 501.888 0 1 1 0-1003.712z m145.344 596.352H422.4v215.552h52.224v-18.944h130.048v18.944h51.712V604.16z m-253.44 104.96c-52.736 18.432-114.176 32.768-184.32 43.52l6.656 52.224c66.56-11.776 125.44-27.136 177.664-45.568v-50.176z m201.728-54.784v96.256H474.624v-96.256h130.048z m-307.2-309.76c-17.92 54.784-38.912 104.96-63.488 150.528a55.68 55.68 0 0 1-22.016 19.456l12.8 48.64c26.624-3.584 52.224-7.168 76.8-10.24-23.552 39.424-43.008 67.072-58.368 82.432a88.064 88.064 0 0 1-24.064 15.36l14.336 48.128c51.2-6.656 105.472-19.968 163.328-39.424V611.84c-33.792 11.264-66.56 20.48-99.328 27.648 28.672-36.864 64.512-93.696 106.496-171.008l-46.592-17.408c-10.24 18.944-19.456 36.864-28.16 53.76-18.432 2.56-36.864 4.608-55.296 6.656 25.088-38.4 49.664-87.552 73.728-147.456l-50.176-19.456z m267.264 4.608h-53.76v56.32H394.752v51.2h116.224v60.416H411.648v51.2h254.464v-51.2H564.736v-60.416h116.224v-51.2H564.736v-56.32z m133.12-196.864a22.656 22.656 0 0 0-22.656 22.656v146.688a22.656 22.656 0 0 0 22.592 22.656h146.752a22.656 22.656 0 1 0 0-45.312h-124.032V174.976a22.656 22.656 0 0 0-22.72-22.656z"
        fill={getIconColor(color, 0, '#E02020')}
      />
    </Svg>
  );
};

Iconjieshushijian.defaultProps = {
  size: 18,
};

Iconjieshushijian = React.memo ? React.memo(Iconjieshushijian) : Iconjieshushijian;

export default Iconjieshushijian;
