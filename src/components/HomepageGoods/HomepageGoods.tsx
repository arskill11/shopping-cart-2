import { StyledGoods } from './HomepageGoods.styles';
import { ProductData } from '../../shared/types/types';
import { ShopPageCard } from '../ShopPageCard';

interface Props {
  goods: ProductData[];
}

export const HomepageGoods = ({ goods }: Props) => {
  return (
    <StyledGoods>
      <h2>Our Featured Products!</h2>
      <div className="cards">
        {goods.map((good) => (
          <ShopPageCard
            key={good.id}
            image={good.image}
            title={good.title}
            price={good.price}
            rating={good.rating.rate}
            id={good.id}
          />
        ))}
      </div>
    </StyledGoods>
  );
};
