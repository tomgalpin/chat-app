import { cleanup, render, screen } from '@testing-library/react';
import Footer from './footer';

describe('<Footer />', () => {
  let footer;

  beforeEach(() => {
    render(<Footer />);
    footer = screen.getByTestId('footer');
  });

  afterEach(cleanup);

  it('Renders the <Footer /> with the correct content', () => {
    const addMoreBtn = footer.querySelector('button');

    expect(footer).toBeInTheDocument();
    expect(addMoreBtn).toBeInTheDocument();
    expect(addMoreBtn).toHaveTextContent('Add More Messages');
  });
});
