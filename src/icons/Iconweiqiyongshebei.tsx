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

let Iconweiqiyongshebei: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1217 1024" width={size} height={size} {...rest}>
      <Path
        d="M1086.988094 727.386709c10.933417 17.601512 5.644094 40.839055-11.96548 51.780535l-315.464567 197.204662c-49.901858 31.107024-113.809134 46.652472-177.724472 46.652472-63.915339 0-127.822614-15.545449-177.724473-46.652472L88.475213 779.167244c-17.601512-10.94148-22.898898-34.187087-11.965481-51.780535 10.933417-17.601512 34.179024-22.898898 51.780536-11.965481l315.633889 197.212725c74.679433 46.652472 200.970079 46.652472 275.649512 0l315.63389-197.212725c17.601512-10.933417 40.839055-5.644094 51.780535 11.965481zM759.558047 51.514457l232.859213 145.480567a174.966929 174.966929 0 0 0-65.229606 48.055433L719.742992 115.421732c-37.428409-23.414929-87.668913-35.211087-137.909417-35.211086s-100.481008 11.626835-137.909418 35.0337l-315.464566 197.382048c-30.760315 19.141543-47.676472 42.895118-47.676473 66.648693 0 23.753575 16.916157 47.50715 47.676473 66.648693l315.633889 197.204661c74.679433 46.652472 200.970079 46.652472 275.649512 0l234.794331-146.698079a173.59622 173.59622 0 0 0 86.548157 34.719244L759.558047 707.051843c-49.901858 31.098961-113.809134 46.652472-177.724472 46.652472-63.915339 0-127.822614-15.553512-177.724473-46.652472L88.475213 509.839118C34.985323 476.345449 5.426394 430.039685 5.426394 379.28315S34.97726 282.204724 88.46715 248.719118L404.109102 51.52252c99.626331-62.205984 255.822614-62.375307 355.448945 0z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
      <Path
        d="M929.453354 390.06337H731.208567c-18.061102 0-32.695433-14.473071-32.695433-32.332598 0-17.851465 14.642394-32.324535 32.695433-32.324536h198.244787c14.95685-57.061795 67.035717-96.917165 126.661544-96.917165 59.617764 0 111.69663 39.85537 126.65348 96.917165 18.093354 0 32.727685 14.473071 32.727685 32.332599 0 17.851465-14.634331 32.332598-32.695433 32.332598-14.989102 57.061795-67.067969 96.917165-126.685732 96.917165-59.625827 0-111.704693-39.85537-126.669607-96.917165z m126.661544 32.332599c36.106079 0 65.390866-28.946142 65.390866-64.665197 0-35.702929-29.284787-64.649071-65.390866-64.649071-36.122205 0-65.390866 28.946142-65.390867 64.657134 0 35.702929 29.268661 64.649071 65.390867 64.649071z"
        fill={getIconColor(color, 1, '#52C41A')}
      />
    </Svg>
  );
};

Iconweiqiyongshebei.defaultProps = {
  size: 18,
};

Iconweiqiyongshebei = React.memo ? React.memo(Iconweiqiyongshebei) : Iconweiqiyongshebei;

export default Iconweiqiyongshebei;