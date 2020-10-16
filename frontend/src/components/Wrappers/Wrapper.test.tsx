import React from 'react';
import { render } from '@testing-library/react';
import { Center, SkeletonText } from './index';

describe('<Center />', () => {
  it('render correctly', () => {
    const { container } = render(<Center />);
    expect(container.firstChild).toHaveClass('center');
  });

  it('renders children', () => {
    const { getByTestId } = render(
      <Center>
        <span data-testid="child" />
      </Center>
    );
    expect(getByTestId('child')).toBeInTheDocument();
  })
});

describe('<SkeletonText />', () => {
  it('render correctly', () => {
    const { container } = render(<SkeletonText length={60} />);
    expect(container.firstChild).toHaveClass('text');
  })
})