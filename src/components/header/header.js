import { useState } from 'react';
import { StyledHeader } from 'components/header/styled-header';
import Button from 'components/button/button';
import { TriangleIcon } from 'components/button/styled-button';

const Header = (props) => {
  const [isAscending, setIsAscending] = useState(false);

  const setOrderByDate = () => {
    setIsAscending(!isAscending);
    props.orderByDate(!isAscending);
  };

  return (
    <StyledHeader data-testid="header">
      <Button onClick={() => setOrderByDate()} disabled={props.msgsLength < 2}>
        <p>Order By Date</p>
        <TriangleIcon $rotate={isAscending} data-testid="triangle-icon" />
      </Button>
    </StyledHeader>
  );
};

export default Header;
