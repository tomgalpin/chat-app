import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Button from './button';

describe('<Button />', () => {
  let button;
  let counter = 0;
  const defaultProps = {
    deleteBtn: false,
    disabled: false,
    onClick: () => incrementCounter(),
  };

  const incrementCounter = () => {
    counter++;
  };

  beforeEach(() => {
    render(<Button {...defaultProps}>Test Button</Button>);
    button = screen.getByRole('button');
  });

  afterEach(cleanup);

  it('Renders <Button /> component correctly', () => {
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('Test Button');
    expect(button).not.toHaveAttribute('deleteBtn');
    expect(button).not.toHaveAttribute('disabled');
  });

  it('Triggers a function on click', () => {
    fireEvent.click(button);
    expect(counter).toBe(1);
  });
});
