import React, { useState } from 'react';
import { View, FlatList, Dimensions } from 'react-native';

interface ReelViewProps {
  data: React.ReactNode[];
}

const ReelView: React.FC<ReelViewProps> = ({ data }) => {
  const [containerHeight, setContainerHeight] = useState(
    Dimensions.get('window').height
  );

  return (
    <View
      style={{ flexGrow: 1 }}
      onLayout={(event) => setContainerHeight(event.nativeEvent.layout.height)}
    >
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ height: containerHeight }}>{item}</View>
        )}
        pagingEnabled
        snapToInterval={containerHeight}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ReelView;
