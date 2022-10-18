import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
 
const OneColumnRight = () => {
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
 
  const renderDetail = (rowData, sectionID, rowID) => {
    let title =
      <Text style={[styles.rowTitle]}>
        {rowData.title}
      </Text>;
    var desc = null;
    if (rowData.description && rowData.imageUrl)
      desc = (
        <View style={styles.descriptionContainer}>
          <Text style={[styles.textDescriptionStyle]}>
            {rowData.description}
          </Text>
        </View>
      );
    return (
      <View style={{flex: 1}}>
        {title}
        {desc}
      </View>
    );
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      Single column Timeline 
      </Text>
      <Timeline
        data={data}
        circleSize={20}
        circleColor="rgba(0,0,0,0)"
        lineColor="#ffd194"
        timeContainerStyle={{minWidth: 52, marginTop: -5}}
        timeStyle={{
          textAlign: 'center',
          backgroundColor: '#fc6f03',
          color: 'white',
        }}
        descriptionStyle={{color: 'gray'}}
        options={{
          style: {paddingTop: 5},
        }}
        onEventPress={(item) =>
          alert(`${item.title} at ${item.time}`)
        }
        renderDetail={renderDetail}
        detailContainerStyle={{
          marginBottom: 20,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: '#b8b8b8',
          borderRadius: 10,
        }}
        columnFormat="single-column-right"
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
  rowTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingRight: 50,
  },
  textDescriptionStyle: {
    marginLeft: 10,
    color: 'gray',
  },
});
 
export default OneColumnRight;
