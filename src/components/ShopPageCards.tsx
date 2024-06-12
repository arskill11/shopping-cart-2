import styled from 'styled-components';
import { PropsAPI } from '../types';
import Card from './Card';
import useAPIProducts from '../useAPIproducts';
import { useParams } from 'react-router-dom';

const StyledCards = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gray;
  padding: 100px 0;
  min-height: 70vh;

  div.goods {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
  }

  a {
    width: 15%;
    height: 90%;
    text-decoration: none;
    color: black;
  }
`;

const Cards = () => {
  const params = useParams();
  const url = params.category ? `category/${params.category}` : ``;
  const goods: PropsAPI[] = useAPIProducts(
    `https://fakestoreapi.com/products/${url}`,
  );

  return (
    <StyledCards>
      <div className="goods">
        {goods.map((good) => (
          <Card
            key={good.id}
            image={good.image}
            title={good.title}
            price={good.price}
            rating={good.rating.rate}
            id={good.id}
          />
        ))}
      </div>
    </StyledCards>
  );
};

export default Cards;
