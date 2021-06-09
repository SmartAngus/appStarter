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

let IconjiankangzhiXiao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M355.456 7.168c14.272 0 25.856 11.52 25.856 25.856v51.584h103.424V33.024c0-14.272 11.52-25.856 25.856-25.856 14.656 0 26.24 11.52 26.24 25.856v51.584h103.296V33.024c0-14.272 11.52-25.856 25.856-25.856 14.592 0 26.24 11.52 26.24 25.856v51.584h137.856c39.68 0 69.12 47.424 69.44 85.504v769.536c0 38.4-32.96 77.696-72.576 77.696l-629.824 0.064c-39.616 0-74.56-27.968-74.56-66.432V170.24c0-38.208 25.6-85.632 78.272-85.632h128.448V33.024c0-14.272 11.52-25.856 25.856-25.856z m332.096 613.312c-22.976 0-44.288 21.76-58.368 38.08-14.016-16.32-35.328-38.08-58.24-38.08-41.408 0-75.072 31.68-75.072 70.592 0 23.168 12.032 39.488 21.76 52.544 28.16 38.016 98.944 85.312 101.952 87.296a17.408 17.408 0 0 0 19.2 0l7.36-4.992c19.392-13.44 71.488-51.008 94.656-82.304 9.664-13.056 21.76-29.376 21.76-52.544 0-38.912-33.664-70.592-75.008-70.592zM458.752 447.936H303.168a25.6 25.6 0 0 0 0 51.2h155.584a25.6 25.6 0 0 0 0-51.2z m103.424-155.648H303.168a25.6 25.6 0 0 0 0 51.2h259.008a25.6 25.6 0 0 0 0-51.2z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

IconjiankangzhiXiao.defaultProps = {
  size: 18,
};

IconjiankangzhiXiao = React.memo ? React.memo(IconjiankangzhiXiao) : IconjiankangzhiXiao;

export default IconjiankangzhiXiao;
