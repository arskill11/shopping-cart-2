import styled from 'styled-components';
import Goods from './HomepageGoods';
import Delivery from './HomepageDelivery';
import Info from './HomepageInfo';
import useAPIProducts from '../useAPIproducts';

const StyledHomepage = styled.div`
  display: flex;
  flex-direction: column;
`;

const Homepage = () => {
  // const goods: PropsAPI[] = useOutletContext();
  const goods = useAPIProducts('https://fakestoreapi.com/products?limit=4');
  console.log(goods);

  return (
    <StyledHomepage>
      <Info />
      <Goods goods={goods} />
      <Delivery />
    </StyledHomepage>
  );
};

export default Homepage;
