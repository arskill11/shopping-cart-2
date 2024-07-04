import { StyledGoods } from './HomepageGoods.styles';
import { ShopPageCard } from '../ShopPageCard';
import { Props } from './types';

export const HomepageGoods = ({ products }: Props) => {
  return (
    <StyledGoods>
      <h2>Our Featured Products!</h2>
      <div className="cards">
        {products.map((product) => (
          <ShopPageCard
            key={product.id}
            image={product.images[0]}
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
