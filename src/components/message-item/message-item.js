import { FriendlyDate } from 'utils/readable-date';
import {
  StyledMessageContainer,
  StyleMessageItem,
  StyledMessageContent,
  StyledMessageUser,
  StyledMessageDate,
} from 'components/message-item/styled-message-item';
import Button from 'components/button/button';

const MessageItem = (props) => {
  return (
    <StyledMessageContainer alignLeft={props.alignLeft}>
      <StyleMessageItem alignLeft={props.alignLeft} data-testid="message-item">
        <Button deleteBtn onClick={props.deleteMsg}>
          x
        </Button>
        <StyledMessageContent data-testid="message-content">
          {props.content.content}
        </StyledMessageContent>
        <StyledMessageUser data-testid="message-user">
          User: <span>{props.content.senderUuid}</span>
        </StyledMessageUser>
        <StyledMessageDate data-testid="message-date">
          {FriendlyDate(props.content.sentAt)}
        </StyledMessageDate>
      </StyleMessageItem>
    </StyledMessageContainer>
  );
};

export default MessageItem;
