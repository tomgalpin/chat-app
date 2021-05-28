import styled, { css } from 'styled-components';
import { colors } from 'assets/styles/colors';

const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.white};
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: ${colors.blue};
  background-color: ${colors.blue};
  text-align: center;

  ${({ deleteBtn }) =>
    deleteBtn &&
    css`
      position: absolute;
      top: 10px;
      right: 12px;
      border-width: 1px;
      color: ${colors.black};
      border-color: ${colors.black};
      background-color: ${colors.white};
      border-radius: 100%;
      padding: 0;
      width: 20px;
      height: 20px;
      justify-content: center;

      &:hover {
        opacity: 0.8;
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${colors.grey};
      border-color: ${colors.grey};
      cursor: not-allowed;
    `}
`;

const TriangleIcon = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 6px 0 6px;
  border-color: ${colors.white} transparent transparent transparent;
  margin-left: 5px;
  transform: rotate(0deg);
  transition: transform 0.2s ease-out;
  transform: ${(props) => (props.$rotate ? `rotate(180deg)` : '')};
`;

export { StyledButton, TriangleIcon };
