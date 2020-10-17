import React from 'react';
import Header from 'components/Header';
import { Box } from 'components/Box';
import Clock from 'Icons/Clock';
import css from './Table.module.css';
import { Text, NotificationText } from 'components/Typography';
import * as types from './types';

const RenderTable = ({ days, isLoading }: types.RenderTable) => {
  const className = [css.table];
  if (!isLoading) className.push(css.isAnimated);
  return (
    <div className={className.join(' ')} data-testid="table">
      {days.map((day, i) => (
        <div key={`${day.label}_${i}`} className={css.row}>
          <div className={'center '}>
            {day.label} {day.labelDecorator}
          </div>

          <span>
            {day.isClosed} {day.hours}
          </span>
        </div>
      ))}
    </div>
  );
};

function decorateData(data: Array<types.days>) {
  return data.map((row) => {
    const props: { [k: string]: any } = {};
    if (row.labelDecorator) {
      props.labelDecorator = (
        <NotificationText className={css.notification}>TODAY</NotificationText>
      );
    }
    if (row.isClosed) {
      props.isClosed = <Text greyedOut>Closed</Text>;
    }
    if (Array.isArray(row.hours)) {
      props.hours = row.hours?.map((hour: number) => hour).join(', ');
    }
    return {
      label: <Text bold>{row.label}</Text>,
      hours: row.hours,
      ...props
    };
  });
}

const Table = ({ days, isLoading }: types.RenderTable) => {
  const data = decorateData(days);
  return (
    <Box data-testid="main-wrapper" animated>
      <Header title="Opening hours" Icon={Clock} />
      <RenderTable days={data} isLoading={isLoading} />
    </Box>
  );
};

export default Table;
