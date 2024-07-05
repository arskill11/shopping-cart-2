import { StyledHomepage } from './Homepage.styles';
import { HomepageDelivery } from '../../components/HomepageDelivery';
import { HomepageGoods } from '../../components/HomepageGoods';
import { HomepageInfo } from '../../components/HomepageInfo';
import useProductsQuery from '../../shared/hooks/useProductsQuery';
import { getLimitedProducts } from '../../api/products';

export const Homepage = () => {
  const products = useProductsQuery(getLimitedProducts, '');

  return (
    <StyledHomepage>
      <HomepageInfo />
      <HomepageGoods products={products} />
      <HomepageDelivery />
    </StyledHomepage>
  );
};
