import styled from 'styled-components';
import { colors } from 'assets/styles/colors.js';

const StyledChatContainer = styled.section`
  border: 2px solid ${colors.black};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 30px;
`;

export { StyledChatContainer };
