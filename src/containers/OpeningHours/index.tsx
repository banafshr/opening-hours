import React, { useEffect } from 'react';
import useDataLoader from 'hooks/useDataLoader';
import Table from 'components/Table';
import {Center, SkeletonText} from "components/Wrapper"
import {
  capitalize,
  isToday,
  parseSeconds,
  toTwelveHourClock
} from 'utils/helpers';

const createEmptyOpeningHours = () => {
  const day = () => ({
    label: <SkeletonText length={16} />,
    hours: <SkeletonText length={7} />
  })

  return [...Array(7).keys()].map(day)
}

const OpeningHours = () => {
  const [{ openingHours, error }, fetchOpeningHours] = useDataLoader();

  useEffect(() => {
    if (openingHours.length === 0 && error === false) {
      fetchOpeningHours('http://localhost:3001/openingHours');
    }
  }, [openingHours, error, fetchOpeningHours]);

  const formattedOpeningHours = openingHours.map((day, index) => {
    const values = day.openingHours.map((seconds: Array<any>) => {
      return seconds.map(parseSeconds).map(toTwelveHourClock).join(' - ');
    });
    const isClosed = values.length ? false : true;
    const labelDecorator = isToday(index) ? true : false;
    return {
      label: capitalize(day.label),
      labelDecorator,
      hours: values,
      isClosed
    };
  });

  const decoratedOpeningHours = openingHours.length
    ? formattedOpeningHours
    : createEmptyOpeningHours();

  return (
    <Center>
      <Table days={decoratedOpeningHours} />
    </Center>
  );
};

export default OpeningHours;
