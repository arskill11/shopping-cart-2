import {
  LoadingPage,
  NothingFoundPage,
  StyledCards,
  StyledPagination,
} from './ShopPageCardList.styles';
import { ShopPageCard } from '../ProductCard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { useGetAllProductsQuery } from '../../store/api/api.slice';
import { saveProducts } from '../../store/shopProducts/shopProducts.slice';
import ReactPaginate from 'react-paginate';
import { PRODUCTS_PER_PAGE } from '../../shared/constants/constants';
import { EventType } from './types';
import { useOutletContext } from 'react-router-dom';
import usePaginatedProducts from '../../shared/hooks/usePaginatedProducts';
import { fixImageUrl } from '../../shared/helpers/fixImageUrl';

export const Cards = () => {
  const { data: products = [], isLoading } = useGetAllProductsQuery('');
  const search: string = useOutletContext();

  const [currentProducts, setProductOffset, pageCount] = usePaginatedProducts(
    products,
    search,
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(saveProducts(products));
    // eslint-disable-next-line
  }, [isLoading]);

  const handlePageClick = (event: EventType) => {
    const newOffset = (event.selected * PRODUCTS_PER_PAGE) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setProductOffset(newOffset);
  };

  if (isLoading) {
    return (
      <LoadingPage>
        <h2>Loading content...</h2>
      </LoadingPage>
    );
  }

  return (
    <StyledCards>
      {currentProducts.length ? (
        <div className="goods">
          {currentProducts.map((product) => (
            <ShopPageCard
              key={product.id}
              image={fixImageUrl(product.images[0])}
              title={product.title}
              price={product.price}
              id={product.id}
              category={product.category.name}
            />
          ))}
        </div>
      ) : (
        <NothingFoundPage>
          <h3>There are no such products...</h3>
        </NothingFoundPage>
      )}
      <StyledPagination>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </StyledPagination>
    </StyledCards>
  );
};
