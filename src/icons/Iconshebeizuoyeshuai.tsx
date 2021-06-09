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

let Iconshebeizuoyeshuai: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M400.147692 343.433846H286.72a56.713846 56.713846 0 1 1 0-113.427692h113.427692a56.713846 56.713846 0 0 1 0 113.427692z m567.138462 453.710769H59.864615a56.713846 56.713846 0 0 1 0-113.427692h907.421539a56.713846 56.713846 0 0 1 0 113.427692z m0 226.855385H59.864615a56.713846 56.713846 0 0 1 0-113.427692h907.421539a56.713846 56.713846 0 0 1 0 113.427692z m-56.713846-453.710769H116.578462A113.427692 113.427692 0 0 1 3.150769 456.861538V116.578462C3.150769 53.956923 53.956923 3.150769 116.578462 3.150769h793.993846c62.621538 0 113.427692 50.806154 113.427692 113.427693V456.861538a113.427692 113.427692 0 0 1-113.427692 113.427693zM116.578462 116.578462V456.861538h793.993846V116.578462H116.578462z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

Iconshebeizuoyeshuai.defaultProps = {
  size: 18,
};

Iconshebeizuoyeshuai = React.memo ? React.memo(Iconshebeizuoyeshuai) : Iconshebeizuoyeshuai;

export default Iconshebeizuoyeshuai;
