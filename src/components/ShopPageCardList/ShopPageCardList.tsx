import {
  LoadingPage,
  StyledCards,
  StyledPagination,
} from './ShopPageCardList.styles';
import { ShopPageCard } from '../ShopPageCard';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { useGetAllProductsQuery } from '../../store/api/api.slice';
import { saveProducts } from '../../store/shopProducts/shopProducts.slice';
import ReactPaginate from 'react-paginate';
import { PRODUCTS_PER_PAGE } from '../../shared/constants/constants';
import { EventType } from './types';

export const Cards = () => {
  const { data: products = [], isLoading } = useGetAllProductsQuery('');

  const [productsOffset, setProductOffset] = useState(0);
  const endOffset = productsOffset + PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(productsOffset, endOffset);
  const pageCount = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(saveProducts(products));
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
