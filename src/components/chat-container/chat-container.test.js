import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import ChatContainer from './chat-container';
import { FriendlyToIso } from 'utils/readable-date';

describe('<ChatContainer />', () => {
  let chatContainer, header, messageItems, footer;

  beforeEach(() => {
    render(<ChatContainer />);
    chatContainer = screen.getByTestId('chat-container');
    header = screen.getByTestId('header');
    messageItems = screen.getAllByTestId('message-item');
    footer = screen.getByTestId('footer');
  });

  afterEach(cleanup);

  it('Renders the <App /> with the correct content', () => {
    expect(chatContainer).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();

    expect(messageItems.length).toBe(5);
  });

  it('Renders the msgs in descending order', () => {
    const messageDates = screen.getAllByTestId('message-date');
    let isoDates = [];

    for (let i = 0; i < messageDates.length - 1; i++) {
      const friendlyDate = messageDates[i].textContent.replace('at', '');
      const isoDate = FriendlyToIso(friendlyDate);

      isoDates.push(isoDate);
    }

    for (let i = 0; i < isoDates.length - 1; i++) {
      expect(isoDates[i] <= isoDates[i + 1]).toBeTruthy();
    }
  });

  it('Renders the msgs in ascending order after the sorting btn is clicked', () => {
    const sortingBtn = header.querySelector('button');
    fireEvent.click(sortingBtn);

    const messageDates = screen.getAllByTestId('message-date');
    let isoDates = [];

    for (let i = 0; i < messageDates.length - 1; i++) {
      const friendlyDate = messageDates[i].textContent.replace('at', '');
      const isoDate = FriendlyToIso(friendlyDate);

      isoDates.push(isoDate);
    }

    for (let i = 0; i < isoDates.length - 1; i++) {
      expect(isoDates[i] >= isoDates[i + 1]).toBeTruthy();
    }
  });

  it('Deletes a msg when its "delete" btn is clicked', () => {
    const initialMsgs = screen.getAllByTestId('message-item');
    const firstMsg = initialMsgs[0];
    const deleteBtn = firstMsg.querySelector('button');

    expect(initialMsgs.length).toBe(5);

    fireEvent.click(deleteBtn);
    const updatedMsgs = screen.getAllByTestId('message-item');

    expect(updatedMsgs.length).toBe(4);
  });

  it('Adds 5 more msgs when the "add more" btn is clicked, until all msgs are visible', () => {
    const initialMsgs = screen.getAllByTestId('message-item');
    const addMoreBtn = footer.querySelector('button');

    // init at 5
    expect(initialMsgs.length).toBe(5);

    // add 5 more to equal 10
    fireEvent.click(addMoreBtn);
    const updatedMsgs10 = screen.getAllByTestId('message-item');

    expect(updatedMsgs10.length).toBe(10);

    // add 5 more to equal 15
    fireEvent.click(addMoreBtn);
    const updatedMsgs15 = screen.getAllByTestId('message-item');

    expect(updatedMsgs15.length).toBe(15);

    // add the last 3 to equal 18
    fireEvent.click(addMoreBtn);
    const updatedMsgs18 = screen.getAllByTestId('message-item');

    expect(updatedMsgs18.length).toBe(18);
  });
});
