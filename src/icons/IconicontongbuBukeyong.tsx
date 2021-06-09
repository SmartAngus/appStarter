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

let IconicontongbuBukeyong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M834.166154 131.702154h72.940308v797.538461a29.538462 29.538462 0 0 1-29.538462 29.538462H195.662769v-72.940308h608.886154a29.538462 29.538462 0 0 0 29.538462-29.538461v-724.676923zM115.633231 22.212923h681.826461v797.459692a29.538462 29.538462 0 0 1-29.538461 29.538462H86.173538V51.672615C86.173538 35.446154 99.406769 22.134154 115.712 22.134154zM213.858462 277.267692a54.665846 54.665846 0 1 0 0-109.410461 54.665846 54.665846 0 0 0 0 109.410461zM319.803077 167.936a14.808615 14.808615 0 0 0-14.729846 14.808615v94.523077H709.710769a14.808615 14.808615 0 0 0 14.808616-14.729846v-94.523077H319.803077zM173.922462 350.286769a14.729846 14.729846 0 0 0-14.808616 14.729846v94.601847h550.675692a14.808615 14.808615 0 0 0 14.808616-14.808616v-94.523077H173.922462z m0 182.272a14.729846 14.729846 0 0 0-14.808616 14.729846V641.969231h550.675692a14.808615 14.808615 0 0 0 14.808616-14.729846V532.48H173.922462z"
        fill={getIconColor(color, 0, '#B4D3F4')}
      />
    </Svg>
  );
};

IconicontongbuBukeyong.defaultProps = {
  size: 18,
};

IconicontongbuBukeyong = React.memo ? React.memo(IconicontongbuBukeyong) : IconicontongbuBukeyong;

export default IconicontongbuBukeyong;
