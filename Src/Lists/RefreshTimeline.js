
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
 
const RefreshTimeline = () => {
  let timeLineContent = [
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

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [data, setData] = useState(timeLineContent);
 
  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setData(data);
      setIsRefreshing(false);
    }, 2000);
  };
 
  const onEndReached = () => {
    if (!waiting) {
      setWaiting(true);

      setTimeout(() => {

        let timeLineContent = data.concat([
            {
                time: '18:00',
                title: 'watch a Movie',
                description:
                  'Lorem Ipsum is simply dummy text of the printing.',
              },
              {
                time: '19:45',
                title: 'LIsten a song',
                description:
                  'Lorem Ipsum is simply dummy text of the printing.',
              },
              {
                time: '20:00',
                title: 'eat dinner',
                description:
                  'Lorem Ipsum is simply dummy text of the printing.',
              },
              {
                time: '21:00',
                title: 'Go Bed',
                description:
                  'Lorem Ipsum is simply dummy text of the printing.',
              },
            
        ]);
        setWaiting(false);
        setData(timeLineContent);
      }, 2000);
    }
  };
 
  const renderFooter = () => {
    if (waiting) {
      return <ActivityIndicator />;
    } else {
      return <Text>~</Text>;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Refresh Load Timline</Text>
      <Timeline
        data={data}
        circleSize={20}
        circleColor="#fc6f03"
        lineColor="#ffd194"
        timeContainerStyle={{minWidth: 52, marginTop: -5}}
        timeStyle={{
          textAlign: 'center',
          backgroundColor: '#fc6f03',
          color: 'white',
          padding: 5,
          borderRadius: 13,
        }}
        descriptionStyle={{color: 'gray'}}
        options={{
          style: {paddingTop: 5},
          refreshControl: (
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={onRefresh}
            />
          ),
          renderFooter: renderFooter,
          onEndReached: onEndReached,
        }}
        innerCircle={'dot'}
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
 
export default RefreshTimeline;
