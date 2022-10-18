// Show Timeline using React Native Timeline ListView
// https://aboutreact.com/react-native-timeline-listview/
 
// import React in our code
import React from 'react';
 
// import all the components we are going to use
import {StyleSheet, Text, View} from 'react-native';
 
// import Timeline
import Timeline from 'react-native-timeline-flatlist';
 
const TwoColumnList = () => {
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
      <Text style={styles.title}>Two Column TimeLine</Text>
      <Timeline
        data={data}
        circleSize={20}
        circleColor="rgba(0,0,0,0)"
        lineColor="#ffd194"
        timeContainerStyle={{minWidth: 52, marginTop: -5}}
        timeStyle={{
          textAlign: 'center',
          backgroundColor: '#fc6f03',
          color: '#fff',
          padding: 5,
          borderRadius: 13,
        }}
        descriptionStyle={{color: 'gray'}}
        options={{
          style: {paddingTop: 5},
        }}
        innerCircle={'icon'}
        onEventPress={(item) => 
          alert(`${item.title} at ${item.time}`)
        }
        separator={false}
        detailContainerStyle={{
          marginBottom: 20,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: '#b8b8b8',
          borderRadius: 10,
        }}
        columnFormat="two-column"
      />
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
 
export default TwoColumnList;
