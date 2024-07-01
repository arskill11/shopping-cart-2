import { ProductData } from '../../shared/types/types';
import useProductsQuery from '../../shared/hooks/useProductsQuery';
import { useParams } from 'react-router-dom';
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
  const [productsPerPage] = useState(10);

  const lastproductIndex = currentPage * productsPerPage;
  const firstproductIndex = lastproductIndex - productsPerPage;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const currentProduct = products.slice(firstproductIndex, lastproductIndex);

  return (
    <StyledCards>
      <div className="goods">
        {currentProduct.map((product) => (
          <ShopPageCard
            key={product.id}
            image={
              typeof product.images === 'string'
                ? product.images
                : JSON.parse(product.images)[0]
            }
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
