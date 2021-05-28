import { useState } from 'react';
import { StyledChatContainer } from 'components/chat-container/styled-chat-container';
import Header from 'components/header/header';
import MessageItem from 'components/message-item/message-item';
import Footer from 'components/footer/footer';
import data from 'data/data.json';

const orderMessages = (messages, isAscending) => {
  return [...messages].sort((a, b) => {
    if (!isAscending) {
      return a.sentAt > b.sentAt ? 1 : -1;
    } else {
      return a.sentAt < b.sentAt ? 1 : -1;
    }
  });
};

const uniqueMessages = (array) => {
  return array.filter((message, index, self) => {
    return (
      index ===
      self.findIndex(
        (item) =>
          item.uuid === message.uuid && item.content === message.content,
      )
    );
  });
};

function pagination(array) {
  const perPage = 5;
  let paginatedItems = [];

  while (array.length > 0) {
    paginatedItems.push(array.splice(0, perPage));
  }

  return {
    data: paginatedItems,
    totalPages: paginatedItems.length,
  };
}

const ChatContainer = () => {
  const uniques = uniqueMessages(data.messages);
  const orderedMessages = orderMessages(uniques, false);
  const paginations = pagination(orderedMessages);

  const [messages, setMessages] = useState(paginations.data[0]);
  const [page, setPage] = useState(0);

  const addMoreMsgs = () => {
    const nextPage = page + 1;
    const nextMsgs = messages.concat(paginations.data[nextPage]);

    setPage(nextPage);
    setMessages(nextMsgs);
  };

  const deleteMsg = (index) => {
    const msgsCopy = [...messages];

    msgsCopy.splice(index, 1);
    setMessages(msgsCopy);
  };

  const orderByDate = (isAscending) => {
    const orderedMessages = orderMessages(messages, isAscending);
    setMessages(orderedMessages);
  };

  const renderMessages = (messages) => {
    return messages.map((item, index) => {
      const alignLeft = item.senderUuid === '1';

      return (
        <MessageItem
          key={`message-${index}`}
          content={item}
          alignLeft={alignLeft}
          deleteMsg={() => deleteMsg(index)}
        />
      );
    });
  };

  return (
    <StyledChatContainer data-testid="chat-container">
      <Header orderByDate={orderByDate} msgsLength={messages.length} />
      {renderMessages(messages)}
      {page < paginations.totalPages - 1 && (
        <Footer addMoreMsgs={addMoreMsgs} />
      )}
    </StyledChatContainer>
  );
};

export default ChatContainer;
