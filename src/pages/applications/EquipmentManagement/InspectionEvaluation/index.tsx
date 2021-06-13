/**
 * @file 设备管理 > 设备点巡检
 */
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface IInspectionEvaluationProps {
  navigation: RootStackNavigation;
}

class InspectionEvaluation extends React.Component<IInspectionEvaluationProps> {
  render() {
    return (
      <View>
        <Text>Found</Text>
      </View>
    );
  }
}
export default InspectionEvaluation;
