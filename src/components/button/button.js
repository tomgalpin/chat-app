import { StyledButton } from 'components/button/styled-button';

const Button = ({ onClick, children, deleteBtn, disabled }) => {
  return (
    <StyledButton onClick={onClick} deleteBtn={deleteBtn} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
