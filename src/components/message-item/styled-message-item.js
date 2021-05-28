import styled from 'styled-components';
import { colors } from 'assets/styles/colors.js';

const StyledMessageContainer = styled.div`
  display: flex;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }

  ${({ alignLeft }) => {
    if (alignLeft) {
      return `
        justify-content: flex-start;
      `;
    } else {
      return `
        justify-content: flex-end;
      `;
    }
  }}
`;

const StyleMessageItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px;

  ${({ alignLeft }) => {
    if (alignLeft) {
      return `
        border-bottom-right-radius: 10px;
        background-color: ${colors.grey};
        color: ${colors.black};

        &:before {
          content: '';
          position: absolute;
          bottom: 0px;
          width: 0;
          height: 0;
          border-style: solid;
          left: -20px;
          border-width: 0 0 20px 20px;
          border-color: transparent transparent ${colors.grey} transparent;
        }
      `;
    } else {
      return `
        border-bottom-left-radius: 10px;
        background-color: ${colors.blue};
        color: ${colors.white};

        &:after {
          content: '';
          position: absolute;
          bottom: 0px;
          width: 0;
          height: 0;
          border-style: solid;
          right: -20px;
          border-width: 20px 0 0 20px;
          border-color: transparent transparent transparent ${colors.blue};
        }
      `;
    }
  }}
`;

const StyledMessageContent = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledMessageUser = styled.p`
  font-size: 14px;
  margin-bottom: 5px;

  span {
    font-weight: bold;
  }
`;

const StyledMessageDate = styled.p`
  font-style: italic;
  font-size: 10px;
`;

export {
  StyledMessageContainer,
  StyleMessageItem,
  StyledMessageContent,
  StyledMessageUser,
  StyledMessageDate,
};
