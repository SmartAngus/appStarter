import React from 'react';
import {View} from 'react-native';
import {Button, Badge, BadgeProps} from 'react-native-elements';
import IconFont, {IconNames} from '@/icons';

interface INavigateTextBadgeProps {
  onPress?: () => void;
  iconName?: IconNames;
  name?: string;
  showStatus?: boolean;
}

type NavigateTextBadgeProps = INavigateTextBadgeProps & BadgeProps;

/**
 * 带提示点的按钮组件
 */
class NavigateTextBadge extends React.Component<NavigateTextBadgeProps> {
  render() {
    const {
      onPress,
      iconName = 'iconbianjifankui',
      name = '报警',
      value,
      showStatus,
      status = 'error',
    } = this.props;
    return (
      <View>
        <Button
          onPress={onPress}
          icon={<IconFont name={iconName} size={15} color="white" />}
          title={name}
          type="clear"
          titleStyle={{paddingLeft: 4, color: '#fff'}}
        />
        {showStatus ? (
          <Badge
            status={status}
            value={value}
            containerStyle={{position: 'absolute', top: 0, right: 0}}
          />
        ) : (
          <View />
        )}
      </View>
    );
  }
}
// export default withBadge(1)(NavigateTextBadge);
export default NavigateTextBadge;
