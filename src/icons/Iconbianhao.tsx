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

let Iconbianhao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M604.16 437.906286c-44.251429 0-69.485714 32.256-69.485714 73.728s25.234286 74.166857 69.485714 74.166857c44.178286 0 69.485714-32.548571 69.485714-74.166857 0-41.472-25.307429-73.728-69.485714-73.728zM512 0a512 512 0 1 0 0 1024A512 512 0 0 0 512 0zM429.494857 647.533714c0 3.072-1.170286 4.242286-5.485714 0.804572L258.194286 512.146286V643.657143h-66.267429V376.246857c0-2.340571 1.170286-4.242286 5.485714-0.804571L363.227429 512V379.757714h66.340571v267.776h-0.073143z m174.592-0.438857c-76.068571 0-141.604571-55.881143-141.604571-135.460571 0-79.506286 65.609143-135.094857 141.604571-135.094857 76.068571 0 141.604571 55.588571 141.604572 135.094857 0 79.579429-65.462857 135.460571-141.604572 135.460571z m189.074286 0.438857a38.034286 38.034286 0 1 1 0-76.068571c20.187429 0 38.838857 15.506286 38.838857 38.034286 0 22.528-18.651429 38.034286-38.838857 38.034285z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconbianhao.defaultProps = {
  size: 18,
};

Iconbianhao = React.memo ? React.memo(Iconbianhao) : Iconbianhao;

export default Iconbianhao;
