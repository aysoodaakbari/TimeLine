
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
 
const OnecolumnList = () => {
  const data = [
    {
      time: '08:00',
      title: 'Breakfast',
      description:
        'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      time: '08:45',
      title: 'Go Work',
      description:
        'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      time: '13:00',
      title: 'eat launch',
      description:
        'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      time: '14:00',
      title: 'Go Home',
      description:
        'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      time: '16:30',
      title: 'Play Snooker',
      description:
        'Lorem Ipsum is simply dummy text of the printing.',
    },
  ];
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Single column Timeline 
      </Text>
      <Timeline data={data} lineColor="#ffd194" circleColor='#fc6f03'/>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    padding: 16,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
 
export default OnecolumnList;
