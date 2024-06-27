import {
  ProductData,
  SortCriteria,
  SortParameters,
} from '../../shared/types/types';
import useProductsQuery from '../../shared/hooks/useProductsQuery';
import { useOutletContext, useParams } from 'react-router-dom';
import { StyledCards } from './ShopPageCardList.styles';
import { ShopPageCard } from '../ShopPageCard';
import { Pagination } from '../Pagination';
import { getProducts, getProductsByCategory } from '../../api/products';
import { useState } from 'react';

export const Cards = () => {
  const params = useParams();
  const category = params.category ? params.category : '';

  const products: ProductData[] = useProductsQuery(
    category ? getProductsByCategory : getProducts,
    category,
  );

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  const lastproductIndex = currentPage * productsPerPage;
  const firstproductIndex = lastproductIndex - productsPerPage;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const [sortCriteria, sortParameter]: [SortCriteria, SortParameters] =
    useOutletContext();

  switch (sortCriteria) {
    case 'price': {
      if (sortParameter === 'ascending') {
        products.sort((productA, productB) => productA.price - productB.price);
      } else {
        products.sort((productA, productB) => productB.price - productA.price);
      }
      break;
    }
    case 'rate': {
      if (sortParameter === 'ascending') {
        products.sort(
          (productA, productB) => productA.rating.rate - productB.rating.rate,
        );
      } else {
        products.sort(
          (productA, productB) => productB.rating.rate - productA.rating.rate,
        );
      }
      break;
    }
    default: {
      console.log('no such an option');
      break;
    }
  }
  const currentProduct = products.slice(firstproductIndex, lastproductIndex);

  return (
    <StyledCards>
      <div className="goods">
        {currentProduct.map((product) => (
          <ShopPageCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            rating={product.rating.rate}
            id={product.id}
          />
        ))}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </StyledCards>
  );
};
