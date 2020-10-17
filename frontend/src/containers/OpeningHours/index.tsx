import React, { useEffect } from 'react';
import useDataLoader from 'hooks/useDataLoader';
import Table from 'components/Table';
import { Center, SkeletonText } from 'components/Wrappers';
import {
  capitalize,
  isToday,
  parseSeconds,
  convertToAMPM
} from 'utils/helpers';

const { hostname } = window.location
const API_BASE_URL = `http://${hostname}:3001`

const createEmptyOpeningHours = () => {
  const day = () => ({
    label: <SkeletonText length={140} />,
    hours: <SkeletonText length={100} />
  });

  return [...Array(7).keys()].map(day);
};

const OpeningHours = () => {
  const [{ openingHours, error, isLoading }, fetchOpeningHours] = useDataLoader();

  useEffect(() => {
    if (openingHours.length === 0 && error === false) {
      fetchOpeningHours(`${API_BASE_URL}/openingHours`);
    }
  }, [openingHours, error, fetchOpeningHours]);

  const formattedOpeningHours = openingHours.map((day, index) => {
    const values = day.openingHours.map((seconds: Array<any>) => {
      return seconds.map(parseSeconds).map(convertToAMPM).join(' - ');
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
      <Table days={decoratedOpeningHours} isLoading={isLoading} />
    </Center>
  );
};

export default OpeningHours;
