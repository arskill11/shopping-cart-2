import { Link } from 'react-router-dom';
import { StyledError } from './ErrorNotFound.styles';

export const ErrorNotFound = () => {
  return (
    <StyledError>
      <h2>Oops... Error occured</h2>
      <p>There's no such an address. Try coming back to the shop</p>
      <Link to={'/'}>Come back</Link>
    </StyledError>
  );
};
