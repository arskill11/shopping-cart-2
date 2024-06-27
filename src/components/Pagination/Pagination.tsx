import { StyledPagination } from './Pagination.styles';

interface Props {
  productsPerPage: number;
  totalProducts: number;
  paginate: (pageNumber: number) => void;
}

export const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
}: Props) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledPagination>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </StyledPagination>
  );
};
