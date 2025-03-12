import React from 'react';
import { View } from 'react-native';

interface ReelViewProps {
  data: React.ReactNode[];
}

const ReelView: React.FC<ReelViewProps> = ({ data }) => {
  return (
    <View>
      {data.map((item, index) => (
        <View key={index}>{item}</View>
      ))}
    </View>
  );
};

export default ReelView;
