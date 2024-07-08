import truckImg from '../../assets/images/deliveryTruck.png';
import { StyledDelivery } from './HomepageDelivery.styles';

export const HomepageDelivery = () => {
  return (
    <StyledDelivery>
      <img src={truckImg} alt="delivery truck" />
      <div>
        <h2>Free Delivery</h2>
        <p>We ship our goods for free regardlessly from your order sum</p>
      </div>
    </StyledDelivery>
  );
};
