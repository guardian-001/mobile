import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TimePicker = ({ selectedDate }: any) => {
  const renderTimeSlots = () => {
    const timeSlots = [
      '08:00',
      '08:30',
      '09:00',
      '09:30',
      '10:00',
      '10:30',
      '11:00',
      '11:30',
    ];

    return timeSlots.map((timeSlot, index) => (
      <TouchableOpacity key={`time-slot-${index}`} style={styles.timeSlot}>
        <Text>{timeSlot}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.timePickerContainer}>
      <Text>
        {selectedDate.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
        })}
      </Text>
      <View style={styles.timeSlotContainer}>{renderTimeSlots()}</View>
      <Text>Time zone</Text>
      <Text>West Africa Time (UTC+1)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timePickerContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  timeSlotContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  timeSlot: {
    padding: 8,
    marginHorizontal: 4,
    marginVertical: 2,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default TimePicker;
