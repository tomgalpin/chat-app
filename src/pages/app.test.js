import { cleanup, render, screen } from '@testing-library/react';
import App from './app';

describe('<App />', () => {
  let appContainer, chatContainer;

  beforeEach(() => {
    render(<App />);
    appContainer = screen.getByTestId('app-container');
    chatContainer = screen.getByTestId('chat-container');
  });

  afterEach(cleanup);

  it('Renders the <App /> with the correct content', () => {
    expect(appContainer).toBeInTheDocument();
    expect(chatContainer).toBeInTheDocument();
  });
});
