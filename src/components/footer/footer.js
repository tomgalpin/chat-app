import { StyledFooter } from 'components/footer/styled-footer';
import Button from 'components/button/button';

const Footer = (props) => {
  return (
    <StyledFooter data-testid="footer">
      <Button onClick={props.addMoreMsgs}>
        <p>Add More Messages</p>
      </Button>
    </StyledFooter>
  );
};

export default Footer;
