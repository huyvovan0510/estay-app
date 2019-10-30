import React, { useState } from 'react';
import { View } from 'react-native';
import Calendar from 'react-native-calendario';
import moment from 'moment';
import Util from '@src/comon/Util';
const itemCalendar = React.memo(({ onGetTotalDay, onGetStartDay }) => {
  return (
    <View style={{ flex: 1 }}>
      <Calendar
        numberOfMonths={3}
        onChange={range => {
          onGetStartDay(range);
          let startDay = moment(range.startDate);
          let endDay = moment(range.endDate);
          let total = endDay.diff(startDay, 'day');
          if (onGetTotalDay) {
            onGetTotalDay(total || 1);
          }
        }}
        minDate="2018-04-20"
        startDate="2018-04-30"
        endDate="2018-05-05"
        theme={{
          activeDayColor: {},
          monthTitleTextStyle: {
            color: '#6d95da',
            fontWeight: '300',
            fontSize: 16,
          },
          emptyMonthContainerStyle: {},
          emptyMonthTextStyle: {
            fontWeight: '200',
          },
          weekColumnsContainerStyle: {},
          weekColumnStyle: {
            paddingVertical: 10,
          },
          weekColumnTextStyle: {
            fontSize: 13,
          },
          nonTouchableDayContainerStyle: {},
          nonTouchableDayTextStyle: {},
          startDateContainerStyle: {},
          endDateContainerStyle: {},
          dayContainerStyle: {},
          dayTextStyle: {
            color: '#2d4150',
            fontWeight: '200',
            fontSize: 15,
          },
          dayOutOfRangeContainerStyle: {},
          dayOutOfRangeTextStyle: {},
          todayContainerStyle: {},
          todayTextStyle: {
            color: '#6d95da',
          },
          activeDayContainerStyle: {
            backgroundColor: '#ff1f75',
          },
          activeDayTextStyle: {
            color: 'white',
          },
          nonTouchableLastMonthDayTextStyle: {},
        }}
      />
    </View>
  );
});

export default itemCalendar;
