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

let Iconshanchu3: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M404.032 368c-21.632 0-36.032 14.4-36.032 36.032v360c0 21.568 14.4 35.968 36.032 35.968 21.568 0 35.968-14.4 35.968-36.032V404.096c0-21.632-14.4-36.032-36.032-36.032z m576-216h-252.032v-36.032c0-61.184-46.784-107.968-108.032-107.968H404.032c-61.248 0-108.032 46.784-108.032 108.032v35.968H43.968c-21.568 0-35.968 14.4-35.968 36.032 0 21.568 14.4 35.968 36.032 35.968h72v684.032c0 61.184 46.72 107.968 107.968 107.968h576c61.184 0 108.032-46.784 108.032-108.032V224h71.936c21.632 0 36.032-14.4 36.032-36.032 0-21.568-14.4-35.968-36.032-35.968zM368 115.968c0-21.568 14.4-35.968 36.032-35.968h216c21.568 0 35.968 14.4 35.968 36.032v35.968h-288v-36.032z m468.032 792.064c0 21.568-14.464 35.968-36.032 35.968h-576c-21.632 0-36.032-14.4-36.032-36.032V224h648.064v684.032zM619.968 368c-21.568 0-35.968 14.4-35.968 36.032v360c0 21.568 14.4 35.968 36.032 35.968 21.568 0 35.968-14.4 35.968-36.032V404.096c0-21.632-14.4-36.032-36.032-36.032z"
        fill={getIconColor(color, 0, '#E02020')}
      />
    </Svg>
  );
};

Iconshanchu3.defaultProps = {
  size: 18,
};

Iconshanchu3 = React.memo ? React.memo(Iconshanchu3) : Iconshanchu3;

export default Iconshanchu3;
