import StyledHomepage from './Homepage.styles';
import { HomepageDelivery } from '../HomepageDelivery';
import { HomepageGoods } from '../HomepageGoods';
import { HomepageInfo } from '../HomepageInfo';
import useProductsQuery from '../../shared/hooks/useProductsQuery';

export const Homepage = () => {
  const goods = useProductsQuery('https://fakestoreapi.com/products?limit=4');

  return (
    <StyledHomepage>
      <HomepageInfo />
      <HomepageGoods goods={goods} />
      <HomepageDelivery />
    </StyledHomepage>
  );
};
