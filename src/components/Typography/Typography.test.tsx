import React from 'react';
import { render } from '@testing-library/react';
import { H1, Text, NotificationText } from './index';

describe("<H1 />", () => {
  it('renders children', () => {
    const { getByTestId } = render(
      <H1>
        <div data-testid="child" />
      </H1>
    );
    expect(getByTestId('child')).toBeInTheDocument();
  });
})

describe("<Text />", () => {
  it('renders children', () => {
    const { getByTestId } = render(
      <Text>
        <span data-testid="child" />
      </Text>
    );
    expect(getByTestId('child')).toBeInTheDocument();
  });

  it("gets bold props", () => {
    const { container } = render(
      <Text bold>
        <span data-testid="child" />
      </Text>
    );
    expect(container.firstChild).toHaveClass("bold")
  })
})

describe("<NotificationText />", () => {
  it('renders children', () => {
    const { getByTestId } = render(
      <NotificationText>
        <span data-testid="child" />
      </NotificationText>
    );
    expect(getByTestId('child')).toBeInTheDocument();
  });

  it("is green", () => {
    const { container } = render(
      <NotificationText>
        Test
      </NotificationText>
    );
    expect(container.firstChild).toHaveStyle(`color:var(--color-green)`)
  })
})