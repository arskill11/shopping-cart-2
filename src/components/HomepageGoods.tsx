import styled from 'styled-components';
import { PropsAPI } from '../types';
import Card from './Card';

const StyledGoods = styled.div`
  height: 60vh;
  background: rgb(220, 220, 220);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  h2 {
    font-size: 50px;
    text-align: center;
  }

  div.cards {
    display: flex;
    gap: 100px;
    justify-content: center;
    height: 80%;
  }

  a {
    width: 15%;
    height: 90%;
    text-decoration: none;
    color: black;
  }
`;

interface Props {
  goods: PropsAPI[];
}

const Goods = ({ goods }: Props) => {
  return (
    <StyledGoods>
      <h2>Our Featured Products!</h2>
      <div className="cards">
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
    </StyledGoods>

    // <StyledGoods>
    //   <h2>Our Featured Products!</h2>
    //   <div className="cards">
    //     {goodsToDisplay.map((good) => (
    //       <Card
    //         key={good.id}
    //         image={good.image}
    //         title={good.title}
    //         price={good.price}
    //         rating={good.rating.rate}
    //       />
    //     ))}
    //   </div>
    // </StyledGoods>
  );
};

export default Goods;
