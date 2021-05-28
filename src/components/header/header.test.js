import { cleanup, render, screen } from '@testing-library/react';
import Header from './header';

describe('<Header />', () => {
  let header, triangleIcon;

  beforeEach(() => {
    render(<Header />);
    header = screen.getByTestId('header');
    triangleIcon = screen.getByTestId('triangle-icon');
  });

  afterEach(cleanup);

  it('Renders the <Header /> with the correct content', () => {
    const sortingBtn = header.querySelector('button');

    expect(header).toBeInTheDocument();
    expect(sortingBtn).toBeInTheDocument();
    expect(sortingBtn).toHaveTextContent('Order By Date');
    expect(triangleIcon).toBeInTheDocument();
  });
});
