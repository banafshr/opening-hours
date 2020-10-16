import React from 'react';
import Header from 'components/Header';
import { Box } from 'components/Box';
import Clock from 'Icons/Clock';
import css from './Table.module.css';
import { Text, NotificationText } from 'components/Typography';
import * as types from './types';

const RenderTable = ({ days }: types.Days) => {
  return (
    <div className={css.table} data-testid="table">
      {days.map((day, i) => (
        <div key={day.label.props.children+i} className={css.row}>
          <div className="center">
            {day.label} {day.labelDecorator}
          </div>
          {day.isClosed}
          {day.value}
        </div>
      ))}
    </div>
  );
};

function decorateData(data: Array<any>) {
  return data.map((row) => {
    const props: { [k: string]: any } = {};
    if (row.labelDecorator) {
      props.labelDecorator = (
        <NotificationText className={css.notification}>
          TODAY
        </NotificationText>
      );
    }
    if (row.isClosed) {
      props.isClosed = <Text greyedOut>Closed</Text>;
    }
    if (Array.isArray(row.hours)) {
      props.value = row.hours?.map((hour: number) => hour).join();
    }
    return {
      label: <Text bold>{row.label}</Text>,
      value: row.hours,
      ...props
    };
  });
}

const Table = ({ days }: types.Days) => {
  const data = decorateData(days);
  return (
    <Box data-testid="main-wrapper">
      <Header title="Opening hours" Icon={Clock} />
      <RenderTable days={data}  />
    </Box>
  );
};

export default Table;
