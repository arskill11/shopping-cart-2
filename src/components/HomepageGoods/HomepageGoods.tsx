import { LoadingPage, StyledGoods } from './HomepageGoods.styles';
import { ShopPageCard } from '../ProductCard';
import { useGetHomepageProductsQuery } from '../../store/api/api.slice';
import { fixImageUrl } from '../../shared/helpers/fixImageUrl';

export const HomepageGoods = () => {
  const { data: products = [], isLoading } = useGetHomepageProductsQuery('');

  if (isLoading) {
    return (
      <LoadingPage>
        <h2>Loading content...</h2>
      </LoadingPage>
    );
  }

  return (
    <StyledGoods>
      <h2>Our Featured Products!</h2>
      <div className="cards">
        {products.map((product) => (
          <ShopPageCard
            key={product.id}
            image={fixImageUrl(product.images[0])}
            title={product.title}
            price={product.price}
            category={product.category.name}
            id={product.id}
          />
        ))}
      </div>
    </StyledGoods>
  );
};
