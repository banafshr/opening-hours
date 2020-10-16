import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';
import Clock from 'Icons/Clock';

describe('<Header />', () => {
  it('renders with icon correctly ', () => {
    const { getByLabelText, rerender } = render(
      <Header title="Opening hours" Icon={Clock} />
    );
    const clock = getByLabelText('clock');
    expect(clock).toBeInTheDocument();

    rerender(<Header title="Opening hours" />);

    expect(clock).not.toBeInTheDocument();
  });

  it('renders title correctly', () => {
    const { queryByText, rerender } = render(
      <Header title="Opening hours" Icon={Clock} />
    );
    expect(queryByText('Opening hours')).toBeTruthy();

    rerender(<Header title="Different title" Icon={Clock} />);

    expect(queryByText('Opening hours')).toBeNull();
    expect(queryByText('Different title')).toBeTruthy();
  });
});
