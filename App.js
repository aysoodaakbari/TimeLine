import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import OneColumnRight from './Src/Lists/OneColumnRight';
 import OnecolumnList from './Src/Lists/OnecolumnList'; 
 import TwoColumnList from './Src/Lists/TwoColumnList';
 import RefreshTimeline from './Src/Lists/RefreshTimeline';
const App = () => {
  const [val, setVal] = useState(1);
 
  const renderElement = () => {
    if (val === 1) {
      return <OneColumnRight />;
    } else if (val === 2) {
      return <OnecolumnList />;
    } else if (val === 3) {
      return <TwoColumnList />;
    } else if (val === 4) {
      return <RefreshTimeline />;
    }
  };
 
  const tabName = [
    'One Column Left TimeLine',
    'Refresh Load More TimeLine',
    'Two Column TimeLine',
    'One Column Right TimeLine',

  ];
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View>
          <ScrollView horizontal>
            <View style={{flexDirection: 'row'}}>
              {tabName.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index + 1}
                    style={[
                      styles.buttonStyle,
                      {
                        backgroundColor:
                          val == index + 1 ? '#fc6f03' : '#808080',
                      },
                    ]}
                    onPress={() => setVal(index + 1)}>
                    <Text style={{color: '#ffffff'}}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View style={styles.childContainer}>
          {renderElement()}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    margin: 2,
  },
  childContainer: {
    backgroundColor: '#f9f9f9',
    flex: 1,
    padding: 10,
  },
});
