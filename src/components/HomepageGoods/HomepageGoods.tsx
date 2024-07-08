import { LoadingPage, StyledGoods } from './HomepageGoods.styles';
import { ShopPageCard } from '../ShopPageCard';
import { useGetHomepageProductsQuery } from '../../store/api/api.slice';

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
            image={product.images[0].replaceAll(/[\[\]'",]/g, '')}
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
