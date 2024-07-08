import { StyledHomepage } from './Homepage.styles';
import { HomepageDelivery } from '../../components/HomepageDelivery';
import { HomepageGoods } from '../../components/HomepageGoods';
import { HomepageInfo } from '../../components/HomepageInfo';

export const Homepage = () => {
  return (
    <StyledHomepage>
      <HomepageInfo />
      <HomepageGoods />
      <HomepageDelivery />
    </StyledHomepage>
  );
};
