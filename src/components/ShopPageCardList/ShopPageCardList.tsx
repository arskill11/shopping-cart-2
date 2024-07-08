import { ProductData } from '../../shared/types/types';
import { LoadingPage, StyledCards } from './ShopPageCardList.styles';
import { ShopPageCard } from '../ShopPageCard';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { useGetAllProductsQuery } from '../../store/api/api.slice';
import { saveProducts } from '../../store/shopProducts/shopProducts.slice';

export const Cards = () => {
  const { data = [], isLoading } = useGetAllProductsQuery('');
  const [currentProducts, setCurrentProducts] = useState<ProductData[]>([]);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setCurrentProducts(data);
    dispatch(saveProducts(data));
  }, [isLoading]);

  if (isLoading) {
    return (
      <LoadingPage>
        <h2>Loading content...</h2>
      </LoadingPage>
    );
  }

  return (
    <StyledCards>
      <div className="goods">
        {currentProducts.map((product) => {
          const fixedImageUrl = product.images[0].replaceAll(/[\[\]'",]/g, '');
          return (
            <ShopPageCard
              key={product.id}
              image={fixedImageUrl}
              title={product.title}
              price={product.price}
              id={product.id}
              category={product.category.name}
            />
          );
        })}
      </div>
    </StyledCards>
  );
};
