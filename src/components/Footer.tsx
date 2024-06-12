import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 7vh;
  background: lightgray;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
`;

const Footer = () => {
  return <StyledFooter>Developed by 17thspring</StyledFooter>;
};

export default Footer;
