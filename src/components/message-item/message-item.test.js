import { cleanup, render, screen } from '@testing-library/react';
import MessageItem from './message-item';
import { FriendlyDate } from 'utils/readable-date';

describe('<MessageItem />', () => {
  let msgItem, msgContent, msgUser, msgDate;

  const defaultProps = {
    alignLeft: true,
    content: {
      content: '12',
      senderUuid: '1',
      sentAt: '2012-12-02T13:55:30.626Z',
      uuid: '43543321353',
    },
  };

  beforeEach(() => {
    render(<MessageItem {...defaultProps} />);
    msgItem = screen.getByTestId('message-item');
    msgContent = screen.getByTestId('message-content');
    msgUser = screen.getByTestId('message-user');
    msgDate = screen.getByTestId('message-date');
  });

  afterEach(cleanup);

  it('Renders the <MessageItem /> with the correct content', () => {
    const date = FriendlyDate(defaultProps.content.sentAt);

    expect(msgItem).toBeInTheDocument();

    expect(msgContent).toBeInTheDocument();
    expect(msgContent).toHaveTextContent('12');

    expect(msgUser).toBeInTheDocument();
    expect(msgUser).toHaveTextContent('1');

    expect(msgDate).toBeInTheDocument();
    expect(msgDate).toHaveTextContent(date);
  });
});
