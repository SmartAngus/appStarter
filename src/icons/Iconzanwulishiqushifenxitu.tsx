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

let Iconzanwulishiqushifenxitu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1071 1024" width={size} height={size} {...rest}>
      <Path
        d="M91.856593 875.387259a38.513778 38.513778 0 0 1-38.52326-38.513778v-251.259259a38.513778 38.513778 0 1 1 77.037037 0v251.259259a38.513778 38.513778 0 0 1-38.523259 38.513778z m292.731259 0a38.513778 38.513778 0 0 1-38.513778-38.513778V472.462222a38.513778 38.513778 0 1 1 77.037037 0v364.411259a38.513778 38.513778 0 0 1-38.523259 38.513778z m292.750222 0a38.513778 38.513778 0 0 1-38.523259-38.513778V582.523259a38.513778 38.513778 0 1 1 77.037037 0v254.350222a38.513778 38.513778 0 0 1-38.523259 38.513778z m292.731259 0a38.513778 38.513778 0 0 1-38.513777-38.513778v-417.185185a38.513778 38.513778 0 1 1 77.037037 0v417.185185a38.513778 38.513778 0 0 1-38.52326 38.513778zM91.894519 407.495111a38.523259 38.523259 0 0 1-21.741038-70.352592l311.343408-212.328297a38.504296 38.504296 0 0 1 46.544592 2.370371L608.483556 279.419259 938.458074 12.591407a38.513778 38.513778 0 0 1 62.738963 29.515852l2.038519 183.789037a38.523259 38.523259 0 0 1-38.07763 38.940445h-0.417185a38.523259 38.523259 0 0 1-38.504297-38.087111l-1.185185-104.296297-292.864 236.885334a38.532741 38.532741 0 0 1-49.066666-0.512l-182.385778-153.884445-287.184593 195.849482c-6.381037 4.361481-13.937778 6.703407-21.665185 6.703407z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
      <Path
        d="M962.673778 81.057185H764.207407a38.513778 38.513778 0 1 1 0-77.037037h198.475852a38.513778 38.513778 0 1 1 0 77.037037z m61.838222 936.030815H45.937778a38.513778 38.513778 0 1 1 0-77.037037h978.574222a38.513778 38.513778 0 1 1 0 77.037037z"
        fill={getIconColor(color, 1, '#E0E7F5')}
      />
    </Svg>
  );
};

Iconzanwulishiqushifenxitu.defaultProps = {
  size: 18,
};

Iconzanwulishiqushifenxitu = React.memo ? React.memo(Iconzanwulishiqushifenxitu) : Iconzanwulishiqushifenxitu;

export default Iconzanwulishiqushifenxitu;