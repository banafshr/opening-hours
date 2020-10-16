import React from 'react';
import { render } from '@testing-library/react';
import { Box } from './index';

describe('<Box />', () => {
  it('renders children', () => {
    const { getByTestId } = render(
      <Box>
        <div data-testid="child" />
      </Box>
    );
    expect(getByTestId('child')).toBeInTheDocument();
  });
});
