import { ProductData } from '../../shared/types/types';
import { LoadingPage, StyledCards } from './ShopPageCardList.styles';
import { ShopPageCard } from '../ShopPageCard';
import { Pagination } from '../Pagination';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchProducts } from '../../store/shopProducts/shopProducts.slice';

export const Cards = () => {
  const products: ProductData[] = useSelector(
    (state: RootState) => state.shopProducts.products,
  );
  const isLoading: boolean = useSelector(
    (state: RootState) => state.shopProducts.isLoading,
  );
  const dispatch = useDispatch<AppDispatch>();

  const [currentProducts, setCurrentProducts] = useState<ProductData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState(10);

  const lastproductIndex = currentPage * productsPerPage;
  const firstproductIndex = lastproductIndex - productsPerPage;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setCurrentProducts(products.slice(firstproductIndex, lastproductIndex));
  }, [currentPage]);

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
        {currentProducts.map((product) => (
          <ShopPageCard
            key={product.id}
            image={product.images[0]}
            title={product.title}
            price={product.price}
            id={product.id}
            category={product.category.name}
          />
        ))}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </StyledCards>
  );
};
