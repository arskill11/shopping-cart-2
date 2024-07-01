import { StyledGoods } from './HomepageGoods.styles';
import { ProductData } from '../../shared/types/types';
import { ShopPageCard } from '../ShopPageCard';

interface Props {
  products: ProductData[];
}

export const HomepageGoods = ({ products }: Props) => {
  return (
    <StyledGoods>
      <h2>Our Featured Products!</h2>
      <div className="cards">
        {products.map((product) => (
          <ShopPageCard
            key={product.id}
            image={
              product.images[0]
              // typeof product.images === 'string'
              //   ? product.images
              //   : JSON.parse(product.image)[0]
            }
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
